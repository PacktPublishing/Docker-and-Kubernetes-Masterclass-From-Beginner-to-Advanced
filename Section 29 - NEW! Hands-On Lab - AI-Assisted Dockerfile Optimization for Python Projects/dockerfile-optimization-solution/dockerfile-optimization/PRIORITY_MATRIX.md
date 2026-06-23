# Dockerfile Remediation — Priority Matrix

**Context:** Python Flask API running on Kubernetes. Full cleanup pass (no hard deadline). All areas (security, build speed, image size, reliability) are equally weighted.

Axes: **Impact** (security risk, reliability, developer friction) × **Effort** (how much work to implement)

| Priority | #   | Issue                                                     | Impact   | Effort  | Why this rank                                                                                                                                                              |
| -------- | --- | --------------------------------------------------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **P0**   | 8   | Hardcoded `SECRET_KEY`                                    | Critical | Trivial | Baked into image layers forever; visible via `docker history` and any registry. One-line delete.                                                                           |
| **P0**   | 10  | `FLASK_ENV=development` + `DEBUG=true`                    | Critical | Trivial | Werkzeug debugger allows RCE on unhandled exceptions. Remove both lines; inject via K8s env if needed per environment.                                                     |
| **P0**   | 11  | Werkzeug dev server in production                         | High     | Trivial | `gunicorn` is already in `requirements.txt`. One-line CMD change.                                                                                                          |
| **P1**   | 7   | Unpinned `latest` base image                              | High     | Low     | Non-reproducible builds; silent vulnerability introduction. Pin to `python:3.12-slim`.                                                                                     |
| **P1**   | 1   | Full Debian base image                                    | High     | Low     | Bundled with the tag fix above — `python:3.12-slim` cuts the base from ~1 GB to ~150 MB. Zero extra effort.                                                                |
| **P1**   | 5   | `COPY . .` before `pip install`                           | High     | Low     | Every source file change triggers a full dependency reinstall in CI. Reordering to `COPY requirements.txt` → `pip install` → `COPY . .` takes 2 lines.                     |
| **P1**   | 9   | Running as root                                           | High     | Low     | Standard K8s hardening; some clusters enforce non-root via PodSecurityAdmission. Adding a `USER` instruction is 2–3 lines.                                                 |
| **P2**   | 6   | Missing `.dockerignore`                                   | Medium   | Low     | Leaks `.git/`, `__pycache__`, local `.env` files into the build context; slows every build. New file, 5 minutes of work.                                                   |
| **P2**   | 2   | Unnecessary OS packages (`git`, `vim`, `build-essential`) | Medium   | Low     | Expand attack surface, inflate image. Verify nothing in the dep tree needs a compiler, then remove.                                                                        |
| **P3**   | 3   | No `apt` cache cleanup                                    | Low      | Trivial | Append `&& rm -rf /var/lib/apt/lists/*` to the existing `RUN`. Only meaningful if you keep any apt packages at all.                                                        |
| **P3**   | 4   | pip cache stored in image                                 | Low      | Trivial | Add `--no-cache-dir` to the `pip install` line.                                                                                                                            |
| **P3**   | 12  | No `HEALTHCHECK`                                          | Low      | Low     | On K8s, liveness/readiness probes in the Deployment manifest are the right place. Add a Dockerfile `HEALTHCHECK` for local dev parity, but deprioritize against the above. |

## Suggested Execution Order

| Pass                 | Items               | Goal                                                                                    |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------- |
| **Commit 1 — P0**    | #8, #10, #11        | Eliminate the two most dangerous production risks and swap in gunicorn. All one-liners. |
| **Commit 2 — P1**    | #7, #1, #5, #9      | Pin and slim the base image, fix layer caching, add non-root user.                      |
| **Commit 3 — P2/P3** | #6, #2, #3, #4, #12 | Housekeeping: `.dockerignore`, remove unused packages, cache cleanup, HEALTHCHECK.      |

## Notes

- **HEALTHCHECK** in the Dockerfile is largely superseded by Kubernetes liveness/readiness probes — add it for local dev parity but configure K8s probes as the authoritative health signal.
- **SECRET_KEY** should be removed from the Dockerfile entirely and injected at runtime via a Kubernetes Secret mounted as an environment variable.
- **`DEBUG` / `FLASK_ENV`** should be removed from the Dockerfile and set per-environment via K8s ConfigMaps or env fields in the Deployment manifest.
