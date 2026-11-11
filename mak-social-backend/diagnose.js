const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

console.log('\n========================================');
console.log('PostgreSQL Connection Diagnostics');
console.log('========================================\n');

console.log('📋 Configuration from .env:');
console.log(`   Host: ${process.env.DB_HOST}`);
console.log(`   Port: ${process.env.DB_PORT}`);
console.log(`   Database: ${process.env.DB_NAME}`);
console.log(`   User: ${process.env.DB_USER}`);
console.log(`   Password: ${process.env.DB_PASSWORD ? '***' : 'NOT SET'}\n`);

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: false
});

pool.on('error', (err) => {
  console.error('\n❌ Connection Error:', err.message);
});

console.log('🔗 Attempting to connect...\n');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Query Failed:');
    console.error(err.message);
    console.error('\n📝 Error Details:');
    console.error(`   Code: ${err.code}`);
    console.error(`   Detail: ${err.detail}`);
    console.error('\n💡 Possible solutions:');
    console.error('   1. Check pg_hba.conf on VPS for your IP: 41.210.141.207');
    console.error('   2. Restart PostgreSQL service after editing pg_hba.conf');
    console.error('   3. Verify database "mak_social" exists');
    console.error('   4. Verify user "mak_user" exists');
    console.error('   5. Verify user has privileges on database');
    console.error('\n   Run on VPS to verify setup:');
    console.error('   psql -U postgres -c "\\l"');
    console.error('   psql -U postgres -c "\\du"');
  } else {
    console.log('✅ Connection Successful!');
    console.log(`   Server Time: ${res.rows[0].now}`);
    console.log('\n✅ All systems ready!');
  }
  
  pool.end();
  process.exit(err ? 1 : 0);
});

// Set timeout
setTimeout(() => {
  console.error('\n❌ Connection Timeout - PostgreSQL server not responding');
  pool.end();
  process.exit(1);
}, 5000);
