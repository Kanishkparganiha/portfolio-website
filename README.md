# Kanishka Parganiha — Portfolio Website

Personal portfolio built with **Next.js 16**, **Tailwind CSS v3**, and deployed on **AWS Amplify**.

**Live:** https://main.d1ycrfy9behtlf.amplifyapp.com
**Repo:** https://github.com/Kanishkparganiha/portfolio-website

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router, SSR/SSG) |
| Styling | Tailwind CSS v3 + custom theme |
| Animations | Framer Motion, Canvas API (particles) |
| Icons | react-icons (Feather) |
| Fonts | Inter, JetBrains Mono (next/font) |
| Hosting | AWS Amplify (auto-deploy from GitHub) |

---

## Project Structure

```
portfolio-website/
├── public/
│   ├── profile.jpg          # About section photo
│   ├── profile-2.jpg        # Hero section photo
│   └── resume.pdf           # Downloadable resume (add yours)
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout — SEO metadata, fonts
│   │   ├── page.js          # Homepage entry (imports HomeContent)
│   │   └── globals.css      # Global styles, Tailwind, custom classes
│   ├── components/
│   │   ├── HomeContent.jsx   # Client wrapper (dynamic imports)
│   │   ├── LoadingScreen.jsx # Splash loader
│   │   ├── Navbar.jsx        # Fixed nav with scroll detection
│   │   ├── Hero.jsx          # Landing section with typing effect
│   │   ├── About.jsx         # Bio, education, certifications
│   │   ├── Skills.jsx        # Skill bars with scroll animation
│   │   ├── Projects.jsx      # Project cards (Amazon + GitHub)
│   │   ├── Experience.jsx    # Timeline — 5 positions
│   │   ├── Blog.jsx          # Article cards
│   │   ├── Contact.jsx       # Contact form + info
│   │   ├── Footer.jsx        # Footer with links
│   │   └── ParticleBackground.jsx  # Canvas particle animation
│   └── data/
│       └── portfolioData.js  # ALL content lives here
├── tailwind.config.js        # Custom colors, animations, fonts
├── next.config.mjs           # Image domains, standalone output
└── package.json
```

---

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
git clone git@github.com:Kanishkparganiha/portfolio-website.git
cd portfolio-website
npm install
```

### Run Dev Server

```bash
npm run dev
```

Opens at http://localhost:3000 with hot reload.

### Production Build (local test)

```bash
npm run build
npm start
```

---

## Making Changes

### Content Updates (most common)

All text, projects, experience, skills live in one file:

```
src/data/portfolioData.js
```

Edit this file to update:
- `personalInfo` — name, title, tagline, social links
- `aboutMe` — bio, highlights
- `skills` — skill categories and levels (0-100)
- `projects` — project cards (title, description, tags, highlights)
- `experience` — work history (role, company, achievements)
- `education` — degrees
- `certifications` — certs list
- `blogPosts` — article cards
- `stats` — hero section numbers

### Styling Changes

- **Global styles / custom classes:** `src/app/globals.css`
- **Colors, fonts, animations:** `tailwind.config.js`
- **Component-specific:** edit the component in `src/components/`

### Adding/Replacing Photos

1. Drop optimized images into `public/` (aim for <200KB)
2. Reference them as `/filename.jpg` in components
3. Use `next/image` with `fill` + `className="object-cover"` for responsive sizing

### Adding a New Section

1. Create `src/components/NewSection.jsx` with `"use client"` at top
2. Add data to `src/data/portfolioData.js`
3. Import and add to `src/components/HomeContent.jsx`
4. Add nav link in `Navbar.jsx` → `navLinks` array

### Important: `"use client"` Directive

Any component using `useState`, `useEffect`, `onClick`, or browser APIs **must** have `"use client"` as the first line. This is a Next.js App Router requirement.

---

## Deployment

### How It Works

```
git push to main → GitHub webhook → Amplify auto-build → Live in ~2 min
```

### Deploy a Change

```bash
# Make your edits
git add .
git commit -m "describe your change"
git push
```

That's it. Amplify detects the push, runs `npm run build`, and deploys automatically.

### Monitor Build Status

**Option A — AWS Console:**
https://us-east-1.console.aws.amazon.com/amplify/apps/d1ycrfy9behtlf

**Option B — CLI:**
```bash
aws amplify list-jobs --app-id d1ycrfy9behtlf --branch-name main --region us-east-1
```

### Rollback

In the Amplify Console, click on any previous build and hit **Redeploy this version**.

---

## AWS Amplify Details

| Setting | Value |
|---------|-------|
| App ID | `d1ycrfy9behtlf` |
| Region | `us-east-1` |
| Branch | `main` (production) |
| Platform | `WEB_COMPUTE` (SSR) |
| Build compute | `STANDARD_8GB` |
| Default domain | `d1ycrfy9behtlf.amplifyapp.com` |
| Auto-build | Enabled on push to `main` |

### Custom Domain

To connect a custom domain:

```bash
aws amplify create-domain-association \
  --app-id d1ycrfy9behtlf \
  --domain-name yourdomain.com \
  --sub-domain-settings prefix="",branchName="main" \
  --region us-east-1
```

Or do it via Amplify Console → App Settings → Domain Management → Add Domain.

You'll need to add the CNAME/ANAME records Amplify provides to your domain's DNS settings.

### Environment Variables

If needed (e.g., API keys for contact form):

```bash
aws amplify update-branch \
  --app-id d1ycrfy9behtlf \
  --branch-name main \
  --environment-variables KEY=value \
  --region us-east-1
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on Amplify | Check build logs in Amplify Console. Usually a dependency or import issue. |
| Styles not applying | Run `npm run build` locally first to catch Tailwind purge issues. |
| Images not loading | Ensure they're in `public/` and referenced as `/filename.jpg` (not `./`). |
| Port 3000 in use locally | `fuser -k 3000/tcp` then re-run `npm run dev` |
| `"use client"` error | Add `"use client"` to top of any component using hooks or event handlers. |
