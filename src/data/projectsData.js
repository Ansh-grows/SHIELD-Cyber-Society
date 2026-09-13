export const PROJECTS_DATA = [
  {
    id: 'ai-security-monitor',
    title: 'PromptArmor: AI Security & Prompt Injection Firewall',
    shortDesc: 'A lightweight proxy middleware that inspects and intercepts malicious jailbreaks, system prompt leakages, and prompt injection vectors directed at LLM APIs.',
    domain: 'AI Security',
    status: 'Active Development',
    team: 'AI Defense Sub-team',
    technologies: ['Python', 'FastAPI', 'HuggingFace Transformers', 'LangChain', 'Docker'],
    githubUrl: 'https://github.com/shield-cyber-nith/promptarmor-firewall',
    fullDesc: 'As generative AI adoption skyrockets, LLM-powered enterprise apps are increasingly vulnerable to prompt injections and indirect jailbreaking. PromptArmor implements vector similarity clustering and semantic token anomaly detection to sanitize inputs before passing prompts to downstream models.',
    features: [
      'Zero-latency inline semantic heuristic inspection',
      'OWASP Top 10 for LLM threat classification',
      'Real-time webhook alerts to Slack and Discord channels'
    ]
  },
  {
    id: 'netshield-analyzer',
    title: 'NetShield: Real-Time Network Packet Analyzer',
    shortDesc: 'An intuitive PCAP parser and live packet flow telemetry monitor designed to spotlight port scans, ARP poisons, and unexpected outbound data exfiltration.',
    domain: 'Network Security',
    status: 'Completed',
    team: 'Network Infrastructure Team',
    technologies: ['Go', 'eBPF', 'React', 'Tailwind CSS', 'WebSockets', 'libpcap'],
    githubUrl: 'https://github.com/shield-cyber-nith/netshield-analyzer',
    fullDesc: 'NetShield couples a high-speed Go/eBPF daemon on the host layer with a modern React dashboard. It visualizes protocol distribution, flags beaconing behavior typical of command-and-control malware, and computes entropy on DNS queries to catch data exfiltration.',
    features: [
      'High-throughput packet capture with minimal CPU overhead',
      'Automated detection of Nmap TCP SYN scans and ARP anomalies',
      'Interactive packet dissection view with hex-viewer inspection'
    ]
  },
  {
    id: 'kavach-ctf-platform',
    title: 'Kavach: Sandboxed CTF & Cyber Range Platform',
    shortDesc: 'A lightweight container-orchestrated training ground where student members deploy, attack, and patch vulnerable machine environments on demand.',
    domain: 'Web & Offensive Security',
    status: 'Completed',
    team: 'Web & Red Team Leads',
    technologies: ['Node.js', 'React', 'Docker Engine API', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/shield-cyber-nith/kavach-ctf-engine',
    fullDesc: 'Kavach eliminates the difficulty of managing virtual machines for collegiate cyber clubs. Each student gets isolated ephemeral Docker containers on private subnets with auto-destruct timers, supporting Jeopardy and Attack-Defense challenge topologies.',
    features: [
      'Dynamic per-user flag generation to prevent copy-pasting',
      'Web-based in-browser terminal emulator for zero-install solving',
      'Real-time competitive team scoreboard with score decay dynamics'
    ]
  },
  {
    id: 'cloudguard-iam-auditor',
    title: 'CloudGuard: Multi-Cloud IAM Least-Privilege Auditor',
    shortDesc: 'An automated compliance scanner for AWS and GCP environments that identifies over-privileged IAM roles, public storage buckets, and dangling DNS records.',
    domain: 'Cloud Security',
    status: 'Active Development',
    team: 'Cloud & Infrastructure Domain',
    technologies: ['Python', 'AWS Boto3', 'Google Cloud SDK', 'Terraform', 'GitHub Actions'],
    githubUrl: 'https://github.com/shield-cyber-nith/cloudguard-auditor',
    fullDesc: 'Configuring cloud access controls without accumulating privilege drift is a primary challenge in modern infrastructure. CloudGuard parses IAM policy graphs, cross-references CloudTrail access logs, and proposes precise Terraform reduction snippets.',
    features: [
      'Cross-checks declared permissions against actual usage history',
      'Detects public S3/GCS buckets and insecure security group rules',
      'Generates automated pull requests with remediated IAM JSON policies'
    ]
  }
];
