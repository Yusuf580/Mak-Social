# Mak Social Backend API - PostgreSQL Edition

Express.js backend server with **PostgreSQL** database on your VPS for persistent data storage and image uploads.

## 🚀 Quick Start

### Windows Users
```bash
# Simply run the startup script (it handles everything)
start.bat
```

### macOS/Linux Users
```bash
npm install
node migrate.js
node seed.js
npm start
```

## 📋 Before You Start

**Your PostgreSQL database MUST be running on 209.209.42.109:5432**

See [POSTGRES_SETUP.md](./POSTGRES_SETUP.md) for complete setup instructions.

## ⚙️ Configuration

Edit `.env` with your PostgreSQL credentials:

```env
PORT=5000
NODE_ENV=development
DB_HOST=209.209.42.109
DB_PORT=5432
DB_NAME=mak_social
DB_USER=mak_user
DB_PASSWORD=your_secure_password
```

Server will run on: **http://localhost:5000**

### Gemini post moderation

Put your Gemini key in `mak-social-backend/.env` as `GEMINI_API_KEY=...`. Keep it in the backend environment; do not put it in `front/.env` or `front/.env.local`, because frontend variables are exposed to browsers. Set `GEMINI_MODERATION_MODEL` optionally; the default is `gemini-3.5-flash-lite`.

The backend checks new posts before publishing. Posts that Gemini flags, or posts submitted while the key or Gemini service is unavailable, stay hidden in the admin **Moderation** queue until an administrator approves or rejects them. Restart the backend after changing `.env`.

## 📁 Files

- `server.js` - Express server with PostgreSQL
- `migrate.js` - Create database tables
- `seed.js` - Add initial users
- `package.json` - Node dependencies
- `.env` - Environment configuration
- `start.bat` - Windows one-click startup
- `uploads/` - Image storage folder

## 🔌 API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create post (with optional image)
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/like` - Like post

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create/Update user

### Comments
- `POST /api/comments` - Add comment to post
- `GET /api/posts/:id/comments` - Get comments for post

### Health Check
- `GET /api/health` - Check if server is running

## 💾 Database

Uses **PostgreSQL** on your VPS at 209.209.42.109:1097

- **Database**: `mak_social`
- **User**: `mak_user`
- **Auto-creates** tables when you run `node migrate.js`
- **Tables**: users, posts, comments, likes
- Easy to backup using `pg_dump`

## 📸 Image Uploads

- Upload limit: 10MB per image
- Supported formats: JPEG, PNG, GIF, WebP
- Storage: Local `uploads/` folder
- Access via: `http://localhost:5000/uploads/post-xxxxx.jpg`

## 🔧 Configuration

Edit `.env` to change:
```env
PORT=5000                        # Server port
NODE_ENV=development            # development or production
DB_HOST=209.209.42.109         # PostgreSQL host
DB_PORT=5432                    # PostgreSQL port
DB_NAME=mak_social             # Database name
DB_USER=mak_user               # Database user
DB_PASSWORD=your_password       # Database password
UPLOAD_LIMIT=10485760          # Max upload (10MB)
CORS_ORIGIN=*                  # CORS settings
```

## 🚨 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 5000 in use | Change PORT in .env file |
| Database connection refused | Check PostgreSQL running on VPS at port 5432 |
| "Database does not exist" | Run: `node migrate.js` |
| Images not uploading | Check uploads folder permissions |
| CORS errors | Verify frontend .env has correct API_URL |

## 📖 More Information

- [PostgreSQL Setup Guide](./POSTGRES_SETUP.md) - Complete VPS setup
- [Main Deployment Guide](../DEPLOYMENT_GUIDE.md) - Full stack deployment
- [Frontend Integration](../front/README.md) - Connect to frontend

## 📖 More Info

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for:
- Full stack setup
- Production deployment to Windows VPS
- Scaling tips for 100+ users
- Security best practices

---

**Ready to use! Start with `npm start` or `start.bat` (Windows)**
