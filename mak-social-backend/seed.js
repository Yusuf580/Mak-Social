const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'mak_social.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Failed to connect to SQLite:', err.message);
    process.exit(1);
  }
});

const INITIAL_USERS = [
  { id: 'vc_office', name: 'Prof. Barnabas Nawangwe', role: 'Vice Chancellor', avatar: 'https://marcopolis.net/wp-content/uploads/uganda_report/2020/interviews/makerere_university/Professor_Barnabas_Nawangwe_Vice_Chancellor_of_Makerere_University.jpg', email: 'vc@mak.ac.ug', college: 'Global', bio: 'Vice Chancellor of Makerere University', verified: 1 },
  { id: 'u-ninfa', name: 'Ninfa Monaldo', role: 'Web Architect', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ninfa', email: 'ninfa.m@mak.ac.ug', college: 'COCIS', bio: 'Building the next generation of academic strata.', verified: 1 },
  { id: 'mak_library', name: 'Main Library Node', role: 'Information Hub', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg', email: 'library@mak.ac.ug', college: 'Global', bio: 'Main Library Information Hub', verified: 1 },
  { id: 'mak_unipod', name: 'Mak UniPod', role: 'Innovation Forge', avatar: 'https://unipod.mak.ac.ug/wp-content/uploads/2024/12/Unipod-Logo-SVG.svg', email: 'unipod@mak.ac.ug', college: 'CEDAT', bio: 'Innovation and entrepreneurship hub', verified: 1 },
  { id: 'guild_office', name: 'Guild Presidential Office', role: 'Student Leadership', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4InWGvYRKGuV-Qi3v4SansxAxWjDUWfdqig&s', email: 'guild.president@mak.ac.ug', college: 'Global', bio: 'Student Leadership and Representation', verified: 1 },
];

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function seed() {
  try {
    console.log('🌱 Seeding database with initial users...\n');

    for (const user of INITIAL_USERS) {
      const query = `
        INSERT OR IGNORE INTO users (id, name, email, avatar, college, bio, verified)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      
      await run(query, [
        user.id,
        user.name,
        user.email,
        user.avatar,
        user.college,
        user.bio,
        user.verified
      ]);
      
      console.log(`✅ Added: ${user.name}`);
    }

    console.log('\n✅ Database seeded successfully!');
    
    db.close();
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    db.close();
    process.exit(1);
  }
}

seed();
