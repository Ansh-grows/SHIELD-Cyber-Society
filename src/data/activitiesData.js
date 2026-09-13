import { Flag, Terminal, Trophy, Cpu, Users, Calendar, MapPin, Target, CheckCircle2 } from 'lucide-react';

export const ACTIVITIES_CATEGORIES = [
  {
    id: 'ctfs',
    title: 'Capture The Flag (CTFs)',
    subtitle: 'Competitive Security Problem Solving',
    icon: Flag,
    description: 'We participate in prestigious national & global collegiate CTFs (Defcon quals, picoCTF, Google CTF) and host our own internal training scrims to build rapid exploitation and defense skills.',
    badge: 'Flag Hunting',
    stats: '12+ Contests Competed'
  },
  {
    id: 'workshops',
    title: 'Hands-on Workshops',
    subtitle: 'Practical Skill Immersions',
    icon: Terminal,
    description: 'Regular interactive weekend bootcamps covering topics from Linux command line & Wireshark packet dissection to web exploitation with Burp Suite and reverse engineering binaries.',
    badge: 'Interactive',
    stats: '15+ Sessions Hosted'
  },
  {
    id: 'hackathons',
    title: 'Security Hackathons',
    subtitle: 'Defensive & Offensive Prototyping',
    icon: Trophy,
    description: 'Sprint-style innovation challenges where members build security defense tools, custom SIEM detectors, encryption utilities, or develop proof-of-concept patches.',
    badge: 'Innovation',
    stats: '4 Hackathons Organized'
  },
  {
    id: 'technical-sessions',
    title: 'Technical Deep Dives',
    subtitle: 'Peer-to-Peer Knowledge Sharing',
    icon: Cpu,
    description: 'Weekly tech-talks by senior members and invited industry practitioners breaking down recent CVEs, zero-day research, threat actor campaigns, and security interview prep.',
    badge: 'Weekly Track',
    stats: 'Weekly Cadence'
  },
  {
    id: 'competitions',
    title: 'Inter & Intra-College Battles',
    subtitle: 'Red vs Blue Live Engagements',
    icon: Users,
    description: 'Simulated network battlegrounds where defending teams (Blue) harden systems while attacking teams (Red) try to gain foothold and execute objective-based flags.',
    badge: 'Simulations',
    stats: 'Annual Flagship'
  }
];

export const UPCOMING_EVENTS = [
  {
    id: 'event-01',
    title: 'SHIELD Induction & Hands-On Cyber Bootcamp 2026',
    tagline: 'Introduction to Ethical Hacking, CTF Basics & Society Recruitment',
    status: 'Registration Open',
    highlight: true,
    infoGrid: [
      {
        icon: Target,
        label: 'ELIGIBILITY',
        value: 'All Branches & Batches of NIT Hamirpur',
        description: 'No prior cybersecurity experience required. A passion for problem solving and ethical technology is all you need.'
      },
      {
        icon: Calendar,
        label: 'DATE & TIME',
        value: 'Saturday & Sunday, 4:00 PM – 7:30 PM',
        description: 'Two-day intensive session covering networking, web exploitation labs, and recruitment orientation.'
      },
      {
        icon: MapPin,
        label: 'VENUE',
        value: 'Computer Centre Lab 3 / Auditorium & Virtual Stream',
        description: 'High-speed networking lab access provided. Students are encouraged to bring their personal laptops.'
      },
      {
        icon: CheckCircle2,
        label: 'PURPOSE',
        value: 'Skill Acceleration & Team Selection',
        description: 'Hands-on practical challenges designed to introduce members to the 8 core tracks of SHIELD.'
      }
    ],
    registrationLink: '/join',
    buttonText: 'Register Now / Apply'
  },
  {
    id: 'event-02',
    title: 'Winter Shield CTF: Intra-NIT Capture The Flag',
    tagline: '48-Hour Jeopardy-Style Cybersecurity Challenge',
    status: 'Upcoming',
    highlight: false,
    infoGrid: [
      {
        icon: Target,
        label: 'ELIGIBILITY',
        value: 'NIT Hamirpur Undergraduates & Postgraduates',
        description: 'Solo or teams of up to 3 members. Freshers bracket and Open bracket available.'
      },
      {
        icon: Calendar,
        label: 'DATE & TIME',
        value: 'Coming Soon — Check Announcement Channels',
        description: '48-hour continuous online contest with live dynamic scoreboard.'
      },
      {
        icon: MapPin,
        label: 'VENUE',
        value: 'Online CTFd Platform (ctf.shield-nith.org)',
        description: 'Accessible globally with NIT Hamirpur student credentials.'
      },
      {
        icon: CheckCircle2,
        label: 'PURPOSE',
        value: 'Benchmarking Skills & Prizes',
        description: 'Prizes, certificates, and direct fast-track interview consideration for core SHIELD domains.'
      }
    ],
    registrationLink: '/join',
    buttonText: 'Get Notified'
  }
];
