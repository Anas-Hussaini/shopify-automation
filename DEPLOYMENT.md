# Deployment Guide

This guide covers various deployment options for your portfolio website.

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🌐 Deploy to Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy Steps**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Initialize
   netlify init

   # Deploy
   netlify deploy --prod
   ```

## ☁️ Deploy to AWS Amplify

1. **Via AWS Console**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Configure build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm install
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```

2. **Deploy**
   - Click "Save and Deploy"

## 🐳 Deploy with Docker

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

## 🖥️ Self-Hosted (VPS/Dedicated Server)

### Using PM2

1. **Setup Server**
   ```bash
   # Install Node.js 18+
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Build and Deploy**
   ```bash
   # On your server
   git clone your-repo-url
   cd your-repo
   npm install
   npm run build

   # Start with PM2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 📊 Environment Variables

Before deploying to production, make sure to set any required environment variables:

1. **Vercel**: Add in Project Settings → Environment Variables
2. **Netlify**: Add in Site Settings → Build & Deploy → Environment
3. **AWS Amplify**: Add in App Settings → Environment Variables
4. **Self-hosted**: Create `.env.local` file

Example variables (from `.env.example`):
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME="Your Name - AI Automation Specialist"
```

## 🔒 SSL/HTTPS

- **Vercel/Netlify/Amplify**: SSL is automatic and free
- **Self-hosted**: Use Let's Encrypt:
  ```bash
  sudo apt install certbot python3-certbot-nginx
  sudo certbot --nginx -d yourdomain.com
  ```

## 🎯 Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS or use Netlify DNS

### Cloudflare (Recommended for any hosting)
1. Add your domain to Cloudflare
2. Update nameservers
3. Add DNS records pointing to your hosting
4. Enable "Proxy" for DDoS protection and CDN

## 📈 Performance Optimization

### Before Deploying

1. **Optimize Images**
   - Use Next.js Image component (already implemented)
   - Consider adding images to `/public` folder

2. **Enable Compression**
   - Already handled by Next.js in production

3. **Analytics** (Optional)
   - Add Google Analytics
   - Or Vercel Analytics (built-in on Vercel)

### Post-Deployment

1. **Test Performance**
   - Run Lighthouse audit
   - Check PageSpeed Insights
   - Test on mobile devices

2. **Monitor**
   - Set up uptime monitoring
   - Monitor Core Web Vitals

## 🔄 Continuous Deployment

### GitHub Actions (for non-Vercel deployments)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Server
        run: |
          # Your deployment script here
```

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (18+ required)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### Site Not Loading
- Check environment variables
- Verify DNS settings (can take 24-48 hours)
- Check server logs

### Performance Issues
- Enable caching headers
- Optimize images
- Use CDN (Cloudflare)

## 📝 Deployment Checklist

- [ ] Build passes locally (`npm run build`)
- [ ] All environment variables configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics installed (optional)
- [ ] Contact information updated
- [ ] Social links updated (if applicable)
- [ ] Test on multiple devices
- [ ] Test on multiple browsers
- [ ] Lighthouse score > 90
- [ ] Backup deployment method configured

## 🆘 Support

If you encounter issues:

1. Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)
2. Check your hosting provider's documentation
3. Review error logs in your deployment platform
4. Test locally with `npm run build && npm start`

---

**Need Help?** Open an issue on GitHub or consult the Next.js community.

