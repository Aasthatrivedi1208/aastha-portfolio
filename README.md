# Aastha Trivedi — Portfolio

A minimal, responsive portfolio for a Senior Data Engineer. Built as a static export and configured for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `aastha-portfolio`.
2. From this folder, run:

   ```bash
   git init
   git add .
   git commit -m "Create portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aastha-portfolio.git
   git push -u origin main
   ```

3. In the repository on GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for “Deploy portfolio to GitHub Pages” to finish.
6. The published URL will be `https://YOUR_USERNAME.github.io/aastha-portfolio/`.

Every later push to `main` deploys the updated site automatically.

## Update content

- Main content: `app/page.tsx`
- Visual styling: `app/globals.css`
- Résumé download: `public/Aastha_Trivedi_Resume.pdf`
- Page metadata: `app/layout.tsx`

## Cover letter generator

After deployment, open `https://YOUR_USERNAME.github.io/aastha-portfolio/cover-letter/` to create editable, one-page cover letters and download them as PDFs. The fixed profile details and letter template are in `public/cover-letter/index.html`.
