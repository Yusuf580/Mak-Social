
import React from 'react';
import { 
  Home, Search, MessageCircle, User, Calendar, BookOpen, Bell, Award, Users
} from 'lucide-react';
import { Post, AnalyticsData, ChatConversation, College, AuthorityRole } from './types';

export const NAV_ITEMS = [
  { id: 'home', label: 'Home Feed', icon: <Home size={22} /> },
  { id: 'groups', label: 'Groups Hub', icon: <Users size={22} /> },
  { id: 'search', label: 'Search', icon: <Search size={22} /> },
  { id: 'calendar', label: 'Schedule', icon: <Calendar size={22} /> },
  { id: 'resources', label: 'Study Vault', icon: <BookOpen size={22} /> },
  { id: 'notifications', label: 'Notifications', icon: <Bell size={22} /> },
  { id: 'messages', label: 'Messages', icon: <MessageCircle size={22} /> },
  { id: 'profile', label: 'My Profile', icon: <User size={22} /> },
];

export const MOCK_NEWS = [
  { id: 'n1', title: 'New research grants are now available for students.', category: 'Academic', time: '2m ago' },
  { id: 'n2', title: 'Welcome ceremony starts now at the Main Hall.', category: 'Campus', time: '12m ago' },
  { id: 'n3', title: 'Mak vs MUBs Football Today at the Arena.', category: 'Sports', time: 'Live' },
  { id: 'n4', title: 'Library maintenance scheduled for Sunday.', category: 'Admin', time: '5h ago' }
];

export const COLLEGE_BANNERS: Record<College, string> = {
  COCIS: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200',
  CEDAT: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&w=1200',
  CHUSS: 'https://images.unsplash.com/photo-1491843384429-181717b8e24f?auto=format&fit=crop&w=1200',
  CHS: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200',
  CONAS: 'https://images.unsplash.com/photo-1532187875605-183881249611?auto=format&fit=crop&w=1200',
  CAES: 'https://images.unsplash.com/photo-1495107336214-bca9f1d95c18?auto=format&fit=crop&w=1200',
  COBAMS: 'https://images.unsplash.com/photo-1454165833767-02a6e30996d4?auto=format&fit=crop&w=1200',
  CEES: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=1200',
  LAW: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200'
};

export const MOCK_POSTS: Post[] = [
  {
    id: 'p-event-homecoming-2026',
    author: 'Makerere Alumni Association',
    authorId: 'alumni_office',
    authorRole: 'Official Node',
    authorAvatar: 'https://thumbs.dreamstime.com/b/elevate-your-event-vibrant-alumni-meet-logo-designed-to-capture-spirit-connection-celebration-perfect-338077132.jpg',
    authorAuthority: 'Official',
    timestamp: 'Just now',
    isEventBroadcast: true,
    eventTitle: 'Grand Alumni Homecoming 2026',
    eventDate: '2026-06-20T10:00:00',
    eventTime: '10:00',
    eventLocation: 'Freedom Square',
    content: `<h1>Grand Homecoming 2026</h1><p>Calling all former students! Join us for a day of networking, mentorship, and celebration as we honor a century of excellence at The Hill.</p>`,
    hashtags: ['#Homecoming', '#MakerereAlumni', '#Heritage'],
    likes: 420,
    commentsCount: 35,
    comments: [],
    views: 8900,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: ['https://cioafrica.co/wp-content/uploads/2022/10/Makerere-Uni.jpg']
  },
  {
    id: 'p-vc-1',
    author: 'Prof. Barnabas Nawangwe',
    authorId: 'vc_office',
    authorRole: 'Vice Chancellor',
    authorAvatar: 'https://marcopolis.net/wp-content/uploads/uganda_report/2020/interviews/makerere_university/Professor_Barnabas_Nawangwe_Vice_Chancellor_of_Makerere_University.jpg',
    authorAuthority: 'Administrator',
    timestamp: '15m ago',
    content: `<h1>Central Administration Directive</h1><p>The University Council has officially synchronized the new research innovation strata. We are prioritizing the development of local logic hubs in all colleges.</p>`,
    hashtags: ['#RegistrySync', '#MakerereResearch'],
    likes: 1240,
    commentsCount: 45,
    comments: [],
    views: 12000,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: ['https://www.monitor.co.ug/resource/image/4501730/landscape_ratio3x2/1200/800/30bf0642ec5596d69a097b2e29a19774/Za/latest15pix.jpg']
  },
  {
    id: 'p-ad-mtn',
    author: 'MTN Uganda',
    authorId: 'mtn_partner',
    authorRole: 'Pulse Partner',
    authorAvatar: 'https://yt3.googleusercontent.com/gHH044hTirIU5EXvmfOn6yXwJKM2pQaU2nt9OWrsnQq_fj4YWeQpuofWvyF-S_edIRZjSty4ZA=s900-c-k-c0x00ffffff-no-rj',
    authorAuthority: 'Corporate',
    isAd: true,
    timestamp: 'Just now',
    content: `<h1>MTN Pulse: Data Synchronization</h1><p>Fuel your research node with the most aggressive data bundles on the Hill. Dial *157# to sync your device with the Pulse strata.</p>`,
    hashtags: ['#MTNPulse', '#UnlimitedSync'],
    likes: 840,
    commentsCount: 12,
    comments: [],
    views: 45000,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: ['https://www.mtn.co.ug/wp-content/uploads/2021/11/MTN-HVP-Social-post-1.jpg']
  },
  {
    id: 'p-lib-1',
    author: 'Main Library Node',
    authorId: 'mak_library',
    authorRole: 'Official Hub',
    authorAvatar: 'https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg',
    authorAuthority: 'Official',
    timestamp: '1h ago',
    content: `<h1>LIBRARY OPENING HOURS UPDATED</h1>
              <p>Hello Makerere community,</p>
              <p>
              The Main Library will be open from <strong>8:00 AM to 10:00 PM</strong> starting next week, Monday. 
              This is to support students preparing for coursework, research, and examinations.
              </p>
              <p>
              All students are reminded to carry their <strong>valid student ID</strong> when accessing library services. 
              Silent study zones must be respected, and group discussions should only take place in designated areas.
              </p>
              <p>
              For assistance, visit the Reference Desk or send us a message right here on MakSocial.
              </p>
              <p>Happy studying 📖</p>
              `,
    hashtags: ['#TheVault', '#ResearchIntegrity'],
    likes: 312,
    commentsCount: 8,
    comments: [],
    views: 5600,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: ['https://campusbee.ug/wp-content/uploads/2022/06/FB_IMG_16565179974172233.jpg']
  },
  {
    id: 'p-unipod-2',
    author: 'Mak UniPod',
    authorId: 'mak_unipod',
    authorRole: 'Innovation Forge',
    authorAvatar: 'data:image/png;base64,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',
    authorAuthority: 'Official',
    timestamp: '1h ago',
    content: `
      <h1>Open Innovation Call: Prototype & Build</h1>

      <p>
        Makerere University Innovation Pod (Mak UniPod) invites students from all colleges 
        to access our <strong>advanced prototyping facilities</strong>, including 3D printing, 
        electronics labs, and product design support.
      </p>

      <p>
        Final-year students, startup teams, and research groups can now submit their project 
        concepts for <strong>rapid prototyping, mentorship, and technical validation</strong>.
      </p>

      <p>
        Visit the UniPod Forge to register your idea or message us here on MakSocial 
        for guidance on how to get started.
      </p>

      <p><strong>Build. Test. Innovate.</strong></p>
    `,
    hashtags: ['#MakUniPod', '#Innovation', '#Prototyping', '#Startups'],
    likes: 1240,
    commentsCount: 36,
    comments: [],
    views: 15420,
    flags: [],
    isOpportunity: true,
    college: 'CEDAT',
    images: [
      'https://www.undp.org/sites/g/files/zskgke326/files/styles/scaled_image_large/public/2024-12/boys_and_girls.jpg?itok=aY8OcUMK',
      'https://www.undp.org/sites/g/files/zskgke326/files/2024-03/student_on_the_cnc_milling_machine.jpg'
    ]
  },
  {
  id: 'p-guild-president-1',
  author: 'Office of the Guild President',
  authorId: 'guild_president',
  authorRole: 'Guild President',
  authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4InWGvYRKGuV-Qi3v4SansxAxWjDUWfdqig&s',
  authorAuthority: 'Student Leader',
  timestamp: '45m ago',
  content: `
    <h1>Message from the Guild President</h1>

    <p>
      Dear Makerere students,
    </p>

    <p>
      I am pleased to inform you that following continuous engagement with university 
      management, the Guild leadership has secured a resolution on key student welfare 
      concerns, including allowances and academic support services.
    </p>

    <p>
      Implementation will begin next week, and further updates will be shared through 
      official university channels and here on MakSocial.
    </p>

    <p>
      I encourage all students to remain united, informed, and actively engaged as we 
      work together to improve the student experience at Makerere University.
    </p>

    <p><strong>Service Above Self.</strong></p>
  `,
  hashtags: ['#GuildLeadership', '#StudentVoice', '#Makerere'],
  likes: 3450,
  commentsCount: 284,
  comments: [],
  views: 48700,
  flags: [],
  isOpportunity: false,
  college: 'Global',
  images: [
    'https://eagle.co.ug/wp-content/uploads/2024/10/image-2024-10-29T151841.969-1024x485.png'
  ]
},
  {
    id: 'p-stud-x-1',
    author: 'Brian K.',
    authorId: 'u-brian',
    authorRole: 'CS Finalist',
    authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Brian',
    timestamp: '20m ago',
    content: `<p>COCIS Wi-Fi is finally stable tonight. Grinding till morning 💻🔥</p>`,
    hashtags: ['#FinalYear', '#COCIS'],
    likes: 34,
    commentsCount: 2,
    comments: [],
    views: 420,
    flags: [],
    isOpportunity: false,
    college: 'COCIS',
    images: []
  },
  {
  id: 'p-lec-general-1',
  author: 'Dr. Julianne O.',
  authorId: 'u-julianne',
  authorRole: 'Senior Lecturer',
  authorAvatar: 'https://media.licdn.com/dms/image/v2/C5603AQEbfx2r6KmEBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1528009115211?e=2147483647&v=beta&t=P79glpXCLtisJ5uT6QkGpTtdDBZ1IHYCouww850tWFE',
  authorAuthority: 'Lecturer',
  timestamp: '2h ago',
  content: `
    <h1>A Note to All Students</h1>
    <p>As the semester approaches its final phase, I encourage all students to plan their revision schedules early and make good use of the academic resources available across the university.</p>
    <p>Consistent effort, healthy rest, and academic integrity remain key to success.</p>
  `,
  hashtags: ['#AcademicAdvice', '#StudySmart', '#Makerere'],
  likes: 420,
  commentsCount: 27,
  comments: [],
  views: 9800,
  flags: [],
  isOpportunity: false,
  college: 'COCIS',
  images: []
},
  {
  id: 'p-ad-airtel',
  author: 'Airtel Uganda',
  authorId: 'airtel_partner',
  authorRole: 'Network Partner',
  authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGb5X14Mj1kTtRIuEZWnqS7dh4vfKGYMgGw&s',
  authorAuthority: 'Corporate',
  isAd: true,
  timestamp: '5h ago',
  content: `
    <h1>A Reason to Imagine: University Bundles</h1>
    <p>Switch to the smartphone network and enjoy unthrottled access to Microsoft Teams and Zoom for your online research. Dial <strong>*175*3#</strong>.</p>
  `,
  hashtags: ['#AirtelUniv', '#Imagination'],
  likes: 3100,
  commentsCount: 45,
  comments: [],
  views: 65000,
  flags: [],
  isOpportunity: false,
  college: 'Global',
  images: ['https://pbs.twimg.com/media/GLXZVucWEAAi-rf.jpg']
},
  {
  id: 'p-stud-text-3',
  author: 'Kato M.',
  authorId: 'u-kato',
  authorRole: 'Software Engineering Student',
  authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kato',
  timestamp: '8m ago',
  content: `<p>Why does motivation always show up at 2:17 AM when the deadline is at 8:00 AM 😭💻</p>`,
  hashtags: ['#StudentLife', '#Deadlines'],
  likes: 143,
  commentsCount: 19,
  comments: [],
  views: 1200,
  flags: [],
  isOpportunity: false,
  college: 'COCIS',
  images: []
},
  {
  id: 'p-law-1',
  author: 'Counsel Peter',
  authorId: 'u-peter',
  authorRole: 'Legal Advisor',
  authorAvatar: 'https://img.freepik.com/premium-photo/portrait-handsome-african-american-man-closeup-business-man-model_423170-2131.jpg',
  authorAuthority: 'Official',
  timestamp: '7h ago',
  content: `
    <h1>Free Legal Clinic for First-Year Students</h1>
    <p>The Legal Clinic is offering free legal guidance to all first-year students on matters related to the Guild Constitution and student rights.</p>
  `,
  hashtags: ['#LegalClinic', '#StudentRights'],
  likes: 412,
  commentsCount: 25,
  comments: [],
  views: 3400,
  flags: [],
  isOpportunity: false,
  college: 'LAW',
  images: ['https://campusbee.ug/wp-content/uploads/2024/06/20240619_170258.jpg']
},
  {
  id: 'p-ad-stanbic',
  author: 'Stanbic Bank',
  authorId: 'stanbic_partner',
  authorRole: 'Finance Node',
  authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0s2wWh35UqBmtsFx7GsnO0XMDYuTWTapnQ&s',
  authorAuthority: 'Corporate',
  isAd: true,
  timestamp: '8h ago',
  content: `
    <h1>Flexi-Pay: Pay Tuition Easily</h1>
    <p>Settle your university fees instantly from your wing. Flexi-Pay is now fully synced with the Makerere Central Finance Hub.</p>
  `,
  hashtags: ['#EasyBanking', '#MakerereFlex'],
  likes: 1520,
  commentsCount: 15,
  comments: [],
  views: 43000,
  flags: [],
  isOpportunity: false,
  college: 'Global',
  images: ['https://www.independent.co.ug/wp-content/uploads/2025/06/Mellisa-Nyakwera-Solomon-Kimera.jpg']
},
  {
    id: 'p-grc-cedat-2',
    author: 'Nambasa S.',
    authorId: 'u-mugisha',
    authorRole: 'GRC CEDAT',
    authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVJA7A0yJBC5n42YzAU2GSUpUo46FdbUpBA&s',
    authorAuthority: 'Student Leader',
    timestamp: '20m ago',
    content: `<h1>CEDAT Wi-Fi Upgrade Completed</h1><p>The GRC has successfully upgraded the CEDAT common room Wi-Fi.</p>`,
    hashtags: ['#CEDATLife', '#TechAccess', '#GRCUpdates'],
    likes: 310,
    commentsCount: 18,
    comments: [],
    views: 5400,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: []
  },
  {
  id: 'p-chs-1',
  author: 'Dr. Nalule',
  authorId: 'u-nalule',
  authorRole: 'Medical Lead',
  authorAvatar: 'https://covab.mak.ac.ug/wp-content/uploads/2025/03/Nalule-Agnes-Sarah.jpg',
  authorAuthority: 'Official',
  timestamp: '9h ago',
  content: `<h1>Health Alert: Flu Cases in CHS Wing</h1><p>Several flu cases have been reported in the CHS wing. Students are advised to take precautions.</p>`,
  hashtags: ['#HealthFirst', '#CampusWellness'],
  likes: 570,
  commentsCount: 16,
  comments: [],
  views: 9100,
  flags: [],
  isOpportunity: false,
  college: 'CHS',
  images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak_CcF8BjBbrszumAnLw34llp_XBI3f1xIA&s']
},
  {
  id: 'p-opp-2',
  author: 'Ministry of Science & Technology',
  authorId: 'moest_node',
  authorRole: 'Grant Provider',
  authorAvatar: 'data:image/jpeg;base64,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',
  authorAuthority: 'Official',
  timestamp: '10h ago',
  isOpportunity: true,
  opportunityData: {
    type: 'Grant',
    isAIVerified: true,
    detectedBenefit: 'UGX 10M Fund'
  },
  content: `<h1>Makerere Innovation Grant: Sustainable Solutions</h1><p>The Ministry of Science & Technology is offering a UGX 10M grant for student projects focused on sustainable innovations.</p>`,
  hashtags: ['#Sustainability', '#StudentGrants', '#MakerereInnovation'],
  likes: 980,
  commentsCount: 48,
  comments: [],
  views: 20000,
  flags: [],
  college: 'Global',
  images: ['https://www.independent.co.ug/wp-content/uploads/2022/10/Musenero-science-1.jpg']
},
  {
    id: 'p-opp-hackathon-1',
    author: 'MIIC HUB',
    authorId: 'techhub_node',
    authorRole: 'Innovation Hub',
    authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAo0oNf-vgci6RcLlsbvGrRm7jJmUFAkyJQ&s',
    authorAuthority: 'Official',
    timestamp: '12m ago',
    isOpportunity: true,
    opportunityData: {
      type: 'Grant',
      isAIVerified: true,
      detectedBenefit: 'Cash Prizes + Mentorship'
    },
    content: `<h1>🚀 Makerere Hackathon 2026 is Here!</h1><p>Are you ready to code, innovate, and compete? Join the Makerere Hackathon 2026!</p>`,
    hashtags: ['#MakerereHackathon', '#InnovationChallenge', '#TechAtMakerere'],
    likes: 720,
    commentsCount: 35,
    comments: [],
    views: 12500,
    flags: [],
    college: 'Global',
    images: ['https://miichub.com/wp-content/uploads/2025/07/IMG_8155-1024x683.jpg']
  },
  {
    id: 'p-news-1',
    author: 'Makerere University News',
    authorId: 'pulse_news',
    authorRole: 'Media Wing',
    authorAvatar: 'https://media.istockphoto.com/id/929047972/vector/world-news-flat-vector-icon-news-symbol-logo-illustration-business-concept-simple-flat.jpg?s=612x612&w=0&k=20&c=5jpcJ7xejjFa2qKCzeOXKJGeUl7KZi9qoojZj1Kq_po=',
    authorAuthority: 'Official',
    timestamp: '11h ago',
    content: `<h1>⚡ Exam Dates Official!</h1><p>Makerere students, mark your calendars! Logic testing kicks off on 12th December 2026.</p>`,
    hashtags: ['#ExamSeason', '#MakerereNews', '#StudySmart', '#CampusUpdate'],
    likes: 2500,
    commentsCount: 520,
    comments: [],
    views: 55000,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: ['https://donnamorgancounselling.co.uk/wp-content/uploads/2023/03/exam-stress.jpg']
  },
  {
  id: 'p-stud-1',
  author: 'Opio Eric',
  authorId: 'u-opio',
  authorRole: 'Computer Science Student',
  authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Opio',
  timestamp: '12h ago',
  content: `<p>Just completed the <strong>COCIS Network Bootcamp</strong>! 🚀 Learned so much about routing and cloud networking.</p>`,
  hashtags: ['#NetworkBootcamp', '#COCIS', '#MakerereCS', '#HandsOnLearning'],
  likes: 150,
  commentsCount: 10,
  comments: [],
  views: 1200,
  flags: [],
  isOpportunity: false,
  college: 'COCIS',
  images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr12vxIIFkHgr9czQdx2-ZpJAQHsTuvVU83A&s']
},
  {
  id: 'p-opp-totalenergies',
  author: 'Total Energies Uganda',
  authorId: 'totalenergies_node',
  authorRole: 'Corporate Partner',
  authorAvatar: 'https://totalenergies.ug/themes/custom/butterfly_theme/logo.svg?v=1.1',
  authorAuthority: 'Official',
  timestamp: '30m ago',
  isOpportunity: true,
  opportunityData: {
    type: 'Internship',
    isAIVerified: true,
    detectedBenefit: 'Stipend + Mentorship'
  },
  content: `<h1>💼 Total Energies Student Internship 2026</h1><p>Total Energies Uganda is inviting students from all colleges at Makerere to apply.</p>`,
  hashtags: ['#TotalEnergiesInternship', '#MakerereCareers', '#StudentOpportunities'],
  likes: 640,
  commentsCount: 22,
  comments: [],
  views: 10800,
  flags: [],
  college: 'Global',
  images: ['https://www.icanstudent.com/wp-content/uploads/2026/01/Delicate-Feminine-Interior-Designer-Featured-Products-Facebook-Post_20260110_072809_0000-940x675.png']
},
  {
    id: 'p-hospital-1',
    author: 'University Hospital',
    authorId: 'university_hospital',
    authorRole: 'Health Hub',
    authorAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQ7AXGqNl4CNxMtxquN03ZsS7q-EcOlu_7A&s',
    authorAuthority: 'Official',
    timestamp: '17h ago',
    content: `<h1>💉 Free Student Vaccinations</h1><p>Attention Makerere students! University Hospital is offering free vaccinations.</p>`,
    hashtags: ['#CampusHealth', '#StayProtected', '#MakerereWellness'],
    likes: 1450,
    commentsCount: 95,
    comments: [],
    views: 20000,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: ['https://ugandaradionetwork.net/a/helpers/image.php?fileId=135221&m=0&w=1200&h=600']
  },
  {
    id: 'p-fun-1',
    author: 'Campus Fun Hub',
    authorId: 'campus_fun',
    authorRole: 'Student Entertainment',
    authorAvatar: 'https://img.freepik.com/premium-vector/fun-playful-logo-using-custom-typography-with-quirky-shapes-bright-colors_1307247-1830.jpg',
    authorAuthority: 'Official',
    timestamp: '5m ago',
    content: `<h1>😂 Campus Mood</h1><p>Why did the student bring a ladder to the exam? Because they heard the questions were on a higher level!</p>`,
    hashtags: ['#CampusHumor', '#StudentLife', '#ExamSeason'],
    likes: 320,
    commentsCount: 12,
    comments: [],
    views: 1500,
    flags: [],
    isOpportunity: false,
    college: 'Global',
    images: []
  }
];

export const MOCK_CHATS: ChatConversation[] = [
  {
    id: 'chat-1',
    user: { name: 'Dr. Julianne O.', avatar: 'data:image/jpeg;base64,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', status: 'online', role: 'Faculty Node' },
    unreadCount: 2,
    lastMessage: 'Handshake successful. Ready for uplink.',
    lastTimestamp: '10:01 AM',
    isGroup: false,
    messages: [
      { id: 'm1', text: 'Initializing protocol...', timestamp: '10:00 AM', isMe: false },
      { id: 'm2', text: 'Handshake successful. Ready for uplink.', timestamp: '10:01 AM', isMe: false }
    ]
  }
];

export const ANALYTICS: AnalyticsData[] = [
  { day: 'Mon', posts: 120, activeUsers: 450, messages: 1200, revenue: 400, engagement: 1275 },
  { day: 'Tue', posts: 145, activeUsers: 480, messages: 1350, revenue: 420, engagement: 1350 },
  { day: 'Wed', posts: 180, activeUsers: 520, messages: 1600, revenue: 500, engagement: 1550 },
  { day: 'Thu', posts: 210, activeUsers: 600, messages: 1900, revenue: 620, engagement: 1800 },
  { day: 'Fri', posts: 240, activeUsers: 710, messages: 2400, revenue: 780, engagement: 2100 },
  { day: 'Sat', posts: 110, activeUsers: 320, messages: 900, revenue: 350, engagement: 950 },
  { day: 'Sun', posts: 90, activeUsers: 280, messages: 750, revenue: 280, engagement: 820 }
];
