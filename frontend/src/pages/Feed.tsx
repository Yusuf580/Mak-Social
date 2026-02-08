import React, { useState } from 'react';
import {
  Home,
  Grid3x3,
  BookOpen,
  Calendar,
  MessageCircle,
  HelpCircle,
  Briefcase,
  LogOut,
  Globe,
  ChevronDown,
  Search,
  Bell,
  MoreHorizontal,
  Image,
  Video,
  CalendarPlus,
  Heart,
  Bookmark,
  ThumbsUp,
  Reply,
  TrendingUp,
  ArrowRight,
  Plus,
  Menu,
  Users,
} from 'lucide-react';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified?: boolean;
    badge?: string;
    title?: string;
  };
  timestamp: string;
  content: string;
  image?: string;
  hashtags?: string[];
  stats: {
    likes: number;
    comments: number;
  };
  visibility: 'public' | 'private';
}

interface NewsItem {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  image: string;
  timestamp: string;
}

interface Ad {
  id: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  badgeColor: string;
  cta: string;
}

const Feed: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const posts: Post[] = [
    {
      id: '1',
      author: {
        name: 'Makerere University',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHCyxFuoGd8L7dwtFLnUFOuPZhfD0YQoBhpA1AlkwKdV-BRi4J2-6NpmNs3U1iu1GuwbA4yMhNvdXvCOyVlWgQHX6kaze7frb2YAZYWgZAmAkhx5V-QYc0T81XhB0oyw9NPeIto6PaW4jzxwiQr1GckPIYbVY4yooE_xvuLB2DyUKDkKovmD0scUP-w66-zK_Cpd6k9_64E60dVA-jVcf6BsCU6WM0-ZlSrY-ErBhVkiE4hM9UoGT87fj-V363Q_OhbxXPsLUwxc9K',
        verified: true,
        badge: 'Official',
      },
      timestamp: '2 hours ago',
      content: 'We stand tall on the shoulders of giants. A century of excellence, innovation, and leadership. Join us as we celebrate the legacy of The Hill and look forward to the next 100 years of transforming society.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm87FtRvHZL0iI30MCdaJrYyqqTbFEK3ESRzJVkmH-ld0G6-9LbUKes1Uepz3sQ811ZusU-7y4B2YTVslC6yrK9R8J5M5h1vthN_NajGVTitrAzKPu-nXTvSsQcY5bj0uLZxaUK7E1b5ffmJ7w5kQawRP92yJkol9MmpPz9IhKrNawcRlKBBNidu78savz8beXE1A8zHkXQnn8NayoMq5oBGvTpQDWIc8S1kzRmnnwJ2zkL6FPNg3aBUYwRPR7sJl3AhRno2auIK2Y',
      hashtags: ['#Homecoming', '#MakerereAlumni', '#Heritage'],
      stats: {
        likes: 420,
        comments: 35,
      },
      visibility: 'public',
    },
    {
      id: '2',
      author: {
        name: 'Prof. Barnabas Nawangwe',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV81mfIcAceccDWjH83NhWINpFlUIsVPWbLDE3GsQmpG7gel2wnZDVBWOZ9lMLpr0VVN9OCYL-9F55Cpu_JT7K0Wf7o1MUakAX9TwIgAtBJeJgAdLBe1WAwVMD93DAsgaIorTYCkddkelFEIw5WKcuKW3Zm1N3dJ38UNRfb17HPbv9VK9JhdWLXIZblKqOsuVazEuGIYyJlZG_1ht-nS6QbM7Eev94gUj0HGn8jxUIOWc_66IXFNZvtBsW3RIzeysmHqS19l_72bFd',
        verified: true,
        title: 'Vice Chancellor',
      },
      timestamp: '15m ago',
      content: 'Welcome back students! As we begin the new semester, I urge you all to focus on innovation and research. The university administration is committed to supporting your academic journey. Let\'s make this semester count! 📚✨',
      stats: {
        likes: 0,
        comments: 0,
      },
      visibility: 'public',
    },
  ];

  const newsItems: NewsItem[] = [
    {
      id: '1',
      category: 'Academic',
      categoryColor: 'text-emerald-600',
      title: '74th Graduation Ceremony Dates Confirmed',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfwLA9BKEI1h0JRM5Uk8WlmgrCOdfu-7VSxz5k-YGTdPN0ZDmQ5IhUd2fyWIu86FBthGmSZxFBld0nAI0AhYdimeE3fRtor5K232dR25RdnEm_4qStyahyu2y46gunSe4vFktkuosG3rkjMxhAesK_dtEe_RIDmwGpMO9eskmHV3wODIKPiQYvSYIH8GewMESmQIuw23ppUxon8YdB7Q5pEPno1cSpaQ6o-tyUoiDwc5MbbTWZcvsnDrWWs_1JzHsDeL-_WJKg0CnZ',
      timestamp: '1h ago',
    },
    {
      id: '2',
      category: 'Research',
      categoryColor: 'text-blue-500',
      title: 'CEDAT Students Unveil New Solar EV Prototype',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVGmopzyPS1WdU569w0zySIS8JYGSUt2g_zJWSdhCPs-uFkuvIeGR9BRKVPF_GzRrplmevTeu4uphXTNwcZcyAJ_bKfWWhBwVlYNWWGc_d8r6P3A2alaYj1RlxCd7bqAMpDihup2FJ-61WhqYO1Lxma19Ll5UVUZQFsNFC2cBT-Nqcw4x-2emBZWKJBDxMtqYHmBxNNIHO7GVDzenWlyg2kBIr1u4eskToHJhRJrouYq_ZFGl40i1xn_gg1npZR_U2zzbxQZwFOVHW',
      timestamp: '3h ago',
    },
    {
      id: '3',
      category: 'Politics',
      categoryColor: 'text-red-500',
      title: 'Guild Elections: Debate Night Highlights',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIK1AKIljTE6optN2DITydozv8-KhlhOxFz52gKj54NCVjeNP6bz_dKibiYevl1QGKwTfFaUv_DXteVp0_B_oVTIfb64ogQ1ecPMvhW5PiljwpijRYz0HhcT8rp8JDC85s-HzxF5p5n_23iuoWycvR0Zb8jMEr55OfiufSRXY5HvEEcIQUc9DdGv52pysoDZbNu_tqzVz5_f4MW_iZ7F-zwzOzXvZclNS7tzpHwbc0XY_3D9tmQa-4szMoSG3pAvA5LXYezP1rsNP6',
      timestamp: '5h ago',
    },
    {
      id: '4',
      category: 'Sports',
      categoryColor: 'text-orange-500',
      title: 'Inter-Hall Games: Mitchell Hall Takes Lead',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIt16wMtTB4Uh6KwViV6WWvW53mO96aE9Y1tD3NUREIEyMejqWeYqrJX36b5gAMI4mEJU4X_t1OvydwLcu9XyWNJRbiRyLP8a54pPe8gLbMAqZgqWxn6OpLsFhS2hjvSlnnWTTw-kR45H-wFLvYYbgJMVULOMIHZdVQ8zffcLJ0TjHbfAHSxzlwwMgi4iIX90iKO0xrN-YzP21sVeHjufmxhPVZ9q5kLo-GqSNviQf9ufBAtWZLi73T74dI9rXFXZvtjhnxCb1Cn_V',
      timestamp: '1d ago',
    },
  ];

  const ads: Ad[] = [
    {
      id: '1',
      title: 'Pulse Data Bundles',
      description: 'Get 5GB for just 5k! Valid for 3 days. Dial *157#.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyH6ClYuHdrJVe2rlV5owPwGZaf_CDuSRFAgFoiHmEgpmyR2B3BdLGkpE0CWsZXqmsC_mm-Q9x8hPg-zY7MyGRq-JwDWPGE_79HnoGz6RR0DPwn2k3ORKIVD5wrlixAYHOzqx4TvR_YKoQl3CavFEIHy_oSLWO6GTTtNks4YdHjIorToSgDpMsWEH-X0SnMRU0ot_pglMu0hc5DwGR4OMb0rkGaDZqmgC09bkRsr4s4kg-M4293HLnBLGQY1Aekc5TrlyzCLGDhTWn',
      badge: 'MTN PULSE',
      badgeColor: 'bg-yellow-400 text-black',
      cta: 'Get Offer',
    },
    {
      id: '2',
      title: 'Mak Run 2026',
      description: 'Run for a cause. Support the new teaching hospital.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASX34O0ZstBF_DBVyrwlK7tYP_aMeIQKpfuKJTsaLE6_D8D9iv96ubB9g2FSnRdhpeN-QD76-qYFdlXYIk8LHe9b1_NuTGL4chxuxNOmZ6noiFfyaPz3c8hCQVow1ecFsTwdP65UCbIoJRzASdt2eEDMmuZAGnYvb37TcSs9S4-6_U0Sz_87B_GFqGCOIQmGRtbYrQVsNZrMEkokmfAX1s26pM_sqfeFor2oTqopdCZZQFFzxLcBxmxneRIdxeaKqp4flnZI0OP-1Q',
      badge: 'MARATHON',
      badgeColor: 'bg-emerald-600 text-white',
      cta: 'Register Now',
    },
    {
      id: '3',
      title: 'Student Laptop Deals',
      description: 'MacBooks & Dells at 20% off with student ID.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiaZf-YmffJSzIvEwOKJVuLbHl4EcNbFc1aM9tm9-JNE-o3bK78H-nhP1kvopdJfJhB-KuGgprJBDp-ZQJHbyKSNZToHraaK_sNlGJGWwKaSJLLtQUgcZx0kQ9SQZv5FuUyUVoMA5XybMs1US8vHP0pxbdzCWr1G7zXODoombae6SiUJS7O9MDzsDjcQTWeJRgpIxleIan3ZD4bpKyOXsnquUd0WHSa1p6qTFvgNoe9sYsJN9aCdug-0CnkC0lQ8MQKlS3T2W37_l_',
      badge: 'SALE',
      badgeColor: 'bg-blue-600 text-white',
      cta: 'View Store',
    },
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Sidebar */}
        <aside className="w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex flex-col justify-between overflow-y-auto shrink-0 z-20">
          <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-8 mb-2">
              <div className="flex items-center gap-3">
                <Users className="text-emerald-600 w-10 h-10" />
                <div className="flex flex-col">
                  <h1 className="font-bold text-2xl leading-none text-gray-900 dark:text-white tracking-tight">
                    MAK SOCIAL
                  </h1>
                  <span className="text-[10px] font-bold text-emerald-700 tracking-[0.2em] uppercase mt-1">
                    Connect & Learn
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="px-6 flex-1 flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 bg-emerald-600 text-white rounded-xl shadow-md shadow-emerald-600/20 transform transition-all hover:scale-[1.02]"
              >
                <Home className="w-5 h-5" />
                <span className="text-base font-semibold">HOME FEED</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:text-emerald-600 dark:hover:text-emerald-600 rounded-xl transition-all"
              >
                <Grid3x3 className="w-5 h-5" />
                <span className="text-base font-medium">PHOTOS</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:text-emerald-600 dark:hover:text-emerald-600 rounded-xl transition-all"
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-base font-medium">STUDY VAULT</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:text-emerald-600 dark:hover:text-emerald-600 rounded-xl transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-base font-medium">CALENDAR</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:text-emerald-600 dark:hover:text-emerald-600 rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-base font-medium">MESSAGES</span>
                <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  3
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:text-emerald-600 dark:hover:text-emerald-600 rounded-xl transition-all"
              >
                <HelpCircle className="w-5 h-5" />
                <span className="text-base font-medium">LOST & FOUND</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 px-4 py-4 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 hover:text-emerald-600 dark:hover:text-emerald-600 rounded-xl transition-all"
              >
                <Briefcase className="w-5 h-5" />
                <span className="text-base font-medium">OPPORTUNITIES</span>
              </a>
            </nav>

            {/* Logout */}
            <div className="p-6 mt-4">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 rounded-xl transition-colors font-semibold text-sm uppercase tracking-wide border border-transparent hover:border-red-200 dark:hover:border-red-800">
                <LogOut className="w-5 h-5" />
                LOGOUT
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative">
          {/* Header */}
          <header className="h-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-8 shrink-0 z-10 shadow-sm">
            <div className="flex items-center">
              <button className="flex items-center gap-2 px-5 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-xs font-bold uppercase tracking-wide border border-transparent hover:border-emerald-600 transition-colors hover:shadow-sm">
                <Globe className="w-4 h-4 text-emerald-600" />
                Global Hub
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-8">
              {/* Search */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search MakSocial..."
                  className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-emerald-600/50 transition-all"
                />
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              </div>

              {/* Icons */}
              <div className="flex items-center gap-4">
                <button className="relative text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <MessageCircle className="w-5 h-5" />
                  <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
                </button>
                <button className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Bell className="w-5 h-5" />
                </button>
              </div>

              {/* Profile */}
              <div className="h-11 w-11 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ring-2 ring-transparent hover:ring-emerald-600 transition-all cursor-pointer shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKKR1KveIQ0Q2C7i5knWsy5Jor1gHR-go7K2TUPRXbU2CpGXtvmciT5uz4fYQw9nVMrqsP2UATaKPrhJ_O5wMk1ZEOGUlobr0ww_DXAqImzr0rv9GYrNUL12BPH0_WnzyPv6thTIn7XefjGY_mmwitdidvPOeBByGS_smuujBcJZ3pgfYAhjkc3_fab5h5jjWVVqnzV1mFh1Q0Ll2ZE_1a5iobQSzF_eAYBfLZDE1kxsu_s3ZuLVF5B1pjX_SuIQc1xJWBvUZAQz3K"
                  alt="User profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          {/* Feed Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:px-10 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
              {/* Posts Column */}
              <div className="flex-1 space-y-6">
                {/* Create Post */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden shrink-0 border-2 border-white dark:border-gray-600 shadow-sm">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCqTHpN1fnRwEqVCALeyB1wRe36WC9AK8nSDJtLnLNiJOwKOYQZz3tMCQmrxNY3bJwhfQ4Ym4NhmcM3x64loXa5op_2ptpWkI0OaVCe_UTbg_ZtCRgouprD5DuoHhEeTeH-2dEjCeZj3-T0lsna7FinsZzUw7uPeQnkdyNTMwIY4nKJwA3JtUKJYw8QYso7sJAjeeUE3aoRrE5myNDKDEbO_351qhfC0zAgg2PDYCLHQUnO6Ukca7Gv-NLGcPHDtWMBuJEDoGGsEi"
                        alt="Current User"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="What's happening on the Hill today?"
                      className="flex-1 bg-gray-50 dark:bg-gray-700 border-none rounded-full px-6 py-3 text-sm focus:ring-2 focus:ring-emerald-600/50 dark:text-white placeholder-gray-500"
                    />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <div className="flex gap-4 text-gray-500">
                      <button className="flex items-center gap-2 hover:text-emerald-600 text-xs font-medium transition-colors">
                        <Image className="w-4 h-4 text-emerald-600" /> Photo
                      </button>
                      <button className="flex items-center gap-2 hover:text-emerald-600 text-xs font-medium transition-colors">
                        <Video className="w-4 h-4 text-blue-500" /> Video
                      </button>
                      <button className="flex items-center gap-2 hover:text-emerald-600 text-xs font-medium transition-colors">
                        <CalendarPlus className="w-4 h-4 text-orange-500" /> Event
                      </button>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md shadow-emerald-600/30 transition-all transform hover:scale-105">
                      Post
                    </button>
                  </div>
                </div>

                {/* Posts */}
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-md"
                  >
                    {/* Post Header */}
                    <div className="p-5 flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-white border border-gray-100 p-1 overflow-hidden shadow-sm">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-900 dark:text-white text-base">
                            {post.author.name}
                          </h3>
                          {post.author.verified && (
                            <CheckBadgeIcon className="w-5 h-5 text-blue-500" title="Verified" />
                          )}
                          {post.author.badge && (
                            <span className="bg-emerald-600/10 text-emerald-700 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wide border border-emerald-600/20">
                              {post.author.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {post.author.title || post.timestamp}
                        </p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Post Content */}
                    <div className="px-5 pb-4">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {post.content}
                      </p>
                    </div>

                    {/* Post Image */}
                    {post.image && (
                      <div className="w-full relative bg-gray-100 dark:bg-gray-700 aspect-video group cursor-pointer">
                        <img
                          src={post.image}
                          alt="Post content"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                      </div>
                    )}

                    {/* Hashtags */}
                    {post.hashtags && (
                      <div className="px-5 py-3 flex flex-wrap gap-2 bg-gray-50 dark:bg-gray-900/50">
                        {post.hashtags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-emerald-700 hover:text-emerald-600 cursor-pointer text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="px-5 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors group">
                          <Heart className="w-5 h-5 group-hover:fill-current" />
                          {post.stats.likes > 0 && (
                            <span className="text-xs font-semibold">{post.stats.likes}</span>
                          )}
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          {post.stats.comments > 0 && (
                            <span className="text-xs font-semibold">{post.stats.comments}</span>
                          )}
                        </button>
                        {post.image && (
                          <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                            <CalendarPlus className="w-5 h-5" />
                            <span className="text-xs font-semibold">Save Event</span>
                          </button>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500 text-[10px] uppercase font-bold tracking-wider bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        <Globe className="w-3 h-3" />
                        {post.visibility}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Text Post without Image */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden p-5 transition-shadow hover:shadow-md">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV81mfIcAceccDWjH83NhWINpFlUIsVPWbLDE3GsQmpG7gel2wnZDVBWOZ9lMLpr0VVN9OCYL-9F55Cpu_JT7K0Wf7o1MUakAX9TwIgAtBJeJgAdLBe1WAwVMD93DAsgaIorTYCkddkelFEIw5WKcuKW3Zm1N3dJ38UNRfb17HPbv9VK9JhdWLXIZblKqOsuVazEuGIYyJlZG_1ht-nS6QbM7Eev94gUj0HGn8jxUIOWc_66IXFNZvtBsW3RIzeysmHqS19l_72bFd"
                        alt="Prof Barnabas"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-900 dark:text-white text-base">
                            Prof. Barnabas Nawangwe
                          </h3>
                          <CheckBadgeIcon className="w-5 h-5 text-emerald-600" title="Verified" />
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <span className="text-xs">15m ago</span>
                          <button className="hover:text-emerald-600 transition-colors">
                            <Bookmark className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Vice Chancellor
                      </p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      Welcome back students! As we begin the new semester, I urge you all to focus
                      on innovation and research. The university administration is committed to
                      supporting your academic journey. Let's make this semester count! 📚✨
                    </p>
                    <div className="mt-3 flex gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors">
                        <ThumbsUp className="w-4 h-4" /> Like
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors">
                        <Reply className="w-4 h-4" /> Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <aside className="w-full lg:w-96 shrink-0 flex flex-col gap-6 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-6">
                {/* Campus Adverts */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col max-h-[45%]">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-700/30 rounded-t-2xl">
                    <h2 className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      Campus Adverts
                    </h2>
                    <span className="text-[10px] bg-emerald-600/10 text-emerald-600 px-2 py-0.5 rounded font-bold">
                      SPONSORED
                    </span>
                  </div>
                  <div className="overflow-y-auto p-4 space-y-4">
                    {ads.map((ad) => (
                      <div
                        key={ad.id}
                        className="relative group cursor-pointer overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                      >
                        <div
                          className={`absolute top-2 right-2 z-10 ${ad.badgeColor} text-[10px] font-bold px-2 py-1 rounded shadow-sm`}
                        >
                          {ad.badge}
                        </div>
                        <img
                          src={ad.image}
                          alt={ad.title}
                          className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="p-3 bg-white dark:bg-gray-700 relative z-20">
                          <h3 className="font-bold text-sm text-gray-900 dark:text-white">
                            {ad.title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">{ad.description}</p>
                          <button className="mt-2 text-[10px] font-bold text-emerald-600 uppercase hover:underline">
                            {ad.cta}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trending News */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col flex-1 min-h-0">
                  <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2 bg-gray-50/50 dark:bg-gray-700/30 rounded-t-2xl">
                    <TrendingUp className="w-4 h-4 text-red-500" />
                    <h2 className="text-xs font-bold text-gray-900 dark:text-gray-200 uppercase tracking-widest">
                      Trending News
                    </h2>
                  </div>
                  <div className="overflow-y-auto p-0">
                    <div className="divide-y divide-gray-100 dark:divide-gray-700">
                      {newsItems.map((news) => (
                        <div
                          key={news.id}
                          className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group"
                        >
                          <div className="flex gap-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                              <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={`text-[10px] font-bold ${news.categoryColor} uppercase`}
                                >
                                  {news.category}
                                </span>
                                <span className="text-[10px] text-gray-400">• {news.timestamp}</span>
                              </div>
                              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-emerald-600 transition-colors leading-snug">
                                {news.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/30 rounded-b-2xl border-t border-gray-200 dark:border-gray-700 mt-auto">
                    <a
                      href="#"
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center justify-center gap-1"
                    >
                      View All News <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="px-2">
                  <div className="flex flex-wrap gap-x-4 gap-y-2 justify-start">
                    <a
                      href="#"
                      className="text-[10px] font-bold text-gray-400 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-[10px] font-bold text-gray-400 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                    >
                      Help
                    </a>
                    <a
                      href="#"
                      className="text-[10px] font-bold text-gray-400 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                    >
                      Privacy
                    </a>
                    <a
                      href="#"
                      className="text-[10px] font-bold text-gray-400 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                    >
                      Terms
                    </a>
                  </div>
                  <p className="text-[10px] text-gray-300 dark:text-gray-600 tracking-widest uppercase mt-2">
                    © 2026 MakSocial Registry.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 px-6 py-3 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="#" className="flex flex-col items-center text-emerald-600 group">
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold mt-1">Feed</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-400 hover:text-emerald-600 transition-colors"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Search</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-400 hover:text-emerald-600 transition-colors relative"
        >
          <div className="bg-emerald-600 text-white h-12 w-12 rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-emerald-600/40 border-4 border-white dark:border-gray-900 transform active:scale-95 transition-transform">
            <Plus className="w-6 h-6" />
          </div>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-400 hover:text-emerald-600 transition-colors"
        >
          <Bell className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Alerts</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-400 hover:text-emerald-600 transition-colors"
        >
          <Menu className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-1">Menu</span>
        </a>
      </div>
    </div>
  );
};

export default Feed;