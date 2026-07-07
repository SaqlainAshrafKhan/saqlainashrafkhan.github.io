import {
  Bot,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  FlaskConical,
  Layers3,
  Palette,
  Route,
  Sparkles,
  Workflow,
} from 'lucide-react';

export const profile = {
  name: 'Saqlain Ashraf Khan',
  title: 'AI-Assisted Full Stack Product Engineer',
  email: 'saqlainashrafkhan4@gmail.com',
  phone: '+91 8888001360',
  location: 'Malkapur, Maharashtra, India',
  github: 'https://github.com/saqlainashrafkhan',
  linkedin: 'https://www.linkedin.com/in/saqlain-ashraf-khan-36a439230',
  resume: '/Saqlain-Ashraf-Khan-Resume.pdf',
  meeting: '#contact',
};

export const credentials = [
  {
    title: 'Master of Computer Application',
    detail: 'North Maharashtra University, Jalgaon',
    year: '2024',
  },
  {
    title: 'Bachelor of Computer Application',
    detail: 'North Maharashtra University, Jalgaon',
    year: '2022',
  },
  {
    title: 'Certifications',
    detail: 'Microsoft Azure Fundamentals AZ-900, MERN Stack Developer',
    year: 'Verified',
  },
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const badges = [
  '3.5 Years Experience',
  'Full Stack',
  'Product Engineering',
  'AI Assisted Development',
  'Open to Remote',
];

export const products = [
  {
    slug: 'nexus',
    name: 'Nexus',
    tagline: 'Real Estate & Finance ERP',
    description:
      'A centralized SaaS platform that helps real estate businesses manage properties, cash flow, investments, expenses, analytics, reporting, and operations through an intuitive dashboard.',
    role: ['Founder', 'Product Designer', 'Full Stack Developer'],
    tech: ['React', 'Node', 'Express', 'MongoDB', 'REST APIs'],
    accent: 'from-mint/30 via-white/10 to-coral/20',
    status: 'SaaS Platform',
    live: '',
    github: '',
    highlights: ['Financial analytics', 'Investment tracking', 'Operational reporting', 'Role-ready architecture'],
    sections: {
      problem:
        'Real estate teams often manage land, cash flow, shareholders, expenses, and documents across disconnected spreadsheets. Nexus brings the financial and operational picture into one structured product.',
      research:
        'The product direction came from studying everyday business workflows: acquisition costs, advances, shareholder settlements, development expenses, sales movement, and recurring reporting needs.',
      planning:
        'The system is planned around clear modules: projects, plots, investors, ledger entries, reports, dashboards, and user-friendly workflows for repeated office use.',
      architecture:
        'Nexus uses a React interface over REST APIs, with Node and Express handling business logic and MongoDB modeling project, finance, and stakeholder data.',
      database:
        'The database is shaped around projects, entries, users, settlements, and derived reports so the app can support both transaction entry and management-level views.',
      ui: 'The interface is dashboard-first, with dense but readable screens for finance, operations, and decision-making.',
      features:
        'Core features include project management, cash flow tracking, expense entry, shareholder visibility, analytics, and reporting workflows.',
      roadmap:
        'Future plans include document management, permissions, automated report exports, predictive analytics, and mobile-friendly field workflows.',
      lessons:
        'The biggest learning was turning messy business logic into clear product flows that non-technical users can understand quickly.',
    },
  },
  {
    slug: 'uloomy',
    name: 'ULOOMY',
    tagline: 'Gamified Learning Platform',
    description:
      'An interactive education platform built around engaging learning experiences through courses, achievements, progress tracking, gamification, and intuitive user journeys.',
    role: ['Product Builder', 'Full Stack Developer', 'UX Planner'],
    tech: ['React', 'Node', 'MongoDB', 'Gamification', 'REST APIs'],
    accent: 'from-signal/25 via-white/10 to-mint/20',
    status: 'Learning Product',
    live: '',
    github: '',
    coverImage: '/products/uloomy/landing.png',
    images: [
      {
        src: '/products/uloomy/landing.png',
        title: 'Public Landing Page',
        description: 'A focused academy landing page with premium Islamic learning positioning and clear conversion actions.',
      },
      {
        src: '/products/uloomy/dashboard.png',
        title: 'Learner Dashboard',
        description: 'Personalized dashboard with enrolled courses, resume learning, points, certificates, and gamified stats.',
      },
      {
        src: '/products/uloomy/courses.png',
        title: 'Course Discovery',
        description: 'Course catalog with filters, course cards, levels, language support, and learning availability states.',
      },
      {
        src: '/products/uloomy/profile.png',
        title: 'Gamified Profile',
        description: 'Profile experience with XP progress, levels, coins, owned avatars, and locked rewards.',
      },
    ],
    highlights: ['Course journeys', 'Progress tracking', 'Achievement systems', 'Engaging UX'],
    sections: {
      problem:
        'Learning platforms can feel passive and disconnected from student motivation. ULOOMY focuses on progress, feedback, and small wins.',
      research:
        'The planning centered on how learners move through lessons, see progress, unlock achievements, and stay engaged over time.',
      planning:
        'The platform is organized around courses, modules, activities, student progress, rewards, and feedback loops.',
      architecture:
        'A React frontend communicates with a Node API, using structured data models for users, course content, achievements, and progress.',
      database:
        'The data model supports learning paths, completed activities, earned badges, and resumable progress.',
      ui: 'The interface uses clear navigation, course cards, progress states, and lightweight gamification cues without overwhelming the learning content.',
      features:
        'Courses, achievements, progress tracking, activity states, and learner-centered dashboards form the core experience.',
      roadmap:
        'Future improvements include adaptive quizzes, instructor tools, richer analytics, and personalized learning recommendations.',
      lessons:
        'ULOOMY reinforced that gamification works best when it supports learning behavior instead of becoming the product itself.',
    },
  },
  {
    slug: 'maheque',
    name: 'Maheque',
    tagline: 'Premium Fragrance Brand',
    description:
      'A refined commerce-facing brand experience for a premium fragrance label, focused on luxury UI, responsive design, performance, and product storytelling.',
    role: ['Frontend Developer', 'Brand Experience Designer'],
    tech: ['React', 'Tailwind', 'Responsive UI', 'Performance'],
    accent: 'from-coral/25 via-white/10 to-signal/15',
    status: 'Brand Website',
    live: 'https://maheque.com',
    github: '',
    coverImage: '/products/maheque/hero.png',
    images: [
      {
        src: '/products/maheque/hero.png',
        title: 'Luxury Hero Experience',
        description: 'A premium first impression built around fragrance storytelling, dark elegance, and clear shopping intent.',
      },
      {
        src: '/products/maheque/hadees.png',
        title: 'Hadith & Fragrance Section',
        description: 'Editorial content that connects fragrance, cleanliness, adab, and brand trust through refined references.',
      },
      {
        src: '/products/maheque/categories.png',
        title: 'Collection Discovery',
        description: 'Category cards for perfumes, attars, and home fragrance with immersive product-led imagery.',
      },
    ],
    highlights: ['Premium branding', 'Luxury UI', 'Responsive design', 'Performance'],
    sections: {
      problem:
        'A premium fragrance brand needs to feel trustworthy, tactile, and refined within seconds while still loading quickly on mobile.',
      research:
        'The design direction focused on luxury product presentation, editorial spacing, high-quality sections, and low-friction browsing.',
      planning:
        'The site was planned around first impression, collection discovery, product storytelling, and conversion-friendly content blocks.',
      architecture:
        'The build uses a lean frontend architecture optimized for fast rendering, responsive layouts, and simple maintainability.',
      database:
        'For the current website, content can be served statically; a commerce backend can be added when inventory and checkout need to become dynamic.',
      ui: 'The UI emphasizes premium typography, restrained motion, elegant spacing, and a brand-first visual rhythm.',
      features:
        'Responsive product sections, strong brand presentation, performance-friendly pages, and live website access.',
      roadmap:
        'Potential next steps include product catalog management, checkout integration, customer reviews, and campaign landing pages.',
      lessons:
        'Maheque sharpened the balance between visual polish and performance, especially for mobile-first brand browsing.',
    },
  },
  {
    slug: 'student-management-platform',
    name: 'Student Management Platform',
    tagline: 'Academic Operations Software',
    description:
      'Commercial software built for educational institutions to simplify student lifecycle management, attendance, examinations, report cards, and administrative workflows. It also generates freelance income.',
    role: ['Freelance Product Developer', 'Full Stack Developer'],
    tech: ['React', 'Node', 'MongoDB', 'Reports', 'Admin Workflows'],
    accent: 'from-mint/20 via-white/10 to-signal/20',
    status: 'Commercial Software',
    live: 'https://student-management-system-rho-three.vercel.app/',
    github: '',
    coverImage: '/products/student-management/dashboard.png',
    images: [
      {
        src: '/products/student-management/dashboard.png',
        title: 'Operations Dashboard',
        description: 'Role-based home screen with fast access to admissions, records, configuration, and totals.',
      },
      {
        src: '/products/student-management/students.png',
        title: 'Student Records',
        description: 'Searchable student table with class filters, edit actions, marksheet access, and PDF export.',
      },
      {
        src: '/products/student-management/marksheet.png',
        title: 'Student Marksheet',
        description: 'Detailed student profile with term-wise subject marks, grades, and document actions.',
      },
      {
        src: '/products/student-management/configuration.png',
        title: 'School Configuration',
        description: 'Academic year, working days, class, section, and subject configuration workflows.',
      },
      {
        src: '/products/student-management/mobile.png',
        title: 'Mobile Experience',
        description: 'Responsive dashboard layout optimized for smaller screens and quick administration.',
      },
    ],
    highlights: ['Attendance', 'Examinations', 'Report cards', 'Freelance revenue'],
    sections: {
      problem:
        'Educational institutions need practical systems that reduce repetitive administration without forcing staff into complex software habits.',
      research:
        'The product was shaped around daily school workflows: student records, class attendance, exam marks, report cards, and administrative visibility.',
      planning:
        'The platform is organized into role-friendly modules so staff can complete repeated tasks quickly and reliably.',
      architecture:
        'The application uses a full stack structure with reusable frontend screens, API-driven workflows, and report generation logic.',
      database:
        'The data model supports students, classes, attendance entries, exams, marks, reports, and institution-level configuration.',
      ui: 'The UI favors clarity and speed: tables, filters, structured forms, and predictable task flows.',
      features:
        'Attendance tracking, exam management, report card generation, administrative dashboards, and institution-ready workflows.',
      roadmap:
        'Future plans include parent portals, fee management, notifications, and deeper analytics.',
      lessons:
        'This product showed how valuable software becomes when it solves a repeated operational pain clearly enough that clients are willing to pay for it.',
    },
  },
];

export const skillGroups = [
  { title: 'Backend', icon: Code2, items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs'] },
  { title: 'Frontend', icon: Palette, items: ['React', 'Tailwind', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Database', icon: Database, items: ['MongoDB', 'MySQL'] },
  { title: 'Testing', icon: FlaskConical, items: ['Selenium', 'API Testing', 'Automation'] },
  { title: 'Cloud', icon: Cloud, items: ['Azure', 'Docker', 'CI/CD', 'Git'] },
  { title: 'AI Development', icon: Bot, items: ['OpenAI Codex', 'ChatGPT', 'Claude', 'Prompt Engineering'] },
  { title: 'Product', icon: Boxes, items: ['System Design', 'Workflow Design', 'UI/UX', 'SaaS Architecture'] },
];

export const buildProcess = [
  ['Idea', 'Turn a vague opportunity into a clear product direction.'],
  ['Research', 'Understand users, constraints, workflows, and commercial context.'],
  ['Business Understanding', 'Map the product to real operational and revenue needs.'],
  ['Workflow Design', 'Design repeatable flows that reduce friction for everyday users.'],
  ['Architecture', 'Choose a structure that can grow without becoming fragile.'],
  ['Database Design', 'Model the data around decisions, reporting, and future features.'],
  ['UI Design', 'Create clean interfaces that make complex work feel understandable.'],
  ['Development', 'Build with reusable components, clear APIs, and practical tradeoffs.'],
  ['Testing', 'Validate the product through QA thinking, edge cases, and real workflows.'],
  ['Deployment', 'Ship fast, monitor behavior, and make the product accessible.'],
  ['Continuous Improvement', 'Improve based on usage, feedback, and better product judgment.'],
];

export const aiWorkflow = [
  ['Requirement Analysis', BrainCircuit],
  ['Architecture Planning', Layers3],
  ['Rapid Prototyping', Sparkles],
  ['Implementation', Code2],
  ['Debugging', CheckCircle2],
  ['Code Review', Route],
  ['Optimization', Workflow],
  ['Documentation', BriefcaseBusiness],
];

export const experience = {
  company: 'Accenture',
  icon: Building2,
  title: 'Software Engineer',
  period: 'October 2022 - April 2026',
  work: [
    'Backend Development',
    'Java',
    'Spring Boot',
    'REST APIs',
    'Automation Testing',
    'Jira Integration',
    'Enterprise Applications',
    'Production Support',
    'Agile',
  ],
};
