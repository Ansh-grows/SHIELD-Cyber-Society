import { 
  Globe, 
  Network, 
  Crosshair, 
  ShieldAlert, 
  Cloud, 
  KeyRound, 
  Search, 
  Bot 
} from 'lucide-react';

export const DOMAINS_DATA = [
  {
    id: 'web-security',
    title: 'Web Application Security',
    shortDesc: 'Identifying, exploiting, and mitigating vulnerabilities across modern web architectures, APIs, and client-server systems.',
    icon: Globe,
    badge: 'Core Track',
    topics: [
      'Cross-Site Scripting (XSS)',
      'SQL & NoSQL Injection',
      'Broken Authentication & Session Hijacking',
      'Cross-Site Request Forgery (CSRF)',
      'Insecure Direct Object References (IDOR)',
      'REST & GraphQL API Security'
    ],
    tools: ['Burp Suite', 'OWASP ZAP', 'Postman', 'SQLmap', 'FFUF'],
    practicalScope: 'Students perform vulnerability assessments on intentionally vulnerable testbeds (DVWA, Juice Shop, PortSwigger Academy) to learn both exploitation techniques and defensive code remediation.'
  },
  {
    id: 'network-security',
    title: 'Network Security',
    shortDesc: 'Analyzing packet flows, protocol anomalies, routing vulnerabilities, and configuring resilient perimeter defenses.',
    icon: Network,
    badge: 'Infrastructure',
    topics: [
      'TCP/IP & OSI Model Internals',
      'DNS Poisoning & Spoofing',
      'TLS/HTTPS Handshakes & Certificates',
      'Port Scanning & Banner Grabbing',
      'Next-Gen Firewalls & IDS/IPS',
      'Packet Sniffing & Traffic Analysis'
    ],
    tools: ['Wireshark', 'Nmap', 'Suricata', 'Zeek', 'tcpdump', 'Scapy'],
    practicalScope: 'Hands-on packet crafting, deep packet inspection, setting up isolated VLANs, and defending against ARP spoofing and DoS simulations in controlled virtual networks.'
  },
  {
    id: 'offensive-security',
    title: 'Offensive Security & Pentesting',
    shortDesc: 'Simulating adversary tradecraft to discover exploitable vectors before malicious threat actors can leverage them.',
    icon: Crosshair,
    badge: 'Red Team',
    disclaimer: 'All offensive security activities are performed only in authorized and controlled environments.',
    topics: [
      'Passive & Active Reconnaissance',
      'Automated & Manual Vulnerability Assessment',
      'Penetration Testing Methodologies',
      'Privilege Escalation (Linux & Windows)',
      'Exploitation Frameworks & Shellcraft',
      'Red Team Engagement Simulation'
    ],
    tools: ['Metasploit', 'Nessus', 'Cobalt Strike Concepts', 'LinPEAS', 'Responder'],
    practicalScope: 'Rigorous penetration testing exercises conducted exclusively in sandboxed ranges, CTF virtual machines, and authorized society hack-labs under ethical faculty oversight.'
  },
  {
    id: 'defensive-security',
    title: 'Defensive Security & Blue Teaming',
    shortDesc: 'Continuous threat detection, log telemetry correlation, incident response, and active system hardening.',
    icon: ShieldAlert,
    badge: 'Blue Team',
    topics: [
      'Threat Detection & TTP Analysis',
      'SIEM Concepts & Log Aggregation',
      'Incident Handling & Response Lifecycle',
      'Endpoint Detection & Response (EDR)',
      'Operating System Hardening & CIS Benchmarks',
      'Zero-Trust Architecture Principles'
    ],
    tools: ['Splunk', 'ELK / Wazuh', 'Velociraptor', 'Sysmon', 'Snort'],
    practicalScope: 'Analyzing attack logs, writing detection rules (Sigma/YARA), tracing intrusion artifacts, and securing test environments against mock adversarial playbooks.'
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security & DevSecOps',
    shortDesc: 'Securing cloud-native workloads, microservices, containerization, and identity permissions across AWS, Azure, and GCP.',
    icon: Cloud,
    badge: 'Cloud Native',
    topics: [
      'Cloud Shared Responsibility Model',
      'Identity & Access Management (IAM) Policies',
      'Least Privilege Enforcement',
      'Cloud Misconfiguration Auditing',
      'Docker & Kubernetes Container Hardening',
      'CI/CD Pipeline Security Integration'
    ],
    tools: ['ScoutSuite', 'Trivy', 'Prowler', 'Docker Security Benchmark', 'Checkov'],
    practicalScope: 'Building secure Infrastructure-as-Code (Terraform), auditing leaky S3 buckets, locking down IAM roles, and securing container images against supply chain vulnerabilities.'
  },
  {
    id: 'cryptography',
    title: 'Cryptography & Applied Protocols',
    shortDesc: 'The mathematical foundation of confidential computing, cryptographic primitives, hashing, and digital verification.',
    icon: KeyRound,
    badge: 'Foundations',
    topics: [
      'Symmetric (AES, ChaCha20) Encryption',
      'Asymmetric (RSA, ECC, Diffie-Hellman) Systems',
      'Cryptographic Hashing (SHA-2, SHA-3, BLAKE)',
      'Digital Signatures & PKI Infrastructures',
      'Cryptanalysis & Common Flaws (Padding Oracle)',
      'Post-Quantum Cryptography Basics'
    ],
    tools: ['CyberChef', 'OpenSSL', 'Cryptool', 'SageMath', 'Python PyCryptodome'],
    practicalScope: 'Implementing and attacking cryptographic ciphers in CTF challenges, dissecting handshake negotiation flaws, and understanding zero-knowledge proof concepts.'
  },
  {
    id: 'digital-forensics',
    title: 'Digital Forensics & Incident Investigation',
    shortDesc: 'Uncovering digital evidence, analyzing volatile memory dumps, and reconstructing cybersecurity breach timelines.',
    icon: Search,
    badge: 'Forensics',
    topics: [
      'Chain of Custody & Evidence Preservation',
      'Dead-Box & Live Memory Volatility Forensics',
      'Windows Registry & Artifact Analysis',
      'Filesystem Forensics (NTFS, ext4)',
      'Network Forensic Reconstruction',
      'Malware Triage & Reverse Engineering Basics'
    ],
    tools: ['Autopsy', 'Volatility 3', 'FTK Imager', 'Ghidra', 'Wireshark'],
    practicalScope: 'Extracting passwords from infected RAM captures, analyzing PCAP captures of exfiltrated data, and reconstructing adversary timelines for simulated post-mortem incident reports.'
  },
  {
    id: 'ai-security',
    title: 'AI Security & Machine Learning Defense',
    shortDesc: 'Safeguarding Large Language Models and AI systems against adversarial prompts, model poisoning, and data leakage.',
    icon: Bot,
    badge: 'Next Gen',
    topics: [
      'Prompt Injection & Jailbreak Prevention',
      'Adversarial Perturbation Attacks',
      'Training Data Poisoning & Extraction',
      'Model Inversion & Member Inference',
      'Privacy-Preserving Machine Learning',
      'Securing Autonomous AI Agent Frameworks'
    ],
    tools: ['Garak (LLM Vuln Scanner)', 'PyRIT', 'Adversarial Robustness Toolbox (ART)', 'LangKit'],
    practicalScope: 'Evaluating LLM safety boundaries, auditing prompt firewalls, hardening retrieval-augmented generation (RAG) pipelines, and researching defenses for NIT Hamirpur AI projects.'
  }
];
