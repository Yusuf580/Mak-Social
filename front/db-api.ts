import { Post, User, College, UserStatus, Resource, CalendarEvent, MakNotification, PlatformEmail, ChatConversation, LiveEvent, Group, GroupMessage, LostFoundItem } from './types';
import { MOCK_POSTS, MOCK_CHATS } from './constants';

// Configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const DB_KEYS = {
  POSTS: 'maksocial_posts_v27_populated',
  USERS: 'maksocial_users_v26_registry',
  LOGGED_IN_ID: 'maksocial_current_user_id',
  RESOURCES: 'maksocial_resources_v26_vault',
  CALENDAR: 'maksocial_calendar_v26_ roadmap',
  BOOKMARKS: 'maksocial_bookmarks_v26_favs',
  CHATS: 'maksocial_chats_hub_v1_sync',
  EMAILS: 'maksocial_emails_v26_prod_v2_mail',
  NOTIFICATIONS: 'maksocial_notifications_v26_signals',
  EVENTS: 'maksocial_events_v26_live',
  GROUPS: 'maksocial_groups_v26_clusters',
  LOST_FOUND: 'maksocial_lost_found_registry'
};

const INITIAL_USERS: User[] = [
  { id: 'vc_office', name: 'Prof. Barnabas Nawangwe', role: 'Vice Chancellor', avatar: 'https://marcopolis.net/wp-content/uploads/uganda_report/2020/interviews/makerere_university/Professor_Barnabas_Nawangwe_Vice_Chancellor_of_Makerere_University.jpg', connections: 45000, email: 'vc@mak.ac.ug', college: 'Global', status: 'Graduate', subscriptionTier: 'Enterprise', joinedColleges: ['Global'], postsCount: 124, followersCount: 42000, followingCount: 89, totalLikesCount: 156000, badges: ['Verified', 'Admin'], verified: true, appliedTo: [] },
  { id: 'u-ninfa', name: 'Ninfa Monaldo', role: 'Web Architect', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ninfa', connections: 1200, email: 'ninfa.m@mak.ac.ug', college: 'COCIS', status: 'Finalist', subscriptionTier: 'Pro', joinedColleges: ['COCIS'], postsCount: 45, followersCount: 890, followingCount: 150, totalLikesCount: 3400, badges: ['Verified'], verified: true, appliedTo: [], bio: 'Building the next generation of academic strata.' },
  { id: 'mak_library', name: 'Main Library Node', role: 'Information Hub', avatar: 'https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg', connections: 45000, email: 'library@mak.ac.ug', college: 'Global', status: 'Graduate', subscriptionTier: 'Enterprise', joinedColleges: ['Global'], postsCount: 560, followersCount: 45000, followingCount: 0, totalLikesCount: 89000, badges: ['Official'], verified: true, appliedTo: [] },
  { id: 'mak_unipod', name: 'Mak UniPod', role: 'Innovation Forge', avatar: 'https://unipod.mak.ac.ug/wp-content/uploads/2024/12/Unipod-Logo-SVG.svg', connections: 8000, email: 'unipod@mak.ac.ug', college: 'CEDAT', status: 'Graduate', subscriptionTier: 'Pro', joinedColleges: ['CEDAT'], postsCount: 89, followersCount: 7800, followingCount: 12, totalLikesCount: 12000, badges: ['Verified'], verified: true, appliedTo: [] },
  { id: 'guild_office', name: 'Guild Presidential Office', role: 'Student Leadership', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4InWGvYRKGuV-Qi3v4SansxAxWjDUWfdqig&s', connections: 25000, email: 'guild.president@mak.ac.ug', college: 'Global', status: 'Graduate', subscriptionTier: 'Pro', joinedColleges: ['Global'], postsCount: 230, followersCount: 28000, followingCount: 450, totalLikesCount: 92000, badges: ['Verified'], verified: true, appliedTo: [] },
  { id: 'mtn_partner', name: 'MTN Uganda', role: 'Corporate Node', avatar: 'https://yt3.googleusercontent.com/gHH044hTirIU5EXvmfOn6yXwJKM2pQaU2nt9OWrsnQq_fj4YWeQpuofWvyF-S_edIRZjSty4ZA=s900-c-k-c0x00ffffff-no-rj', connections: 50000, email: 'partners@mtn.co.ug', college: 'Global', status: 'Graduate', subscriptionTier: 'Enterprise', joinedColleges: ['Global'], postsCount: 12, followersCount: 50000, followingCount: 0, totalLikesCount: 450000, badges: ['Partner'], verified: true, appliedTo: [] },
  { id: 'u-julianne', name: 'Dr. Julianne O.', role: 'Senior Lecturer', avatar: 'https://media.licdn.com/dms/image/v2/C5603AQEbfx2r6KmEBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1528009115211?e=2147483647&v=beta&t=P79glpXCLtisJ5uT6QkGpTtdDBZ1IHYCouww850tWFE', connections: 800, email: 'julianne.o@mak.ac.ug', college: 'COCIS', status: 'Graduate', subscriptionTier: 'Pro', joinedColleges: ['COCIS'], postsCount: 64, followersCount: 1200, followingCount: 80, totalLikesCount: 5600, badges: ['Verified', 'Faculty'], verified: true, appliedTo: [] },
  { id: 'airtel_partner', name: 'Airtel Uganda', role: 'Corporate Partner', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGb5X14Mj1kTtRIuEZWnqS7dh4vfKGYMgGw&s', connections: 48000, email: 'customercare@ug.airtel.com', college: 'Global', status: 'Graduate', subscriptionTier: 'Enterprise', joinedColleges: ['Global'], postsCount: 8, followersCount: 48000, followingCount: 0, totalLikesCount: 320000, badges: ['Partner'], verified: true, appliedTo: [] },
  { id: 'mak_security', name: 'Security Registry', role: 'Official Channel', avatar: 'https://img.freepik.com/premium-vector/security-badge-emblem_854353-779.jpg?semt=ais_user_personalization&w=740&q=80', connections: 45000, email: 'security@mak.ac.ug', college: 'Global', status: 'Graduate', subscriptionTier: 'Enterprise', joinedColleges: ['Global'], postsCount: 320, followersCount: 45000, followingCount: 0, totalLikesCount: 12000, badges: ['Official'], verified: true, appliedTo: [] },
  { id: 'u-peter', name: 'Counsel Peter', role: 'Legal Advisor', avatar: 'https://img.freepik.com/premium-photo/portrait-handsome-african-american-man-closeup-business-man-model_423170-2131.jpg', connections: 1200, email: 'peter.counsel@mak.ac.ug', college: 'LAW', status: 'Graduate', subscriptionTier: 'Pro', joinedColleges: ['LAW'], postsCount: 145, followersCount: 2300, followingCount: 120, totalLikesCount: 8900, badges: ['Verified'], verified: true, appliedTo: [] }
];

const parseArray = <T>(key: string, fallback: T[]): T[] => {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return fallback;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (e) { return fallback; }
};

// Helper function to check if API is available
async function isAPIAvailable(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/health`, { signal: AbortSignal.timeout(2000) });
    return response.ok;
  } catch {
    return false;
  }
}

// Utility: Convert File to base64 for transmission
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export const db = {
  // ============ POSTS ============
  getPosts: async (college?: string): Promise<Post[]> => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const query = college && college !== 'all' ? `?college=${college}` : '';
        const response = await fetch(`${API_URL}/posts${query}`);
        if (response.ok) {
          const posts = await response.json();
          localStorage.setItem(DB_KEYS.POSTS, JSON.stringify(posts));
          return posts;
        }
      }
    } catch (e) {
      console.log('API unavailable, using cached posts');
    }
    return parseArray<Post>(DB_KEYS.POSTS, MOCK_POSTS);
  },

  savePosts: (posts: Post[]) => localStorage.setItem(DB_KEYS.POSTS, JSON.stringify(posts)),

  addPost: async (post: Post, imageFile?: File): Promise<Post> => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const formData = new FormData();
        formData.append('id', post.id);
        formData.append('userId', post.userId);
        formData.append('content', post.content);
        formData.append('college', post.college || 'Global');
        formData.append('isOpportunity', post.isOpportunity ? 'true' : 'false');
        if (imageFile) {
          formData.append('image', imageFile);
        }

        const response = await fetch(`${API_URL}/posts`, {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          const savedPost = await response.json();
          const posts = await db.getPosts(post.college);
          return savedPost;
        }
      }
    } catch (e) {
      console.error('Error adding post to API:', e);
    }

    // Fallback to localStorage
    const posts = parseArray<Post>(DB_KEYS.POSTS, MOCK_POSTS);
    const updated = [post, ...posts];
    db.savePosts(updated);
    return post;
  },

  likePost: async (postId: string) => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const response = await fetch(`${API_URL}/posts/${postId}/like`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ postId })
        });
        if (response.ok) {
          return;
        }
      }
    } catch (e) {
      console.error('Error liking post:', e);
    }

    // Fallback
    db.savePosts(db._getPosts().map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
  },

  addComment: async (postId: string, comment: any) => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const response = await fetch(`${API_URL}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: `comment-${Date.now()}`,
            postId,
            userId: comment.userId,
            content: comment.content
          })
        });
        if (response.ok) {
          return;
        }
      }
    } catch (e) {
      console.error('Error adding comment:', e);
    }

    // Fallback
    db.savePosts(db._getPosts().map(p => p.id === postId ? { ...p, comments: [...(p.comments || []), comment], commentsCount: (p.commentsCount || 0) + 1 } : p));
  },

  deletePost: async (id: string) => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const response = await fetch(`${API_URL}/posts/${id}`, { method: 'DELETE' });
        if (response.ok) {
          return;
        }
      }
    } catch (e) {
      console.error('Error deleting post:', e);
    }

    // Fallback
    db.savePosts(db._getPosts().filter(p => p.id !== id));
  },

  toggleBookmark: (postId: string) => {
    const bookmarks = parseArray<string>(DB_KEYS.BOOKMARKS, []);
    const idx = bookmarks.indexOf(postId);
    if (idx === -1) bookmarks.push(postId); else bookmarks.splice(idx, 1);
    localStorage.setItem(DB_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    return bookmarks;
  },

  getBookmarks: (): string[] => parseArray<string>(DB_KEYS.BOOKMARKS, []),

  getOpportunities: async (): Promise<Post[]> => {
    const posts = await db.getPosts();
    return posts.filter(p => p.isOpportunity);
  },

  // ============ USERS ============
  getUsers: async (): Promise<User[]> => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const response = await fetch(`${API_URL}/users`);
        if (response.ok) {
          const users = await response.json();
          localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users));
          return users;
        }
      }
    } catch (e) {
      console.log('API unavailable, using cached users');
    }
    return parseArray<User>(DB_KEYS.USERS, INITIAL_USERS);
  },

  saveUsers: (users: User[]) => localStorage.setItem(DB_KEYS.USERS, JSON.stringify(users)),

  getUser: async (id?: string): Promise<User> => {
    try {
      const apiAvailable = await isAPIAvailable();
      const currentId = id || localStorage.getItem(DB_KEYS.LOGGED_IN_ID);
      
      if (apiAvailable && currentId) {
        const response = await fetch(`${API_URL}/users/${currentId}`);
        if (response.ok) {
          return await response.json();
        }
      }
    } catch (e) {
      console.log('API unavailable, using cached user');
    }

    const users = parseArray<User>(DB_KEYS.USERS, INITIAL_USERS);
    const currentId = id || localStorage.getItem(DB_KEYS.LOGGED_IN_ID);
    return users.find(u => u.id === currentId) || users[1]; // default to Ninfa
  },

  saveUser: async (user: User) => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const response = await fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
        });
        if (response.ok) {
          return;
        }
      }
    } catch (e) {
      console.error('Error saving user:', e);
    }

    // Fallback
    const users = parseArray<User>(DB_KEYS.USERS, INITIAL_USERS);
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) users[index] = user; else users.push(user);
    db.saveUsers(users);
  },

  // ============ COMMENTS ============
  getComments: async (postId: string): Promise<any[]> => {
    try {
      const apiAvailable = await isAPIAvailable();
      if (apiAvailable) {
        const response = await fetch(`${API_URL}/posts/${postId}/comments`);
        if (response.ok) {
          return await response.json();
        }
      }
    } catch (e) {
      console.log('Could not fetch comments from API');
    }

    // Fallback: get from cached posts
    const posts = parseArray<Post>(DB_KEYS.POSTS, MOCK_POSTS);
    const post = posts.find(p => p.id === postId);
    return post?.comments || [];
  },

  // ============ OTHER FEATURES (Fallback to localStorage) ============
  getResources: (): Resource[] => parseArray<Resource>(DB_KEYS.RESOURCES, []),
  saveResource: (resource: Resource) => localStorage.setItem(DB_KEYS.RESOURCES, JSON.stringify([resource, ...db.getResources()])),

  getCalendarEvents: (): CalendarEvent[] => parseArray<CalendarEvent>(DB_KEYS.CALENDAR, []),
  saveCalendarEvent: (event: CalendarEvent) => localStorage.setItem(DB_KEYS.CALENDAR, JSON.stringify([event, ...db.getCalendarEvents()])),
  registerForEvent: (eventId: string, userId: string) => {
    const events = db.getCalendarEvents();
    const updated = events.map(ev => ev.id === eventId ? { ...ev, attendeeIds: Array.from(new Set([...(ev.attendeeIds || []), userId])) } : ev);
    localStorage.setItem(DB_KEYS.CALENDAR, JSON.stringify(updated));
  },

  getEmails: (): PlatformEmail[] => parseArray<PlatformEmail>(DB_KEYS.EMAILS, []),
  saveEmails: (emails: PlatformEmail[]) => localStorage.setItem(DB_KEYS.EMAILS, JSON.stringify(emails)),

  getChats: (): ChatConversation[] => parseArray<ChatConversation>(DB_KEYS.CHATS, MOCK_CHATS),
  saveChats: (chats: ChatConversation[]) => localStorage.setItem(DB_KEYS.CHATS, JSON.stringify(chats)),

  getNotifications: (): MakNotification[] => parseArray<MakNotification>(DB_KEYS.NOTIFICATIONS, []),
  saveNotifications: (notifications: MakNotification[]) => localStorage.setItem(DB_KEYS.NOTIFICATIONS, JSON.stringify(notifications)),

  getEvents: (): LiveEvent[] => parseArray<LiveEvent>(DB_KEYS.EVENTS, []),

  getGroups: (): Group[] => parseArray<Group>(DB_KEYS.GROUPS, []),
  saveGroups: (groups: Group[]) => localStorage.setItem(DB_KEYS.GROUPS, JSON.stringify(groups)),
  addGroup: (group: Group) => db.saveGroups([...db.getGroups(), group]),
  addGroupMessage: (groupId: string, msg: GroupMessage) => {
    const groups = db.getGroups();
    const updated = groups.map(g => g.id === groupId ? { ...g, messages: [...g.messages, msg] } : g);
    db.saveGroups(updated);
  },
  joinGroup: (groupId: string, userId: string) => {
    const groups = db.getGroups();
    const updated = groups.map(g => g.id === groupId ? { ...g, memberIds: Array.from(new Set([...(g.memberIds || []), userId])) } : g);
    db.saveGroups(updated);
  },

  getLostFound: (): LostFoundItem[] => parseArray<LostFoundItem>(DB_KEYS.LOST_FOUND, [
    { 
      id: 'lf-notebook',
      type: 'Found', 
      title: 'Campus Notebook',
      description: 'Found a plain notebook in the Main Hall after afternoon classes. Message me with a detail that identifies it to claim it.',
      location: 'Main Hall',
      images: [],
      authorId: 'mak_security', 
      authorName: 'Security Registry', 
      authorAvatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=Security', 
      timestamp: '1h ago', 
      status: 'Open', 
      college: 'CEDAT' 
    },
    { 
      id: 'lf-calc', 
      type: 'Found', 
      title: 'Casio Scientific Calculator', 
      description: 'Found this Casio calculator in the Main Hall after the mathematics exam today. It has a small sticker on the back. Message me if it is yours.', 
      location: 'Main Hall', 
      images: ['https://cdn-prd-02.pnp.co.za/sys-master/images/h3a/h07/11256664195102/silo-product-image-v2-31Aug2023-180341-4549526607226-Straight_on-172585-1169_400Wx400H'], 
      authorId: 'u-ninfa', 
      authorName: 'Ninfa Monaldo', 
      authorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ninfa', 
      timestamp: '3h ago', 
      status: 'Open', 
      college: 'Global' 
    }
  ]),
  saveLostFound: (items: LostFoundItem[]) => localStorage.setItem(DB_KEYS.LOST_FOUND, JSON.stringify(items)),
  addLostFound: (item: LostFoundItem) => db.saveLostFound([item, ...db.getLostFound()]),
  resolveLostFound: (id: string) => db.saveLostFound(db.getLostFound().map(i => i.id === id ? { ...i, status: 'Resolved' } : i)),
  deleteLostFound: (id: string) => db.saveLostFound(db.getLostFound().filter(i => i.id !== id)),

  // Internal helper (not exported)
  _getPosts: (): Post[] => parseArray<Post>(DB_KEYS.POSTS, MOCK_POSTS),
};

export const COURSES_BY_COLLEGE: Record<College, string[]> = {
  COCIS: ['CS', 'SE', 'IT', 'IS'],
  CEDAT: ['Architecture', 'CE', 'ME', 'EE'],
  CHUSS: ['Psychology', 'Literature', 'Social Work'],
  CONAS: ['Biology', 'Chemistry', 'Physics'],
  CHS: ['Medicine', 'Nursing'],
  CAES: ['Agriculture', 'Environ'],
  COBAMS: ['Economics', 'Stats'],
  CEES: ['Education'],
  LAW: ['Bachelor of Laws']
};
