# PostgreSQL Quick Setup Checklist

Complete this checklist to get your PostgreSQL backend running.

## ✅ Step 1: VPS Database Setup

**On your VPS at 209.209.42.109:**

- [ ] PostgreSQL is installed and running on port 5432
- [ ] Database `mak_social` exists
- [ ] User `mak_user` exists with password set
- [ ] User has ALL PRIVILEGES on `mak_social` database

**Commands to run on VPS:**

```bash
# Connect to PostgreSQL (port 5432 is default)
psql -U postgres -h localhost

# Run these commands:
CREATE DATABASE mak_social;
CREATE USER mak_user WITH PASSWORD 'YourSecurePassword123!';
GRANT ALL PRIVILEGES ON DATABASE mak_social TO mak_user;
\q
```

**Verify:**
```bash
psql -U mak_user -h localhost -d mak_social -c "SELECT NOW();"
```

---

## ✅ Step 2: Local Machine Setup

**On your Windows machine:**

- [ ] Node.js is installed (`node --version`)
- [ ] npm is available (`npm --version`)

---

## ✅ Step 3: Backend Configuration

**In `mak-social-backend/.env`:**

```env
PORT=5000
NODE_ENV=development

# PostgreSQL Connection
DB_HOST=209.209.42.109
DB_PORT=5432
DB_NAME=mak_social
DB_USER=mak_user
DB_PASSWORD=YourSecurePassword123!

UPLOAD_LIMIT=10485760
CORS_ORIGIN=*
```

- [ ] `.env` file updated with correct PostgreSQL credentials
- [ ] Password matches what you set on VPS

---

## ✅ Step 4: Install & Initialize

**Run these commands:**

```bash
cd mak-social-backend

# Install dependencies
npm install

# Create tables
node migrate.js

# Add initial users
node seed.js
```

- [ ] `npm install` completed without errors
- [ ] `node migrate.js` shows ✅ message
- [ ] `node seed.js` adds users successfully

---

## ✅ Step 5: Start the Server

**Option A: Windows (Recommended)**
```bash
start.bat
```

**Option B: Command Line**
```bash
npm start
```

- [ ] Server starts without errors
- [ ] Shows message: "✅ Connected to PostgreSQL successfully"
- [ ] Server running on http://localhost:5000

---

## ✅ Step 6: Test the API

**In another terminal/PowerShell:**

```bash
# Health check
curl http://localhost:5000/api/health

# Get users
curl http://localhost:5000/api/users

# Get posts
curl http://localhost:5000/api/posts
```

Expected responses:
- [ ] `/api/health` returns database status
- [ ] `/api/users` returns list of users
- [ ] `/api/posts` returns empty array or posts

---

## ✅ Step 7: Update Frontend

**In `front/.env`:**

```env
VITE_API_URL=http://localhost:5000/api
```

Or for VPS:
```env
VITE_API_URL=http://209.209.42.109:5000/api
```

- [ ] Frontend `.env` updated
- [ ] Correct API URL for your setup

---

## ✅ Step 8: Test Frontend Connection

**Start frontend:**
```bash
cd front
npm run dev
```

**In browser:**
- [ ] Go to http://localhost:5173
- [ ] Create a test post with text
- [ ] Try uploading an image
- [ ] Verify post appears in feed
- [ ] Check backend logs for POST request

---

## ✅ Troubleshooting

If something doesn't work:

1. **"Cannot connect to database"**
   - Check PostgreSQL is running on VPS port 5432
   - Verify credentials in `.env`
   - Run: `psql -U mak_user -h 209.209.42.109 -d mak_social`

2. **"EADDRINUSE: Address already in use :::5000"**
   - Port 5000 is taken
   - Change PORT in `.env` to 5001 or higher
   - Or: `lsof -i :5000` and kill the process

3. **"table posts does not exist"**
   - Run migrations: `node migrate.js`
   - Check for error messages

4. **Images not uploading**
   - Check `uploads/` folder exists
   - Verify folder has write permissions
   - Check backend logs for errors

5. **Frontend can't reach backend**
   - Verify backend is running
   - Check VITE_API_URL in frontend `.env`
   - Ensure firewall allows port 5000

---

## 🎯 Success Indicators

You're ready to share with users when:

✅ Backend running without errors
✅ Database connected to PostgreSQL on VPS
✅ All tables created (users, posts, comments, likes)
✅ Initial users seeded
✅ API endpoints responding
✅ Frontend connects and creates posts
✅ Images upload successfully

---

## 📋 Credentials Reference

**Keep these safe:**

```
VPS IP: 209.209.42.109
VPS Port: 1097 (PostgreSQL)
Database: mak_social
Database User: mak_user
Database Password: [your_password]
```

---

**Next Step:** Share the frontend link with your 100 users! 🚀
