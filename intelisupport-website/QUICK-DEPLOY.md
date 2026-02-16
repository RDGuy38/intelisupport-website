# 🚀 Quick Deploy to Microsoft Azure Static Web Apps

## Step-by-Step Deployment Guide

### Prerequisites
- GitHub account
- Microsoft Azure account (free tier available)

### 1. Upload to GitHub

1. **Create a new repository** on GitHub:
   - Go to [github.com](https://github.com) and click "New repository"
   - Name: `intelisupport-website`
   - Make it public or private
   - Don't initialize with README (we already have files)

2. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/intelisupport-website.git
   git branch -M main
   git push -u origin main
   ```

### 2. Create Azure Static Web App

1. **Go to Azure Portal**:
   - Visit [portal.azure.com](https://portal.azure.com)
   - Sign in with your Microsoft account

2. **Create Static Web App**:
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure the app**:
   - **Subscription**: Choose your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `intelisupport-website`
   - **Plan type**: Free (for personal/small business use)
   - **Region**: Choose closest to your location
   - **Source**: GitHub
   - **GitHub account**: Sign in and authorize Azure
   - **Organization**: Your GitHub username
   - **Repository**: `intelisupport-website`
   - **Branch**: `main`
   - **Build Presets**: Custom
   - **App location**: `/`
   - **Api location**: (leave empty)
   - **Output location**: (leave empty)

4. **Review and Create**:
   - Click "Review + create"
   - Click "Create"

### 3. Automatic Deployment

Azure will automatically:
- Create a GitHub Action workflow in your repository
- Deploy your website
- Provide you with a URL like: `https://wonderful-sea-123456789.azurestaticapps.net`

### 4. Access Your Website

1. **Get the URL**:
   - In Azure Portal, go to your Static Web App resource
   - The URL will be displayed in the overview

2. **Test the website**:
   - Visit the provided URL
   - Test all pages: Home, About, Services, Contact
   - Test on mobile devices

### 5. Custom Domain (Optional)

1. **In Azure Portal**:
   - Go to your Static Web App
   - Click "Custom domains"
   - Add your domain
   - Follow DNS configuration instructions

## 🎯 Alternative: GitHub Pages (Simpler Option)

If you prefer GitHub Pages:

1. **Push code to GitHub** (same as step 1 above)

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
   - Click "Save"

3. **Access your site**:
   - URL will be: `https://YOUR_USERNAME.github.io/intelisupport-website`

## ✅ Verification Checklist

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] About page displays team and company info
- [ ] Services page shows all offerings
- [ ] Contact page form validates properly
- [ ] Mobile responsiveness works
- [ ] All images display correctly
- [ ] Contact information is accurate

## 🔧 Post-Deployment Tasks

1. **Update Contact Information**:
   - Replace placeholder phone numbers
   - Update email addresses
   - Verify physical address

2. **Customize Content**:
   - Add real team member photos
   - Update service descriptions
   - Adjust pricing if needed

3. **Set Up Form Handling**:
   - Integrate with email service (Formspree, EmailJS)
   - Add spam protection
   - Set up email notifications

## 📞 Support

If you encounter issues:
- Check the GitHub Actions tab for deployment logs
- Verify all files are committed and pushed
- Ensure Azure Static Web Apps service is properly configured
- Review the DEPLOYMENT.md file for detailed troubleshooting

---

**Your InteliSupport website is ready to go live!** 🎉

The website includes all professional features needed for an IT support business and is optimized for performance and SEO.