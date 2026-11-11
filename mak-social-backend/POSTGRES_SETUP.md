# PostgreSQL Setup Guide for Windows VPS

Your Mak Social backend is now configured to use **PostgreSQL** on your Windows VPS at `209.209.42.109:1097`.

## 🚀 Quick Setup

### Step 1: Verify PostgreSQL is Running on Your VPS

On your **VPS (209.209.42.109)**, make sure PostgreSQL is running on port **5432**:

```bash
# Check if PostgreSQL is running
pg_isready -h localhost -p 5432

# Should output: accepting connections
```

### Step 2: Create the Database

Connect to PostgreSQL on your VPS and create the database:

```bash
# Connect as postgres user (default port 5432)
psql -U postgres -h localhost

# Inside psql, run:
CREATE DATABASE mak_social;
CREATE USER mak_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE mak_social TO mak_user;
\q
```

### Step 3: Update Backend Configuration

Edit `.env` file in the backend folder:

```env
PORT=5000
NODE_ENV=development

# PostgreSQL Connection
DB_HOST=209.209.42.109
DB_PORT=5432
DB_NAME=mak_social
DB_USER=mak_user
DB_PASSWORD=your_secure_password

UPLOAD_LIMIT=10485760
CORS_ORIGIN=*
```

### Step 4: Install Dependencies

```bash
cd mak-social-backend
npm install
npm install pg
```

### Step 5: Run Migrations & Seed

```bash
# Create tables
node migrate.js

# Add initial users
node seed.js
```

### Step 6: Start the Server

```bash
npm start
```

Or on Windows, double-click: `start.bat`

---

## ✅ Verify Connection

Test the backend API:

```bash
# Should return database info
curl http://localhost:5000/api/health

# Should return empty array (no posts yet)
curl http://localhost:5000/api/posts

# Should return users
curl http://localhost:5000/api/users
```

---

## 🔧 PostgreSQL on Windows VPS

### Installation (if not already installed)

1. Download PostgreSQL installer for Windows: https://www.postgresql.org/download/windows/
2. Run installer with custom port **1097**
3. Set postgres password during installation
4. Ensure PostgreSQL service is running

### Enable Remote Connections

Edit `postgresql.conf` on your VPS:

**Location**: `C:\Program Files\PostgreSQL\15\data\postgresql.conf`

Change:
```
listen_addresses = 'localhost'
```

To:
```
listen_addresses = '*'
```

Edit `pg_hba.conf`:

**Location**: `C:\Program Files\PostgreSQL\15\data\pg_hba.conf`

Add line:
```
host    all             all             0.0.0.0/0               md5
```

Restart PostgreSQL service after changes.

---

## 🌍 Frontend Configuration

Update frontend `.env`:

```env
VITE_API_URL=http://209.209.42.109:5000/api
```

Then rebuild and deploy:

```bash
cd front
npm run build
# Upload dist/ to Vercel
```

---

## 📋 API Endpoints

All endpoints work the same way:

```
GET    /api/posts                    # Get all posts
POST   /api/posts                    # Create post (with image)
GET    /api/posts/:id                # Get single post
DELETE /api/posts/:id                # Delete post
POST   /api/posts/:id/like           # Like post

POST   /api/comments                 # Add comment
GET    /api/posts/:id/comments      # Get comments

GET    /api/users                    # Get all users
GET    /api/users/:id                # Get single user
POST   /api/users                    # Create/Update user

GET    /api/health                   # Health check
```

---

## 🆘 Troubleshooting

### Issue: "Connection refused"
**Solution**: Check if PostgreSQL is running on port 1097
```bash
netstat -ano | findstr :1097
```

### Issue: "FATAL: Ident authentication failed"
**Solution**: Check credentials in `.env` file

### Issue: "Database mak_social does not exist"
**Solution**: Run database creation steps above

### Issue: "CORS error in browser"
**Solution**: Ensure backend is running and firewall allows port 5000

---

## 💾 Database Backup

Backup your PostgreSQL database:

```bash
# On VPS
pg_dump -U mak_user -h localhost -p 1097 mak_social > backup.sql

# Restore from backup
psql -U mak_user -h localhost -p 1097 mak_social < backup.sql
```

---

## 🚀 For Production (100+ Users)

**Recommended upgrades:**
- ✅ Add authentication (JWT tokens)
- ✅ Enable SSL/TLS encryption
- ✅ Set up automated backups
- ✅ Configure connection pooling (pgBouncer)
- ✅ Add CDN for uploads (AWS S3)
- ✅ Set up monitoring & alerts

---

**Ready to launch with PostgreSQL! 🎉**
