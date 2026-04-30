# Setting Up HerStack Locally 🛠️

Never set up a web project before? No worries — this guide walks you through every step from scratch. It should take about 10–15 minutes.

---

## What you'll need

| Tool | What it is | How to get it |
|------|-----------|---------------|
| **Node.js** | Runs JavaScript on your computer | [nodejs.org](https://nodejs.org) — download the LTS version |
| **npm** | Installs project dependencies | Comes bundled with Node.js — no separate install needed |
| **Git** | Version control — how you save and share code | [git-scm.com](https://git-scm.com/downloads) |
| **A code editor** | Where you'll write code | We recommend [VS Code](https://code.visualstudio.com/) — it's free |
| **A terminal** | Where you run commands | Already on your computer! On Mac: Terminal app. On Windows: use Git Bash (installed with Git) |

---

## Step 1 — Install Node.js

1. Go to [nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the one that says "Recommended for most users")
3. Run the installer and follow the prompts
4. To verify it worked, open your terminal and type:
   ```bash
   node --version
   ```
   You should see something like `v20.11.0`. Any version 18+ is fine.

---

## Step 2 — Install Git

1. Go to [git-scm.com/downloads](https://git-scm.com/downloads)
2. Download and install for your operating system
3. Verify it worked:
   ```bash
   git --version
   ```
   You should see something like `git version 2.43.0`

---

## Step 3 — Fork the repository

**Forking** means making your own copy of HerStack on GitHub so you can make changes without affecting the main project.

1. Go to [github.com/herstack/website](https://github.com/herstack/website)
2. Click the **Fork** button in the top right
3. Click **Create fork**

You now have a copy at `github.com/YOUR_USERNAME/website` 🎉

---

## Step 4 — Clone your fork

**Cloning** means downloading the code to your computer.

1. On your fork's GitHub page, click the green **Code** button
2. Copy the URL shown (looks like `https://github.com/YOUR_USERNAME/website.git`)
3. In your terminal, navigate to where you want to put the project:
   ```bash
   # For example, go to your Documents folder
   cd ~/Documents
   ```
4. Clone it:
   ```bash
   git clone https://github.com/YOUR_USERNAME/website.git
   ```
5. Move into the project folder:
   ```bash
   cd website
   ```

---

## Step 5 — Install dependencies

The project uses libraries written by other people. This command downloads all of them:

```bash
npm install
```

You'll see a lot of text scroll by — that's normal. It might take a minute or two.

When it's done, you'll see a `node_modules/` folder appear in your project. Don't worry about what's in it.

---

## Step 6 — Start the development server

```bash
npm run dev
```

You should see output like:

```
  VITE v5.0.0  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Now open your browser and go to **http://localhost:5173**

🎉 **You should see the HerStack website running on your computer!**

---

## Step 7 — Make a change and see it live

Try it out — open any file in VS Code and make a small change. For example, open `src/data/mentors.js` and change some text. Save the file. Your browser will automatically update — no refresh needed. This is called **hot reload**.

---

## Step 8 — Set up the upstream remote (important!)

This connects your fork to the original HerStack repo so you can get future updates:

```bash
git remote add upstream https://github.com/herstack/website.git
```

Verify it worked:
```bash
git remote -v
```

You should see:
```
origin    https://github.com/YOUR_USERNAME/website.git (fetch)
origin    https://github.com/YOUR_USERNAME/website.git (push)
upstream  https://github.com/herstack/website.git (fetch)
upstream  https://github.com/herstack/website.git (push)
```

---

## Making your first contribution

Now that it's running, here's the simplest possible contribution to get started:

### Option A — Add a resource (no React knowledge needed)

1. Open `src/data/resources.js` in VS Code
2. Copy one of the existing resource objects
3. Fill in a real course you've found helpful
4. Save — check it looks right in the browser
5. Commit and open a PR (see [CONTRIBUTING.md](CONTRIBUTING.md))

### Option B — Fix a typo

1. Use `Ctrl+Shift+F` (or `Cmd+Shift+F` on Mac) in VS Code to search across all files
2. Find the typo
3. Fix it, save, commit, PR

---

## Useful commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production version of the site |
| `npm run preview` | Preview the production build locally |

---

## Stopping the dev server

Press `Ctrl + C` in your terminal.

---

## Common issues

**`npm install` fails**
Make sure Node.js is properly installed. Try closing and reopening your terminal, then run `node --version` again.

**Port 5173 already in use**
Another app is using that port. Vite will automatically try the next port (5174) — just use that URL instead.

**Changes not showing up**
Hard-refresh your browser with `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac).

**Still stuck?**
Open a [GitHub Discussion](https://github.com/herstack/website/discussions) or email us at **hey@herstack.org** — we're happy to help. No question is too basic.

---

## Next steps

- Read [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution guide
- Check [open issues](https://github.com/herstack/website/issues) for things labeled `good first issue`
- Join the conversation in [GitHub Discussions](https://github.com/herstack/website/discussions)

You've got this. 💜
