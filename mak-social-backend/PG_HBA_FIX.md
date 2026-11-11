# PostgreSQL pg_hba.conf Fix - Step by Step

Your error: `no pg_hba.conf entry for host "41.210.141.207", user "mak_user", database "mak_social"`

This means PostgreSQL is blocking connections from your IP address.

## 🔧 Fix on Your Windows VPS

### Step 1: Locate pg_hba.conf

Open PowerShell as Administrator and find the file:

```powershell
# Find PostgreSQL installation
Get-ChildItem "C:\Program Files\PostgreSQL" -Recurse -Filter "pg_hba.conf"
```

Usually located at:
```
C:\Program Files\PostgreSQL\15\data\pg_hba.conf
```

### Step 2: Edit pg_hba.conf

Open the file with Notepad:

```powershell
notepad "C:\Program Files\PostgreSQL\15\data\pg_hba.conf"
```

### Step 3: Add Authentication Rule

**Find this section:**
```
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
```

**Add these lines below it:**

```
# Allow connection from remote client (your IP)
host    mak_social      mak_user        41.210.141.207/32       md5

# Or allow all IPs (less secure but easier):
host    mak_social      mak_user        0.0.0.0/0               md5
```

**Save the file** (Ctrl+S)

### Step 4: Restart PostgreSQL Service

In PowerShell (as Administrator):

```powershell
# Restart the PostgreSQL service
Restart-Service -Name postgresql-x64-15

# Verify it restarted
Get-Service postgresql-x64-15
```

Or using Services GUI:
1. Press `Win+R`
2. Type `services.msc`
3. Find "postgresql-x64-15" or similar
4. Right-click → Restart

### Step 5: Test Connection

Run the diagnostic script:

```bash
cd mak-social-backend
node diagnose.js
```

Should show:
```
✅ Connection Successful!
```

---

## 🆘 If Still Not Working

### Check PostgreSQL Logs

```powershell
# View logs on VPS
Get-Content "C:\Program Files\PostgreSQL\15\data\log\*"
```

### Verify Database and User Exist

```bash
# On VPS, connect as postgres (superuser)
psql -U postgres -h localhost

# Inside psql, run:
\l                          # List all databases
\du                         # List all users
\c mak_social               # Connect to mak_social
\dn+                        # Check schema and permissions
```

### Verify User Permissions

If database exists but user can't connect, fix permissions:

```bash
psql -U postgres -h localhost

# Run these commands:
GRANT CONNECT ON DATABASE mak_social TO mak_user;
ALTER USER mak_user PASSWORD 'YourSecurePassword123!';
```

---

## ✅ Common pg_hba.conf Patterns

| Scenario | Line to Add |
|----------|------------|
| Allow your IP | `host mak_social mak_user 41.210.141.207/32 md5` |
| Allow local network | `host mak_social mak_user 192.168.0.0/16 md5` |
| Allow all IPs | `host mak_social mak_user 0.0.0.0/0 md5` |
| Encrypt connection | Use `scram-sha-256` instead of `md5` |

---

## 📋 Verification Checklist

After editing pg_hba.conf:

- [ ] File was edited and saved
- [ ] PostgreSQL service was restarted
- [ ] Run `node diagnose.js` shows ✅ Connection Successful
- [ ] Run `node migrate.js` completes without errors
- [ ] Run `node seed.js` adds users successfully
- [ ] Run `npm start` server shows ✅ Database Connected

---

**Next:** Run this command and share the output:
```bash
node diagnose.js
```
