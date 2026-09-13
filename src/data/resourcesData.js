import { BookOpen, Compass, ShieldCheck, Terminal, Layers, Globe, KeyRound, Flag } from 'lucide-react';

export const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Cybersecurity Beginner',
    desc: 'Core principles of CIA triad, security mindset, ethical responsibilities, and legal framework.',
    tags: ['CIA Triad', 'Ethics', 'Threat Landscape']
  },
  {
    step: '02',
    title: 'Networking Fundamentals',
    desc: 'Understanding packet routing, IP addressing, DNS, TCP three-way handshakes, and ports.',
    tags: ['OSI Model', 'TCP/IP', 'Wireshark', 'Subnetting']
  },
  {
    step: '03',
    title: 'Linux CLI & Permissions',
    desc: 'Bash scripting, file permissions (chmod/chown), processes, log inspection, and SSH keys.',
    tags: ['Bash', 'File Trees', 'cron', 'Systemctl']
  },
  {
    step: '04',
    title: 'Web Fundamentals',
    desc: 'HTTP request/response cycles, cookies, sessions, headers, HTML/JS DOM, and REST APIs.',
    tags: ['HTTP/S', 'Cookies', 'CORS', 'DOM API']
  },
  {
    step: '05',
    title: 'Security Fundamentals',
    desc: 'Common vulnerabilities (OWASP Top 10), basic symmetric ciphers, and defensive hygiene.',
    tags: ['OWASP Top 10', 'Hashing', 'Firewalls']
  },
  {
    step: '06',
    title: 'Choose a Domain',
    desc: 'Specialize in Web App Sec, Network Sec, Offensive Pentesting, Defensive SIEM, AI Sec, or Cloud.',
    tags: ['Specialization', 'Tools Deep Dive']
  },
  {
    step: '07',
    title: 'Practical CTFs & Projects',
    desc: 'Compete in live collegiate CTF competitions, contribute to open-source defense tools, and publish writeups.',
    tags: ['CTFs', 'Hackathons', 'Bug Bounty', 'Projects']
  }
];

export const RESOURCE_CATEGORIES = [
  {
    id: 'beginner',
    title: 'Beginner Foundations',
    levelBadge: 'Tier 1: Foundations',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
    description: 'Essential computer science prerequisites before attacking or defending complex systems.',
    items: [
      {
        title: 'Computer Networking Basics',
        desc: 'Understand TCP/IP, UDP, DNS queries, routing, and how information travels across the internet.',
        topics: ['TCP 3-Way Handshake', 'OSI 7 Layers', 'DNS & DHCP', 'Subnetting & CIDR'],
        linkText: 'Curated Networking Guide'
      },
      {
        title: 'Linux Fundamentals & CLI Mastery',
        desc: 'Navigating Linux directories, file permissions, shell scripts, and system administration essentials.',
        topics: ['OverTheWire: Bandit', 'Bash Scripting', 'Sudo & Permissions', 'Process Monitoring'],
        linkText: 'Bandit Wargames'
      },
      {
        title: 'Web Architecture Fundamentals',
        desc: 'How web browsers talk to servers, cookies vs JWTs, CORS, SQL vs NoSQL, and client-side execution.',
        topics: ['HTTP Headers & Methods', 'Session Storage', 'DevTools Mastery', 'REST Endpoints'],
        linkText: 'Mozilla Web Docs Sec'
      },
      {
        title: 'Cybersecurity 101 & Cyber Hygiene',
        desc: 'The CIA Triad (Confidentiality, Integrity, Availability), authentication vs authorization, password hashing.',
        topics: ['CIA Triad', 'Multi-Factor Auth', 'Phishing Identification', 'Ethical Boundaries'],
        linkText: 'SHIELD Intro Handbook'
      }
    ]
  },
  {
    id: 'intermediate',
    title: 'Intermediate Specializations',
    levelBadge: 'Tier 2: Deep Dives',
    badgeColor: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    description: 'Vulnerability discovery methodologies, tool configuration, and specialized technical analysis.',
    items: [
      {
        title: 'Web Application Security & OWASP',
        desc: 'Hands-on exploitation and remediation of common web vulnerabilities using Burp Suite proxy.',
        topics: ['Burp Suite Community', 'SQL Injection Testing', 'Stored & Reflected XSS', 'CSRF Tokens'],
        linkText: 'PortSwigger Web Academy'
      },
      {
        title: 'Network Traffic & Protocol Analysis',
        desc: 'Packet sniffing, protocol decoding, spotting anomalies, and diagnosing man-in-the-middle vectors.',
        topics: ['Wireshark Filters', 'Nmap Scripting Engine (NSE)', 'ARP Spoofing', 'SSL Decryption'],
        linkText: 'Wireshark Sample PCAPs'
      },
      {
        title: 'Applied Cryptography & Ciphers',
        desc: 'Mathematical principles behind modern asymmetric cryptography, key exchange, and cipher attacks.',
        topics: ['RSA & Factorization', 'Diffie-Hellman Key Exchange', 'AES Block Modes', 'Cryptohack'],
        linkText: 'CryptoHack Challenges'
      },
      {
        title: 'Ethical Hacking & Pentesting Flow',
        desc: 'Systematic reconnaissance, vulnerability enumeration, controlled exploitation, and reporting.',
        topics: ['OSINT Tools', 'Metasploit Basics', 'Privilege Escalation', 'Remediation Writing'],
        linkText: 'Pentesting Playbook'
      }
    ]
  },
  {
    id: 'practice',
    title: 'Practice & Cyber Ranges',
    levelBadge: 'Tier 3: Battlegrounds',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    description: 'Gamified and realistic virtual cyber ranges to test your skills ethically and legally.',
    items: [
      {
        title: 'PortSwigger Web Security Academy',
        desc: 'The gold standard for interactive web vulnerability labs, curated by the makers of Burp Suite.',
        topics: ['100% Free Access', 'Realistic Labs', 'Step-by-Step Solutions', 'AppSec Cert Prep'],
        linkText: 'portswigger.net/web-security'
      },
      {
        title: 'PicoCTF by Carnegie Mellon',
        desc: 'Designed specifically for students and beginners looking to get hooked on competitive cybersecurity.',
        topics: ['Binary Exploitation', 'Forensics', 'Reverse Engineering', 'Cryptography'],
        linkText: 'picoctf.org'
      },
      {
        title: 'TryHackMe & Hack The Box',
        desc: 'Guided browser-accessible virtual machine rooms covering real-world vulnerabilities and enterprise networks.',
        topics: ['Pre-configured Kali Machines', 'Network Pivoting', 'Active Directory Labs', 'Defense Blue Rooms'],
        linkText: 'tryhackme.com'
      },
      {
        title: 'OverTheWire Wargames',
        desc: 'Terminal-based SSH challenges that teach Linux security, web exploits, and binary analysis level by level.',
        topics: ['Bandit (Linux)', 'Natas (Web Sec)', 'Krypton (Crypto)', 'Narnia (Binaries)'],
        linkText: 'overthewire.org'
      }
    ]
  }
];
