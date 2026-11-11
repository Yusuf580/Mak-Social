# Mak Social - Full Stack Setup & Deployment Guide

This guide will help you set up the backend database and deploy for ~100 users.

## 📋 Prerequisites

- **Node.js** (v14+) - [Download](https://nodejs.org/)
- **Windows VPS** (already have)
- **Text Editor** (VS Code recommended)

---

## 🚀 Quick Start (Development)

### Step 1: Install Backend Dependencies

```bash
cd mak-social-backend
npm install sqlite3
npm install
```

### Step 2: Initialize Database

```bash
# Seed the database with initial users
node seed.js
```

Expected output:
```
✅ Database seeded with initial users
```

### Step 3: Start Backend Server

```bash
npm start
```

Expected output:
```
🚀 Mak Social Backend running on http://localhost:5000
📁 Uploads folder: C:\path\to\uploads
💾 Database: C:\path\to\mak_social.db
```

### Step 4: Update Frontend

The frontend already has `db-api.ts` which automatically:
- ✅ Detects if backend is running
- ✅ Falls back to localStorage if offline
- ✅ Syncs image uploads to backend

### Step 5: Test API

Open your browser and test:
```
http://localhost:5000/api/health
http://localhost:5000/api/posts
http://localhost:5000/api/users
```

---

## 🌍 Deployment to Windows VPS (For 100 Users)

### Step 1: Connect to Your VPS

```bash
# Remote Desktop (Windows built-in)
mstsc.exe

# Or use SSH if configured
ssh -i your-key.pem Administrator@your-vps-ip
```

### Step 2: Install Node.js on VPS

1. Download from https://nodejs.org/ (LTS version)
2. Run installer
3. Verify installation:

```bash
node --version
npm --version
```

### Step 3: Upload Backend Code

**Option A: Use Git** (Recommended)
```bash
# On VPS terminal
cd C:\Users\Administrator
git clone https://github.com/your-username/mak-social-backend.git
cd mak-social-backend
npm install
```

**Option B: Copy Files Manually**
- Create folder: `C:\apps\mak-social-backend`
- Copy all backend files there
- Run: `npm install`

### Step 4: Initialize Database on VPS

```bash
cd C:\apps\mak-social-backend
node seed.js
```

### Step 5: Configure Environment for Production

Edit `.env` file on VPS:

```env
PORT=5000
NODE_ENV=production
DATABASE=C:\apps\mak-social-backend\mak_social.db
CORS_ORIGIN=*
```

### Step 6: Start Backend (Keep Running)

```bash
# Option A: Simple start (closes when window closes)
npm start

# Option B: Using PM2 (Recommended - keeps running)
npm install -g pm2
pm2 start server.js --name "mak-social-backend"
pm2 startup
pm2 save
```

### Step 7: Update Frontend Environment

On your **local machine**, update frontend `.env`:

```env
VITE_API_URL=http://your-vps-ip:5000/api
```

Example:
```env
VITE_API_URL=http://192.168.1.100:5000/api
```

### Step 8: Build & Deploy Frontend

```bash
cd front
npm run build
# Upload dist/ folder to Vercel or your hosting
```

---

## 📁 File Structure

```
mak-social-backend/
├── server.js                 # Main Express server
├── seed.js                   # Database seeder
├── package.json              # Dependencies
├── .env                       # Environment variables
├── mak_social.db             # SQLite database (auto-created)
└── uploads/                  # Image uploads folder (auto-created)

mak-social-front/
├── db-api.ts                 # Updated DB with API calls
├── .env                       # API URL configuration
├── vite.config.ts
├── App.tsx
└── ...
```

---

## 🔗 API Endpoints

### Posts
```
GET    /api/posts                 # Get all posts
GET    /api/posts?college=COCIS  # Get posts by college
GET    /api/posts/:id             # Get single post
POST   /api/posts                 # Create post (with image)
DELETE /api/posts/:id             # Delete post
POST   /api/posts/:id/like        # Like post
```

### Comments
```
POST   /api/comments              # Add comment
GET    /api/posts/:id/comments   # Get comments for post
```

### Users
```
GET    /api/users                 # Get all users
GET    /api/users/:id             # Get single user
POST   /api/users                 # Create/Update user
```

### Health
```
GET    /api/health                # Check if server is running
```

---

## 📸 Image Upload Guide

### How It Works

When users create a post with an image:
1. Image is sent to backend with the post data
2. Backend saves image to `uploads/` folder
3. Database stores the image URL path
4. Image is accessible at: `http://vps-ip:5000/uploads/post-xxxxx.jpg`

### Limitations & Solutions

| Issue | Solution |
|-------|----------|
| 10MB file size limit | Change in `server.js` line ~40 |
| Need more storage | Use AWS S3 instead (€0.023/GB) |
| Images lost on restart | Add backup script or cloud storage |

---

## 🔒 Security for 100 Users

### Basic Setup (Good for Testing)
- Uses CORS: Allow all origins (`CORS_ORIGIN=*`)
- No authentication yet
- Suitable for ~100 friends/colleagues

### Recommended for Production
```javascript
// Add to server.js for authentication
const API_KEY = process.env.API_KEY;

app.use((req, res, next) => {
  if (req.headers['x-api-key'] !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});
```

---

## 🐛 Troubleshooting

### Issue: "Cannot POST /api/posts"
**Solution**: Check if backend is running
```bash
npm start
```

### Issue: "CORS error in browser"
**Solution**: Backend might not be running. Check:
```
http://localhost:5000/api/health
```

### Issue: "uploads folder not found"
**Solution**: Backend creates it automatically on first run

### Issue: "Database locked"
**Solution**: Close other connections. SQLite only allows one write at a time.

### Issue: Images not displaying
**Solution**: Check image URL format in browser:
```
http://vps-ip:5000/uploads/post-xxxxx.jpg
```

---

## 📊 Database Backup

Backup your data regularly:

```bash
# Windows
copy mak_social.db mak_social_backup_%date:~-4,4%%date:~-10,2%%date:~-7,2%.db

# Schedule with Task Scheduler for daily backups
```

---

## 🚨 Important Notes for 100 Users

✅ **What This Setup Supports:**
- 100 concurrent users
- Text + image posts
- ~1,000 posts/month
- Images up to 10MB each
- Real-time updates (via polling)

⚠️ **Limitations:**
- Single server (no load balancing needed yet)
- Local storage (no redundancy)
- No real-time WebSocket (yet)

📈 **When to Upgrade:**
- 500+ concurrent users → Add load balancer
- 10,000+ posts → Add database indexing
- Need real-time → Add Socket.io
- Need backup → Add cloud storage (AWS S3)

---

## 🔄 Next Steps (Optional Enhancements)

1. **Add Authentication** - User login with passwords
2. **Email Notifications** - Send emails on new likes/comments
3. **Real-time Updates** - Use WebSocket instead of polling
4. **Image Optimization** - Auto-resize/compress uploads
5. **Analytics** - Track posts/users/engagement

---

## 📞 Support

### For Questions:
- Check error messages in terminal
- Review API endpoint URLs
- Test endpoints with Postman: https://www.postman.com/

### Common Commands:

```bash
# Start backend
npm start

# Check if running
curl http://localhost:5000/api/health

# View recent posts
curl http://localhost:5000/api/posts

# Delete database to reset
del mak_social.db
node seed.js
```

---

**You're all set! 🎉 Share the link with your 100 users and watch them engage!**
