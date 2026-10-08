# Kinshuk Narang — Portfolio

React + Vite + Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Updating content

Everything lives in **`src/data/portfolio.js`** — you shouldn't need to touch the components.

| Task | What to do |
|------|------------|
| **Add a project** | Append an object to `projects`. Use `category: 'Backend'` for SDE projects — All/GenAI/Backend filter tabs appear automatically. |
| **Add a screenshot** | Put the image in `public/projects/` (e.g. `rag.png`) and set `image: '/projects/rag.png'`. |
| **Project links** | Fill `github` / `live`. Empty strings hide the buttons. |
| **Resume** | Save your PDF as `public/resume.pdf`. |
| **Hero photo** | Put your image in `public/` and set `profile.heroImage`. |
| **CodeChef / LeetCode** | Fill `url` in each `achievements` entry. |
| **Colours** | Edit the tokens at the top of `src/index.css` (light + dark). |

## Deploy (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`

Or drag-and-drop the `dist/` folder at app.netlify.com/drop. Vercel works the same way (framework preset: Vite).
