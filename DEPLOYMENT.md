# Deployment Guide

This guide covers deploying the AI & Quantum Computing Learning Platform to various hosting platforms.

---

## 📋 Pre-Deployment Checklist

- [x] TypeScript compilation passes (`npx tsc --noEmit`)
- [x] Linting passes (`npm run lint`)
- [x] Development server runs successfully (`npm run dev`)
- [x] Git repository initialized
- [x] Initial commit created
- [ ] Production build tested (`npm run build`)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel deployment configured

---

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project or create new
   - Vercel auto-detects Next.js settings
   - Deployment URL provided

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard (Easiest)

1. **Push to GitHub first** (see GitHub section below)

2. **Visit [Vercel Dashboard](https://vercel.com/new)**

3. **Import Git Repository**
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration

4. **Configure (usually automatic):**
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `out` (auto-detected)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Get deployment URL

6. **Automatic Deployments**
   - Every push to main branch auto-deploys
   - Preview deployments for pull requests

---

## 📦 GitHub Setup

### Create Repository on GitHub

1. **Go to GitHub**
   - Visit https://github.com/new

2. **Create New Repository**
   - Repository name: `ai-quantum-learning-platform`
   - Description: "Interactive learning platform for AI and Quantum Computing"
   - Visibility: Public (or Private)
   - Do NOT initialize with README (we have one)

3. **Get Repository URL**
   - Copy the HTTPS or SSH URL

### Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/ai-quantum-learning-platform.git

# Push to GitHub
git push -u origin master
```

Or if using main branch:
```bash
git branch -M main
git push -u origin main
```

---

## 🏗️ Local Production Build

Test the production build locally before deploying:

```bash
# Build the static export
npm run build

# The output is in the 'out' directory
# You can serve it locally with any static server
```

To test the build locally:
```bash
# Option 1: Using Python
cd out
python -m http.server 8000

# Option 2: Using Node.js serve
npx serve out

# Option 3: Using VS Code Live Server
# Right-click out/index.html → Open with Live Server
```

Visit `http://localhost:8000` to test.

---

## 🌐 Alternative Deployment Options

### Netlify

1. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard**
   - Import GitHub repository
   - Build command: `npm run build`
   - Publish directory: `out`

### GitHub Pages

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages**
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

3. **Configure GitHub Pages**
   - Go to repository settings
   - Pages section
   - Source: gh-pages branch

### AWS S3 + CloudFront

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync out/ s3://your-bucket-name
   ```

3. **Configure S3 bucket for static hosting**

4. **Optional: Set up CloudFront CDN**

---

## ⚙️ Environment Configuration

This project is fully static and doesn't require environment variables for basic functionality.

If you add features requiring environment variables:

1. **Create `.env.local`** (not committed to Git)
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

2. **Access in code**
   ```typescript
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

3. **Configure in Vercel Dashboard**
   - Project Settings → Environment Variables
   - Add variables for Production/Preview/Development

---

## 🔍 Build Troubleshooting

### Common Issues

**Issue: Build fails with TypeScript errors**
```bash
# Check for type errors
npx tsc --noEmit

# Fix errors in reported files
```

**Issue: Build fails with missing dependencies**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Issue: Page not found after deployment**
- Ensure all routes use proper Next.js file structure
- Check `next.config.js` has `output: 'export'`
- Verify dynamic routes are properly named: `[id]/page.tsx`

**Issue: KaTeX styles not loading**
- Check that KaTeX CSS is in `<head>` in `app/layout.tsx`
- Verify CDN link is accessible

**Issue: Images not loading**
- Ensure `images.unoptimized: true` in `next.config.js`
- Use relative paths for images in public folder

---

## 📊 Post-Deployment Verification

After deployment, verify:

1. **Homepage loads correctly**
   - Hero section visible
   - Navigation works
   - Responsive on mobile

2. **Modules page**
   - All 9 modules display
   - Progress tracking works
   - Module cards clickable

3. **Topic pages**
   - Content renders correctly
   - Mathematical equations display (KaTeX)
   - Code blocks have copy buttons
   - MCQ quizzes work
   - Navigation (Previous/Next) functions

4. **Progress tracking**
   - localStorage saves progress
   - Progress persists after refresh
   - Reset progress works

5. **Responsive design**
   - Test on mobile viewport
   - Check tablet view
   - Ensure desktop layout correct

6. **Performance**
   - Page load times < 3 seconds
   - No console errors
   - Smooth scrolling and interactions

---

## 🔄 Continuous Deployment

### With Vercel (Automatic)

Once connected to GitHub:
- Every push to main/master → Production deployment
- Pull requests → Preview deployments
- Automatic build logs and error reporting

### Manual Deployment Workflow

1. **Make changes locally**
2. **Test locally**
   ```bash
   npm run dev
   npm run build
   ```
3. **Commit changes**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```
4. **Push to GitHub**
   ```bash
   git push origin main
   ```
5. **Vercel auto-deploys** (if connected)

---

## 🛡️ Security Considerations

- No sensitive data in code (already configured)
- `.env.local` in `.gitignore`
- No API keys hardcoded
- Static export = no server vulnerabilities
- Client-side only = secure by default

---

## 📈 Monitoring & Analytics (Optional)

Add analytics if desired:

### Vercel Analytics
```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics
Add script to `app/layout.tsx` in `<head>`.

---

## ✅ Deployment Success Checklist

- [ ] Code built successfully locally
- [ ] All TypeScript errors resolved
- [ ] Git repository initialized and committed
- [ ] Pushed to GitHub
- [ ] Vercel project created
- [ ] Deployment successful
- [ ] Production URL accessible
- [ ] All pages load correctly
- [ ] Mathematical equations render
- [ ] Code copy functionality works
- [ ] Progress tracking persists
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] Custom domain configured (optional)

---

## 🎉 You're Live!

Once deployed, share your platform:
- Add URL to README
- Share with students and educators
- Gather feedback for improvements
- Continue adding content

**Example URLs:**
- Vercel: `https://ai-quantum-learning.vercel.app`
- Custom domain: `https://learn-ai-quantum.com`

---

## 📞 Support

If you encounter issues:
1. Check Vercel build logs
2. Review this guide
3. Check Next.js documentation
4. Open issue on GitHub

---

**Happy Deploying! 🚀**
