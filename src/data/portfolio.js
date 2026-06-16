export const person = {
  name: 'Aditi Avinash Nikam',
  title: 'Computer Science Graduate | Full Stack Developer | Building Scalable Web Applications',
  tagline:
    'Passionate about developing modern, user-friendly web applications and solving real-world problems through clean and efficient code.',
  location: 'India',
  email: 'aditinikam0123@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/aditinikam123', key: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aditi-nikam01234/',
      key: 'linkedin',
    },
    { label: 'Email', href: 'mailto:aditinikam0123@gmail.com', key: 'email' },
  ],
}

export const about = {
  headline: 'About Me',
  intro:
    'Computer Science graduate with hands-on experience in full-stack web development, AI integration, and cloud deployment. Skilled in building scalable applications using React.js, Node.js, PostgreSQL, and modern development tools. Passionate about creating impactful software solutions and continuously learning emerging technologies.',
  pills: [
    { icon: 'MapPin', text: 'Belagavi, Karnataka' },
    { icon: 'GraduationCap', text: 'B.E. Computer Science Graduate • CGPA 8.65' },
  ],
  groups: [
    {
      title: 'Programming Languages',
      icon: 'Code2',
      items: ['C++', 'Java', 'Python', 'SQL'],
    },
    {
      title: 'Web Technologies',
      icon: 'Globe',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    },
    {
      title: 'Backend & Databases',
      icon: 'Database',
      items: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    },
    {
      title: 'Tools & Practices',
      icon: 'TerminalSquare',
      items: ['Git', 'GitHub', 'REST APIs', 'Prisma ORM'],
    },
  ],
}

export const education = [
  {
    degree: 'Bachelor of Engineering',
    stream: 'Computer Science and Engineering',
    institute: 'KLE Dr. M. S. Sheshgiri College of Engineering and Technology, Belagavi, Karnataka',
    year: '2026',
    scoreLabel: 'CGPA',
    scoreValue: '8.65',
  },
  {
    degree: 'Diploma',
    stream: 'Computer Science Engineering',
    institute: 'Motichand Lengade Bharatesh Polytechnic, Belagavi, Karnataka',
    year: '2023',
    scoreLabel: 'CGPA',
    scoreValue: '9.15',
  },
  {
    degree: 'High School',
    stream: 'SSLC',
    institute: 'Sant Meera English Medium School, Belagavi, Karnataka',
    year: '2020',
    scoreLabel: 'Percentage',
    scoreValue: '73.6%',
  },
]

export const projects = [
  {
    title: 'Pravidya- Admission & Counselling Management Platform (Internship Project)',
    description:
      'Pravidya is an Admission & Counselling Management Platform developed to simplify and manage the student admission and counselling process through a user-friendly web application.',
    tech: ['Video calling', 'Google Calender', 'Gemeni API'],
    image: '/media/pravidya.png',
    github: '',
    live: 'https://pravidya.jeetofy.com/',
  },
  {
    title: 'Podcast Summarization System',
    description:
      'An AI-powered pipeline that converts long-form podcast audio into concise, readable summaries with key highlights.',
    tech: ['Python', 'NLP', 'Speech-to-Text', 'Summarization'],
    image: '/media/podcast.png',
    github: 'https://github.com/aditinikam123/Podcast-Summarization-System-with-Translation-and-PDF-Report-Generation',
    live: '/media/podcastvideo.mp4',
  },
  {
    title: 'Wildlife Poaching Detection (LSTM)',
    description:
      'Sequence-model based detection system to identify suspicious patterns and improve early warning signals.',
    tech: ['Python', 'LSTM', 'Time Series', 'ML'],
    image: '/media/ml.png',
    github: 'https://github.com/aditinikam123/WildLife_Poaching_Detection_in-Karnataka_Using_ML',
    live: 'https://colab.research.google.com/drive/1Z00yYGcmGduDciucS9mxP1d3il2iEL8v?usp=sharing',
  },
  {
    title: 'Rural Healthcare Platform',
    description:
      'A responsive web platform enabling streamlined appointment booking, basic triage, and patient record tracking.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/media/Rural_Healthcare_Platform.png',
    github: 'https://github.com/aditinikam123/Rural-Healthcare-Connect',
    live: 'https://rural-healthcare-accessible-medical-and-wellness-store.vercel.app/',
  },
  {
    title: 'Virtual Study Room (CI/CD)',
    description:
      'A collaborative virtual room experience with real-time presence and automated deployments for fast iteration.',
    tech: ['React', 'CI/CD', 'Docker', 'Cloud'],
    image: '/placeholder-project.svg',
    github: 'https://github.com/aditinikam123/VirtualStudyRoom',
    live: 'https://drive.google.com/drive/folders/1dne7In1CBGwldk3xq6jjlxnKUe8QfXp-?usp=sharing',
  },
  {
    title: 'Chat Application',
    description:
      'Real-time chat application with rooms, typing indicators, and a clean UI optimized for mobile and desktop.',
    tech: ['React', 'Node.js', 'Socket.IO', 'Express'],
    image: '/media/chatapp.png',
    github: 'https://github.com/aditinikam123/MERN_Chat_App_With_Online_Status_And_Messaging',
    live: 'https://drive.google.com/drive/folders/1mdpMIc8FZSWSIbrPWqrixfLEQvPCZWDO?usp=sharing',
  },
  {
    title: 'College Bus Tracking App (Flutter)',
    description:
      'Mobile app that shows live bus movement and routes with a simple, commuter-friendly experience.',
    tech: ['Flutter', 'Dart', 'Maps', 'APIs'],
    image: '/media/bus.png',
    github: 'https://github.com/aditinikam123/Smart_College_Bus_Tracking_System_TrackItRide',
    live: 'https://drive.google.com/drive/folders/1-K_H4Ml_rZ7mnpvG4x24EJj0jbRj3i8G?usp=sharing',
  },
  {
    title: 'Movie and Book Recommender',
    description:
      'Movie, Book & Chatbot Recommendation System is an AI-powered web application that provides personalized recommendations and an interactive chatbot experience using Machine Learning and Gradio.',
    tech: ['Python', 'ML'],
    image: '/media/Movieandbook.png',
    github: 'https://github.com/aditinikam123/movie-and-book-recommender',
    live: 'https://62417a647df04ae038.gradio.live',
  },
  {
    title: 'Coffee Shop',
    description:
      'This Website is a coffee shop website',
    tech: ['HTML', 'CSS'],
    image: '/media/coffeeshop.png',
    github: 'https://github.com/',
    live: 'https://drive.google.com/drive/folders/1ScQ4hKOHJd_4yBjW-xmW6gaApjIMkw6Z?usp=sharing',
  },
]

export const experiences = [
  {
    role: 'AI Implementation Intern',
    company: 'NeoticMinds Consulting',
    duration: 'Jan 2026 — May 2026',
    points: [
      'Contributed to the development of the PRAVIDYA Admission Counselling Platform',
      'Worked on project deployment using Webuzo VPS',
      'Deployed another project named Gurumitra',
      'Performed manual testing for projects including Sahayog',
      'Worked with technologies and tools like Gemini APIs, Google Calendar API, and other development tools',     
    ],
  },
  {
    role: 'Cyber Security Intern',
    company: 'EyeSec Cyber Security Solutions Private Limited',
    duration: 'March 2023 — May 2023',
    points: [
      'Completed a Cyber Security Internship at EyeSec Cyber Security Solutions Private Limited.',
      'Learned ethical hacking and web security basics.',
      'Worked with tools and platforms like Burp Suite, PortSwigger, Hack The Box, MetaMask, Wappalyzer, and FoxyProxy.',
      'Gained hands-on experience using Linux OS for security testing.',
      'Improved practical knowledge of web security, vulnerability analysis, and penetration testing basics.',
    ],
  },
  {
    role: 'Web Application Development Intern',
    company: 'Infynow Software Solution LLP',
    duration: 'Aug 2022 — Oct 2022',
    points: [
      'Completed a Web Application Development Internship at Infynow Software Solutions LLP',
      'Gained practical experience in HTML, CSS, JavaScript, jQuery, and Bootstrap.',
      'Developed responsive and interactive web pages.',
      'Worked on frontend design, styling, and interactive website features.',
      'Built a Coffee Shop Website project using modern web technologies.',
    ],
  },
  

  
]



export const certifications = [
  {
    title: 'Conference Paper Presentation',
    issuer: 'ICPEIS 2024',
    icon: 'Award',
    description:
    'Presented a research paper titled “Wildlife Poaching Detection in Karnataka using Machine Learning” at the 3rd International Conference on Power Engineering and Intelligent Systems. Received certification for paper presentation and research contribution in the field of Machine Learning and Wildlife Protection.',
    image: '/media/ccpaper.png',
  },
  {
    title: 'NPTEL Online Certification - Introduction to Machine Learning',
    issuer: 'NPTEL (IIT Kharagpur)',
    icon: 'Award',
    description:
      'Completed the 8-week NPTEL online course and examination on “Introduction to Machine Learning” with a score of 79%, certified by NPTEL and Indian Institute of Technology Kharagpur. Gained knowledge in Machine Learning concepts, algorithms, and data-driven problem solving.',
    image: '/media/MLcertificate.png',
  },
  {
    title: 'NPTEL Online Certification - Software Testing',
    issuer: 'NPTEL (IIT Bangalore and IIT Madras)',
    icon: 'Award',
    description:
      'Completed the 12-week NPTEL online course and examination on “Software Testing” with a score of 68%, certified by NPTEL in association with International Institute of Information Technology Bangalore and Indian Institute of Technology Madras. Acquired knowledge in software testing methodologies, debugging, test case design, and quality assurance concepts.',
    image: '/media/STcertificate.png',
  },
]

export const achievements = [
  {
    title: 'CTIE Ideathon Contest 2024',
    description:
      'Successfully participated in the CTIE Ideathon Contest 2024 organized by KLE Centre for Technology Innovation and Entrepreneurship on 22nd November 2024, demonstrating innovation, problem-solving, and entrepreneurial thinking.',
    icon: 'Presentation',
  },
  {
    title: 'Publication Achievement',
    description:
      'Published research paper “Wildlife Poaching Detection in Karnataka using Machine Learning” in the Springer Nature book “Power Engineering and Intelligent Systems” after presentation at the 3rd International Conference on Power Engineering and Intelligent Systems.',
    icon: 'Trophy',
  },
  {
    title: 'International Conference Presentation',
    description:
      'Presented a research paper at the 3rd International Conference on Power Engineering and Intelligent Systems on “Wildlife Poaching Detection in Karnataka using Machine Learning.”',
    icon: 'Presentation',
  },
]

export const skills = [
  {
    group: 'Programming Languages',
    items: ['C++', 'Java', 'Python', 'SQL'],
  },
  {
    group: 'Core CS',
    items: ['DSA', 'OOP', 'OS', 'DBMS', 'Computer Networks'],
  },
  {
    group: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    group: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    group: 'Tools & Practices',
    items: ['Git', 'GitHub', 'REST APIs', 'Prisma ORM'],
  },
]

