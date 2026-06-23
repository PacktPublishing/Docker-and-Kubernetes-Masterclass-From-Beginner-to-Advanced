# Baseline

Build time: 31.636s
DISK USAGE CONTENT SIZE
1.76GB 444MB

## Image layers

IMAGE CREATED CREATED BY SIZE COMMENT
2ba3931d8897 About a minute ago CMD ["python" "app.py"] 0B buildkit.dockerfile.v0
<missing> About a minute ago ENV SECRET_KEY=supersecretkey123 0B buildkit.dockerfile.v0
<missing> About a minute ago ENV DEBUG=true 0B buildkit.dockerfile.v0
<missing> About a minute ago ENV FLASK_ENV=development 0B buildkit.dockerfile.v0
<missing> About a minute ago EXPOSE [5000/tcp] 0B buildkit.dockerfile.v0
<missing> About a minute ago RUN /bin/sh -c pip install -r requirements.t… 28.4MB buildkit.dockerfile.v0
<missing> About a minute ago COPY . . # buildkit 20.5kB buildkit.dockerfile.v0
<missing> About a minute ago WORKDIR /app 8.19kB buildkit.dockerfile.v0
<missing> About a minute ago RUN /bin/sh -c apt-get update && apt-get ins… 74.1MB buildkit.dockerfile.v0
<missing> 9 days ago CMD ["python3"] 0B buildkit.dockerfile.v0
<missing> 9 days ago RUN /bin/sh -c set -eux; for src in idle3 p… 16.4kB buildkit.dockerfile.v0
<missing> 9 days ago RUN /bin/sh -c set -eux; savedAptMark="$(a… 82.3MB buildkit.dockerfile.v0
<missing> 9 days ago ENV PYTHON_SHA256=a97d5549e9ad81fe17159ed02c… 0B buildkit.dockerfile.v0
<missing> 9 days ago ENV PYTHON_VERSION=3.14.3 0B buildkit.dockerfile.v0
<missing> 9 days ago RUN /bin/sh -c set -eux; apt-get update; a… 20.5MB buildkit.dockerfile.v0
<missing> 9 days ago ENV PATH=/usr/local/bin:/usr/local/sbin:/usr… 0B buildkit.dockerfile.v0
<missing> 9 days ago RUN /bin/sh -c set -ex; apt-get update; ap… 679MB buildkit.dockerfile.v0
<missing> 9 days ago RUN /bin/sh -c set -eux; apt-get update; a… 208MB buildkit.dockerfile.v0
<missing> 9 days ago RUN /bin/sh -c set -eux; apt-get update; a… 63.7MB buildkit.dockerfile.v0
<missing> 11 days ago # debian.sh --arch 'arm64' out/ 'trixie' '@1… 156MB debuerreotype 0.17

# Optimized

Build time: 11.776s
DISK USAGE CONTENT SIZE
253MB 55.5MB

## Image layers

IMAGE CREATED CREATED BY SIZE COMMENT
629157d28eb3 About a minute ago CMD ["gunicorn" "--bind" "0.0.0.0:5000" "--w… 0B buildkit.dockerfile.v0
<missing> About a minute ago HEALTHCHECK &{["CMD-SHELL" "curl -f http://l… 0B buildkit.dockerfile.v0
<missing> About a minute ago USER appuser 0B buildkit.dockerfile.v0
<missing> About a minute ago RUN /bin/sh -c addgroup --system appuser && … 45.1kB buildkit.dockerfile.v0
<missing> About a minute ago EXPOSE [5000/tcp] 0B buildkit.dockerfile.v0
<missing> About a minute ago COPY . . # buildkit 24.6kB buildkit.dockerfile.v0
<missing> About a minute ago RUN /bin/sh -c pip install --no-cache-dir -r… 23.5MB buildkit.dockerfile.v0
<missing> 2 minutes ago COPY requirements.txt . # buildkit 12.3kB buildkit.dockerfile.v0
<missing> 2 minutes ago WORKDIR /app 8.19kB buildkit.dockerfile.v0
<missing> 2 minutes ago RUN /bin/sh -c apt-get update && apt-get ins… 14.5MB buildkit.dockerfile.v0
<missing> 2 days ago CMD ["python3"] 0B buildkit.dockerfile.v0
<missing> 2 days ago RUN /bin/sh -c set -eux; for src in idle3 p… 16.4kB buildkit.dockerfile.v0
<missing> 2 days ago RUN /bin/sh -c set -eux; savedAptMark="$(a… 44.6MB buildkit.dockerfile.v0
<missing> 2 days ago ENV PYTHON_SHA256=c08bc65a81971c1dd578318282… 0B buildkit.dockerfile.v0
<missing> 2 days ago ENV PYTHON_VERSION=3.12.13 0B buildkit.dockerfile.v0
<missing> 2 days ago ENV GPG_KEY=7169605F62C751356D054A26A821E680… 0B buildkit.dockerfile.v0
<missing> 2 days ago RUN /bin/sh -c set -eux; apt-get update; a… 4.99MB buildkit.dockerfile.v0
<missing> 2 days ago ENV LANG=C.UTF-8 0B buildkit.dockerfile.v0
<missing> 2 days ago ENV PATH=/usr/local/bin:/usr/local/sbin:/usr… 0B buildkit.dockerfile.v0
<missing> 11 days ago # debian.sh --arch 'arm64' out/ 'trixie' '@1… 109MB debuerreotype 0.17
