# Deployment Guide for thendo-procurement-1

## Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and deploy

Or use the CLI:
```bash
npm i -g vercel
vercel
```

## Netlify

1. Run `npm run build`
2. Deploy the `.next` output or use Netlify's Next.js adapter
3. Or connect your GitHub repo for auto-deploys

## Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

## Custom Domain

Most hosting providers support custom domains:
1. Add your domain in the hosting dashboard
2. Update your DNS records (usually CNAME or A record)
3. Wait for DNS propagation (up to 48 hours)
4. SSL is usually automatic
