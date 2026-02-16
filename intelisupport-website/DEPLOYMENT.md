# InteliSupport Website Deployment Guide

This guide covers multiple deployment options for the InteliSupport website, with a focus on Microsoft Azure Static Web Apps and GitHub Pages.

## 🚀 Deployment Options

### Option 1: Azure Static Web Apps (Recommended for Microsoft Integration)

Azure Static Web Apps provides excellent integration with GitHub and offers:
- Free tier with custom domains
- Automatic HTTPS
- Global CDN
- Built-in authentication (if needed later)
- Serverless API integration

#### Steps to Deploy:

1. **Create Azure Static Web App**:
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new "Static Web App" resource
   - Connect to your GitHub repository
   - Set build details:
     - App location: `/`
     - Output location: `` (leave empty)

2. **GitHub Integration**:
   - Azure will automatically create a GitHub Action workflow
   - The workflow file is already included: `.github/workflows/azure-static-web-apps.yml`
   - Push your code to GitHub to trigger automatic deployment

3. **Configuration**:
   - The `staticwebapp.config.json` file is included for routing and security headers
   - Custom domain can be configured in Azure Portal

#### Required GitHub Secrets:
- `AZURE_STATIC_WEB_APPS_API_TOKEN` (automatically created by Azure)

### Option 2: GitHub Pages

GitHub Pages is free and simple for static websites:

1. **Repository Setup**:
   - Push code to a GitHub repository
   - Go to repository Settings → Pages
   - Select source: "Deploy from a branch"
   - Choose branch: `main` or `master`
   - Folder: `/ (root)`

2. **Custom Domain** (optional):
   - Add `CNAME` file with your domain
   - Configure DNS settings

### Option 3: Netlify

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/`

2. **Custom Domain**:
   - Configure in Netlify dashboard
   - Automatic HTTPS included

### Option 4: Vercel

1. **Import Project**:
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Framework preset: "Other"
   - Root directory: `./`

## 📁 Repository Structure

```
intelisupport-website/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml    # Azure deployment workflow
├── css/
│   └── style.css                        # Main stylesheet
├── js/
│   ├── script.js                        # Main JavaScript
│   └── contact.js                       # Contact form functionality
├── images/                              # Image assets (empty, using external URLs)
├── assets/                              # Additional assets (empty)
├── index.html                           # Homepage
├── about.html                           # About page
├── services.html                        # Services page
├── contact.html                         # Contact page
├── staticwebapp.config.json             # Azure Static Web Apps configuration
├── package.sh                           # Packaging script
├── README.md                            # Main documentation
└── DEPLOYMENT.md                        # This file
```

## 🔧 Configuration Files

### Azure Static Web Apps Config (`staticwebapp.config.json`)
- **Routes**: Clean URLs without .html extensions
- **Security Headers**: CSP, referrer policy, permissions policy
- **MIME Types**: Proper content type handling
- **Navigation Fallback**: SPA-like routing

### GitHub Actions Workflow
- **Triggers**: Push to main/master, pull requests
- **Build**: No build step required (static files)
- **Deploy**: Automatic deployment to Azure

## 🌐 Custom Domain Setup

### For Azure Static Web Apps:
1. Go to Azure Portal → Your Static Web App
2. Navigate to "Custom domains"
3. Add your domain and follow DNS configuration steps

### For GitHub Pages:
1. Add `CNAME` file to repository root with your domain
2. Configure DNS:
   - CNAME record: `www.yourdomain.com` → `yourusername.github.io`
   - A records for apex domain to GitHub's IPs

## 🔒 Security Features

The website includes several security measures:
- **Content Security Policy**: Restricts resource loading
- **HTTPS Enforcement**: All platforms provide automatic HTTPS
- **Referrer Policy**: Controls referrer information
- **Permissions Policy**: Restricts browser features

## 📊 Performance Optimization

- **Minified CSS**: Compressed stylesheets
- **Optimized Images**: External CDN usage
- **Efficient JavaScript**: Minimal, optimized code
- **CDN Delivery**: Global content delivery

## 🔍 SEO Configuration

- **Meta Tags**: Proper titles and descriptions
- **Semantic HTML**: Search engine friendly structure
- **Sitemap**: Can be added for better indexing
- **Robots.txt**: Can be configured if needed

## 📱 Testing After Deployment

1. **Functionality Testing**:
   - Navigation between pages
   - Contact form validation
   - Mobile responsiveness
   - Cross-browser compatibility

2. **Performance Testing**:
   - Page load speeds
   - Image loading
   - JavaScript functionality

3. **SEO Testing**:
   - Meta tag verification
   - Mobile-friendly test
   - Structured data validation

## 🚨 Troubleshooting

### Common Issues:
- **404 Errors**: Check routing configuration
- **CSS/JS Not Loading**: Verify file paths and MIME types
- **Form Not Working**: Implement backend or use form service
- **Images Not Displaying**: Check external URL accessibility

### Azure Static Web Apps Specific:
- **Build Failures**: Check GitHub Actions logs
- **Routing Issues**: Verify `staticwebapp.config.json`
- **Custom Domain**: Ensure DNS propagation

## 📞 Next Steps After Deployment

1. **Contact Form Integration**:
   - Set up backend API or use service like Formspree
   - Configure email notifications
   - Add spam protection

2. **Analytics**:
   - Add Google Analytics or Azure Application Insights
   - Monitor website performance and user behavior

3. **Content Updates**:
   - Update contact information
   - Add real company images
   - Customize service offerings and pricing

4. **Additional Features**:
   - Add blog section
   - Implement client portal
   - Add live chat functionality

---

**Ready to Deploy!** Choose your preferred platform and follow the steps above. The website is optimized for all major hosting platforms and will work seamlessly once deployed.