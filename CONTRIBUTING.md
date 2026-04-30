# Contributing to HerStack 💜

First off — thank you for being here. Every contribution, big or small, helps us build a better platform for girls in AI across India.

This guide will walk you through everything you need to know.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Making a Pull Request](#making-a-pull-request)
- [Adding a Mentor](#adding-a-mentor)
- [Adding a Resource](#adding-a-resource)
- [Proposing a Storyboard](#proposing-a-storyboard)
- [Reporting Bugs](#reporting-bugs)
- [Style Guide](#style-guide)

---

## Code of Conduct

HerStack is a welcoming, inclusive space. We expect all contributors to:

- Be kind and respectful in all interactions
- Give and receive feedback graciously
- Support newcomers — everyone starts somewhere
- Focus on the mission: helping girls in AI

Harassment of any kind will not be tolerated.

---

## Ways to Contribute

You don't need to know how to code to contribute meaningfully. Here's what you can do:

### No coding required
- ✅ **Add a mentor** — Edit a data file and open a PR
- ✅ **Add a learning resource** — Edit a data file and open a PR
- ✅ **Fix a typo** — Find it, fix it, PR it
- ✅ **Propose a storyboard concept** — Open an issue
- ✅ **Improve copy** — Better wording for any section

### Some coding required
- 🛠 **Fix a bug** — Check issues labeled `bug`
- 🛠 **Build a feature** — Check issues labeled `good first issue`
- 🛠 **Improve accessibility** — Always appreciated
- 🛠 **Improve mobile responsiveness**

### Design skills
- 🎨 **Create a storyboard** — Illustrate an AI concept (see guide below)
- 🎨 **Improve UI/UX** — Open an issue first to discuss

---

## Getting Started

**First time setting up a project locally?** Read **[SETUP.md](SETUP.md)** first — it walks through everything from scratch including installing Node.js and Git.

### 1. Fork and clone the repo

```bash
# Fork via GitHub UI, then clone your fork
git clone https://github.com/YOUR_USERNAME/website.git
cd website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a branch

```bash
# Use a descriptive branch name
git checkout -b add-mentor-priya-mehta
git checkout -b fix-nav-mobile
git checkout -b feature/dark-mode
```

### 4. Make your changes

### 5. Test locally

```bash
npm run dev
# Visit http://localhost:5173 and check your changes
```

### 6. Commit with a clear message

```bash
git add .
git commit -m "feat: add Priya Mehta to mentors"
```

Use these commit prefixes:
- `feat:` — new feature or content
- `fix:` — bug fix
- `docs:` — documentation changes
- `style:` — formatting, no logic changes
- `refactor:` — code restructure, no feature change
- `chore:` — dependency updates, config changes

---

## Making a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin your-branch-name
   ```
2. Go to the [HerStack website repo](https://github.com/herstack/website) on GitHub
3. Click **"Compare & pull request"**
4. Fill in the PR template:
   - What did you change?
   - Why?
   - Screenshots if it's a visual change
5. Submit — a maintainer will review within a few days

---

## Adding a Mentor

Mentors are stored in `src/data/mentors.js`. You can add one without touching any UI code.

### Steps

1. Open `src/data/mentors.js`
2. Copy this template and fill it in:

```js
{
  id: 5,                          // next number in sequence
  initials: 'AB',                 // 2 letters for the avatar
  name: 'Anjali Banerjee',
  role: 'AI Engineer · Microsoft',
  advice: 'Your one sentence of advice for young girls in AI.',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE',
  avatarColor: 'purple',          // purple | violet | teal | amber
},
```

3. Open a PR with the title: `feat: add [Name] to mentors`

### Guidelines for mentor advice
- Keep it under 2 sentences
- Make it specific and actionable, not generic
- Write it in first person

---

## Adding a Resource

Resources are stored in `src/data/resources.js`.

### Steps

1. Open `src/data/resources.js`
2. Copy this template:

```js
{
  id: 7,                             // next number in sequence
  platform: 'Coursera',
  title: 'Machine Learning Specialization',
  url: 'https://coursera.org/...',
  free: true,                        // is it free?
  hasCert: true,                     // free certificate available?
  difficulty: 'beginner',            // beginner | intermediate | advanced
  stage: 1,                          // 1 | 2 | 3 (matches learning path stages)
  durationWeeks: 4,
  tags: ['ml', 'python'],
},
```

3. Open a PR with the title: `feat: add [Resource Name] to resources`

### Resource guidelines
- Only add **free** resources (or resources with a free audit option)
- Must be high quality — would you recommend it to a friend?
- No affiliate links
- Include accurate metadata (difficulty, duration)

---

## Proposing a Storyboard

Storyboards are illustrated explainers of AI concepts. This is one of HerStack's most unique features.

### To propose a concept
Open a GitHub issue with:
- Label: `storyboard`
- Title: `[Storyboard] What is Overfitting?`
- Description: What the concept is, why it matters, who the audience is (beginner / intermediate)

### To submit a completed storyboard
1. Create your illustrations (PNG/SVG, minimum 1200px wide)
2. Open an issue first to discuss format and placement
3. A maintainer will guide you through adding it to the site

---

## Reporting Bugs

Found something broken? Please open an issue with:

- A clear title: `Bug: Nav menu doesn't close on mobile`
- Steps to reproduce
- Expected vs actual behaviour
- Screenshots if helpful
- Your browser and OS

---

## Style Guide

### Code
- Use functional React components
- Keep components focused — one job per component
- Put data in `src/data/` not hardcoded in components
- Use CSS variables from `globals.css` for colors, not hardcoded hex values
- Use Tailwind for layout, CSS variables for brand colors

### Copy
- Write for a 16-year-old girl in India — clear, warm, not condescending
- Active voice over passive
- Short sentences
- Avoid jargon unless you're explaining it

---

## Questions?

Open a [GitHub Discussion](../../discussions) or email us at hey@herstack.org.

We're excited to build this with you. 💜
