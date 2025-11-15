# 🚀 Deployment Checklist

## Before Deploying:

### 1. ✅ Update .env File

```env
# Personal Info
VITE_NAME=Abhijit Mishra
VITE_EMAIL=imabhijit333@gmail.com
VITE_PHONE=+91-9439759033
VITE_LINKEDIN_URL=https://www.linkedin.com/in/abhi333
VITE_GITHUB_URL=https://github.com/abhijitmishra

# EmailJS (from emailjs.com)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Project Links
VITE_PROJECT_PORTFOLIO_GITHUB_URL=https://github.com/abhijitmishra/portfolio
VITE_PROJECT_PORTFOLIO_LIVE_URL=https://yourportfolio.vercel.app
VITE_PROJECT1_GITHUB_URL=https://github.com/abhijitmishra/ecart-ai
VITE_PROJECT1_LIVE_URL=https://ecart-ai.vercel.app
VITE_PROJECT2_GITHUB_URL=https://github.com/abhijitmishra/employee-management
VITE_PROJECT2_LIVE_URL=
```

### 2. 📸 Add Your Photo

Place `my-photo.jpg` in `portfolio/public/` folder (500x500px recommended)

### 3. 🧪 Test Locally

```bash
npm run build
npm run preview
```

### 4. ✅ Verify All Features

- [ ] All sections load correctly
- [ ] Social media links work
- [ ] Project GitHub/Demo buttons work
- [ ] Contact form works (EmailJS configured)
- [ ] Photo displays correctly
- [ ] Animations are smooth
- [ ] Mobile responsive

## Deploy to Vercel:

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Add environment variables from .env
5. Deploy!

## Deploy to Netlify:

1. Push code to GitHub
2. Go to netlify.com
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy!

---

Your portfolio is ready for production! 🎉
