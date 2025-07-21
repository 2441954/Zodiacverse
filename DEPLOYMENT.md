# 🚀 Zodiacverse Deployment Guide

This guide covers multiple deployment options for your Zodiacverse hackathon submission.

## 🌐 Quick Deploy Options

### 1. Replit Deployment (Recommended for Hackathons)

Your app is already configured for Replit! Simply:

1. Click the "Deploy" button in Replit
2. Your app will be automatically deployed to a `.replit.app` domain
3. Share the live URL in your hackathon submission

**Benefits:**
- Zero configuration required
- Automatic HTTPS
- Built-in monitoring
- Perfect for demos and prototypes

### 2. Vercel Deployment

Perfect for production deployments:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project root
vercel

# Follow the prompts:
# ? Set up and deploy "zodiacverse"? [Y/n] y
# ? Which scope do you want to deploy to? [Your account]
# ? Link to existing project? [y/N] n
# ? What's your project's name? zodiacverse
# ? In which directory is your code located? ./
```

Add `vercel.json` for configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ]
}
```

### 3. Railway Deployment

Great for full-stack apps:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

Add `railway.toml`:

```toml
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "npm start"
healthcheckPath = "/"
healthcheckTimeout = 100
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10
```

## 🔧 Environment Variables

For production deployments, you may need:

```bash
# Database (if using PostgreSQL)
DATABASE_URL="your-postgres-connection-string"

# Node Environment
NODE_ENV="production"

# Custom domain (optional)
CUSTOM_DOMAIN="your-domain.com"
```

## 📦 Build Configuration

The app is configured with these npm scripts:

```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build",
    "start": "NODE_ENV=production node dist/index.js",
    "build:server": "esbuild server/index.ts --bundle --platform=node --outfile=dist/index.js",
    "build:client": "vite build",
    "build:all": "npm run build:client && npm run build:server"
  }
}
```

## 🌍 Domain Setup (Optional)

### Custom Domain on Replit
1. Go to your Repl settings
2. Click "Custom Domain"
3. Add your domain and follow DNS instructions

### Custom Domain on Vercel
1. Add domain in Vercel dashboard
2. Configure DNS records
3. Automatic HTTPS certificate

## 📊 Performance Optimization

### Build Optimization
```bash
# Optimize for production
npm run build

# Check bundle size
npx vite-bundle-analyzer

# Optimize images (if needed)
npx imagemin-cli client/src/assets/* --out-dir=dist/assets
```

### Caching Headers
Add to your deployment platform:

```
# Static assets
/assets/*
  Cache-Control: max-age=31536000, immutable

# API responses
/api/*
  Cache-Control: max-age=300, s-maxage=600
```

## 🔍 Monitoring & Analytics

### Health Check Endpoint
Already included at `/health`:

```typescript
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});
```

### Error Logging
Add error tracking for production:

```bash
npm install @sentry/node @sentry/react
```

## 🛡 Security Considerations

### Production Security
- Enable CORS for your domain only
- Add rate limiting for API endpoints
- Validate all user inputs
- Use HTTPS everywhere
- Secure headers with helmet.js

```bash
npm install helmet cors express-rate-limit
```

## 🎯 Hackathon Submission Checklist

### ✅ Pre-Deployment
- [ ] All features working locally
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] Clear user flows

### ✅ Deployment
- [ ] App deployed and accessible
- [ ] All API endpoints working
- [ ] Database connected (if applicable)
- [ ] HTTPS enabled
- [ ] Error handling working

### ✅ Documentation
- [ ] README.md complete
- [ ] Live demo URL added
- [ ] Screenshots included
- [ ] API documentation
- [ ] Setup instructions clear

### ✅ Demo Preparation
- [ ] Test user journey end-to-end
- [ ] Prepare demo data
- [ ] Test on different devices
- [ ] Practice demo flow
- [ ] Backup deployment ready

## 🚨 Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**API Not Working:**
- Check environment variables
- Verify CORS settings
- Check network requests in dev tools

**Slow Loading:**
- Optimize images
- Enable gzip compression
- Check bundle size

### Debug Commands
```bash
# Check build output
npm run build && ls -la dist/

# Test production locally
npm run build && npm start

# Check dependencies
npm audit
npm outdated
```

## 📱 Mobile Testing

Test on multiple devices:
- iPhone (Safari, Chrome)
- Android (Chrome, Samsung Browser)
- Tablet layouts
- Desktop responsive breakpoints

## 🎨 Performance Metrics

Target metrics for hackathon:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

Test with:
```bash
npx lighthouse http://localhost:5000 --view
```

## 📈 Analytics Setup

Track usage for your demo:
- Page views
- Feature usage
- User flows
- NFT mints
- Zodiac calculations

Quick analytics with Vercel:
```json
{
  "analytics": {
    "id": "your-analytics-id"
  }
}
```

---

Your Zodiacverse is now ready to impress the judges! 🌟

**Need help?** Check the main README.md or open an issue.