# AI-Assisted Dockerfile Optimization

Hello and welcome to this lab where we will practice optimizing a Dockerfile for a Python project! We will go through different optimization options, and explore how to use AI to effectively identify opportunities for improvements!

Let's jump right in!

## Lab Overview

|                         |                            |
| ----------------------- | -------------------------- |
| **Duration**            | 60 minutes                 |
| **Difficulty**          | Beginner–Intermediate      |
| **Recommended Courses** | Docker, Prompt Engineering |

### Learning Objectives

By the end of this lab, you will be able to:

1. Identify common Dockerfile anti-patterns that affect image size, build time, and security in Python applications.
2. Use AI tools effectively to audit infrastructure-as-code and evaluate the quality of AI suggestions.
3. Prioritize optimization changes based on their practical impact.
4. Measure and communicate the concrete results of your optimizations.

### Problem Statement

Imagine you've just joined a team that is containerizing a Python web API. A colleague wrote the initial Dockerfile to "just make it work," and it does... But the resulting image is bloated, slow to build, and never passes the security checks in your CI/CD pipeline (so you choose to... ignore them? Not really the best approach, right?).

Your task is to audit the Dockerfile, use AI to help surface issues, and produce an optimized version. You must document the important decisions you make, including what you chose **not** to change and why.

## Prerequisites

### Required Knowledge

- Basic Docker concepts: images, layers, build cache, `docker build`, `docker images`
- Reading a `Dockerfile` and understanding instruction order
- Familiarity with Python packaging (`pip`, `requirements.txt`)

### Required Tools

| Tool                              | Version                              | Notes                                 |
| --------------------------------- | ------------------------------------ | ------------------------------------- |
| Docker Desktop (or Docker Engine) | 24.x or later                        | Must be running before the lab starts |
| An AI assistant                   | Any (ChatGPT, Claude, Copilot, etc.) | Browser or IDE integration both work  |
| A text editor                     | Any                                  | VS Code recommended                   |
| A terminal                        | Any                                  | bash or zsh                           |

---

## Lab Environment Setup

_Target time: 10 minutes_

### Starter Files

The `starter/` directory contains three files:

```
starter/
├── Dockerfile        ← the file you'll be auditing and optimizing
├── app.py            ← a simple Flask inventory API (do not modify)
└── requirements.txt  ← Python dependencies
```

We're gonna keep the application logic super simple, ok? Our focus is on the Dockerfile.

### Setup Steps

**1. Verify Docker is running:**

```bash
docker version
```

You should see both a Client and Server section. If not, start your Docker Engine (I'll be using Docker Desktop, but you can choose whatever one you prefer) before continuing.

**2. Navigate to the starter directory:**

```bash
cd starter/
```

**3. Build the baseline image and record its key metrics:**

```bash
# Time the build and note the duration
time docker build -t inventory-api:baseline .

# Record the image size
docker images inventory-api:baseline

# Explore the image layers
docker history inventory-api:baseline
```

> Write down the **build time**, **image size**, and the number of layers - you'll need these for comparison later. Pay attention to which layers are the heaviest in the `docker history` output.

**4. Confirm the container starts successfully:**

```bash
docker run --rm -p 5000:5000 inventory-api:baseline
```

In a second terminal, test an endpoint:

```bash
curl http://localhost:5000/health
```

You should see: `{"status":"healthy","timestamp":...}`

Stop the container with `Ctrl+C`.

**5. Open `Dockerfile` in your editor and let's being!**

## Activity 1 - Audit: What's Wrong Here? (20 minutes)

### Objective

Systematically identify all issues in the starter Dockerfile, use AI to verify and expand your list, then produce a **prioritized issue matrix** that will drive your optimization decisions.

### Instructions

**Step 1: Read the Dockerfile yourself first (5 min)**

Before involving AI, read through the Dockerfile carefully. Note anything that looks suspicious, wasteful, or that you know to be a best-practice violation. Write your observations down - even rough notes are fine.

**Step 2: Use AI to audit the Dockerfile (8 min)**

Craft a prompt and to inspect the full contents of the Dockerfile. A good starting prompt looks like:

> "Here is a Dockerfile for a Python Flask API running in production. Audit it for issues related to: image size, build caching, security, and reliability. For each issue, explain the problem and suggest a fix."

Evaluate the AI's response critically:

- Did it find issues you missed?
- Did it suggest anything that seems wrong or inapplicable to this scenario?
- Did it miss anything you already spotted?

**Step 3: Have AI build your issue priority matrix (7 min)**

Share your audit findings with AI and ask it to generate a prioritized issue matrix. Include enough context to prompt it to ask clarifying questions first. This "Flip the Script" pattern can be useful to help tuning optimizations to your project's needs:

> "I've audited the following Dockerfile and identified these issues: [your list]. Before you create a prioritized issue matrix, ask me any questions you need to understand my priorities and constraints."

Let AI ask its questions. Answer them honestly - this is a production API, you deploy frequently, and your team cares most about security and build speed. Then let it generate the table.

Review the AI-generated matrix critically:

- Does the prioritization reflect the context you provided?
- Are any of the P1s actually low-risk in your judgment?
- Did AI add issues to the matrix that you didn't find on your own?

Adjust any entries you disagree with and document your reasoning. Save the output in a `DECISIONS.md` file for later use in the lab.

### Key Questions to Consider

1. Which issues would cause an immediate problem in a production environment versus which are just inefficiencies?
2. The AI may suggest more changes than are practical to implement in one session. How do you decide what's "P1" versus "P3"?
3. Are there any AI suggestions you would **reject**? What's your reasoning?

## Activity 2 - Optimize: Build and Measure (20 minutes)

### Objective

Apply the P1 and P2 fixes from your priority matrix to produce an optimized Dockerfile, then build it and compare concrete metrics against your baseline.

### Instructions

**Step 1: Ask AI to generate the optimized Dockerfile (10 min)**

You've done the hard analytical work - now let AI handle the implementation. Share your completed `DECISIONS.md` with AI and ask it to produce an optimized Dockerfile:

> "Based on this prioritized issue matrix, generate an optimized Dockerfile for a Python Flask API. Implement all P1 and P2 fixes. Do not modify the application code or requirements.txt. Add a short inline comment on each changed line explaining why the change was made."

Review the output carefully before accepting it:

- Does every change correspond to an entry in your matrix?
- Did AI introduce anything that wasn't in your matrix? Is it justified?
- Do the inline comments explain the _why_, or are they just describing _what_?
- Does anything look wrong or unsafe?

Save the result as `Dockerfile.optimized` in the `starter/` directory. Edit anything you disagree with and update `DECISIONS.md` to reflect any changes.

**Step 2: Build and measure (5 min)**

```bash
# Build the optimized image
docker build -t inventory-api:optimized -f Dockerfile.optimized .

# Compare image sizes
docker images | grep inventory-api

# Verify it still works
docker run --rm -p 5000:5000 inventory-api:optimized
curl http://localhost:5000/health
```

Record the results in `DECISIONS.md`:

```markdown
## Results

| Metric     | Baseline | Optimized | Change |
| ---------- | -------- | --------- | ------ |
| Build time | ...s     | ...s      | -...%  |
| Image size | ... MB   | ... MB    | -...%  |
| Layers     | ...      | ...       | ...    |
```

To count layers: `docker history inventory-api:baseline | wc -l` and `docker history inventory-api:optimized | wc -l`  
To time the optimized build: `time docker build -t inventory-api:optimized -f Dockerfile.optimized .`

### Key Questions to Consider

1. If you changed the order of `COPY` and `RUN` instructions, try rebuilding the optimized image a second time - how does the second build time compare to the first? Why?
2. Are there optimizations that made the image smaller but would complicate debugging in development? How would you handle that tension?
3. Is there a point of diminishing returns on optimization? Where would you stop?

### Expected Deliverable

A working `Dockerfile.optimized` and a completed results table in `DECISIONS.md` documenting before/after metrics.

## Wrap-Up (5 minutes)

Before finishing, verify you can answer these questions without referring to notes:

- What is Docker layer caching, and what instruction order maximizes its benefit?
- What is one security risk you identified and how did you mitigate it?
- What change produced the largest image size reduction, and why?

Review your `DECISIONS.md` and make sure every issue you identified has a final decision entry.
