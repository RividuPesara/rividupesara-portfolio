export const projectsData = {
  "nexora": {
    category: "MOBILE APP",
    title: "NEXORA",
    description:
      "An AI-powered campus chatbot designed to simplify university life by providing students with real-time access to academic schedules, cafeteria menus, transport information, and essential campus services through intelligent conversation.",
    meta: {
      role: "Backend Developer",
      year: "2025",
      github: "https://github.com/RividuPesara/Nexora-Chatbot",
      technologies: "Flutter, Dart, Wit.ai",
    },
    sections: [
      {
        title: "THE CHALLENGE",
        text: " Students struggled with fragmented and unreliable digital systems. Class schedules were inconsistent, bus timings were outdated, cafeteria menus were unclear, and important reminders were often missed. Existing platforms failed to provide a unified, trustworthy solution, creating daily friction in campus life and increasing student frustration.",
      },
      {
        title: "THE SOLUTION",
        text: "We developed Nexora, an AI-powered student chatbot using Flutter and Dart to centralize essential campus services into a single conversational platform. The system provides real-time access to class timetables, cafeteria menus, university events, and FAQs. We integrated Wit.ai for natural language understanding and the Gemini API to deliver intelligent, context-aware responses. Additionally, we implemented a role-based admin system with System, Café, and Bus Admins, enabling efficient data management and ensuring accurate, up-to-date information for students",
      },
    ],
    images: [
      {
        url: "../images/admin.png", 
        alt: "admin"
      },
      {
        url: "../images/User.png", 
        alt: "User"
      }
    ]
  },
  "staffing-task": {
    category: "MACHINE LEARNING",
    title: "STAFFING & TASK PREDICTION",
    description:
      "Machine learning models built using LightGBM and Random Forest to predict task durations and staffing needs, enabling efficient workforce planning and reduced operational imbalance.",
    meta: {
      role: "Machine Learning Engineer",
      year: "2025",
      github: "https://github.com/RividuPesara/Staffing-Task-Prediction-Models",
      technologies: "Python, LightGBM, Random Forest",
    },
    sections: [
      {
        title: "THE CHALLENGE",
        text: "Operational teams often struggle to balance staffing levels with fluctuating workloads. Manual planning and static rules fail to account for temporal patterns, peak hours, and staff efficiency, leading to overstaffing, understaffing, increased costs, and reduced service quality",
      },
      {
        title: "THE SOLUTION",
        text: "We developed machine learning models to predict task processing times and forecast staffing requirements using historical operational data. Temporal and workload-based features such as day-of-week, hour-of-day, peak and off-peak periods, staff efficiency, and task aggregation were engineered to improve predictive accuracy. Data preprocessing included handling missing values, removing outliers, encoding categorical variables, and feature normalization. LightGBM was implemented for processing time prediction, achieving an MAE of approximately 9.5 minutes and an R² score of 0.92. A Random Forest model was used for staffing prediction, achieving an MAE of approximately 1.2 staff with a low understaffing score of 0.15, supporting more reliable and efficient workforce planning.",
      },
    ],
    images: [
      {
        url: "../images/light.png",
        alt: "lightgbm"
      },
      {
        url: "../images/randomforest.png",
        alt: "randomforest"
      }
    ]
  },
  "myquote": {
    category: "WEB APPLICATION",
    title: "MYQUOTE",
    description:
      "A Ruby on Rails web application that lets users collect, categorize, and share philosophical quotes, with role-based admin management and a public-facing discovery platform.",
    meta: {
      role: "Solo Project",
      year: "2024",
      github: "https://github.com/RividuPesara/myquote",
      technologies: "Ruby on Rails",
    },
    sections: [
      {
        title: "THE CHALLENGE",
        text: "Philosophical quotes were scattered across the internet with no centralized platform for users to collect, manage, and interact with them. Existing platforms lacked personalization, user management, and public accessibility, making it difficult for enthusiasts to engage meaningfully with the content.",
      },
      {
        title: "THE SOLUTION",
        text: "Developed MyQuote, a Ruby on Rails web application that allows users to create accounts, manage quotes, and interact with other users. Standard users can add, edit, delete, categorize, and comment on quotes, while admins can oversee platform content by managing users, suspending accounts, and moderating quotes. The public-facing frontend enables visitors to search and view the latest public quotes without logging in. Each quote includes content, publication year, categories, user comments, and detailed philosopher information, providing a structured and engaging experience for all users.",
      },
    ],
    images: [
      {
        url: "../images/quote_edit.png",
        alt: "edit"
      },
      {
        url: "../images/quote_admin.png",
        alt: "admin"
      }
    ]
  },
  "nekocafe": {
    category: "WEB SITE",
    title: "NEKO CAFE",
    description:
      "A Ghibli themed static website built with HTML and CSS to showcase the café menu, location, and gallery while practicing branding and web design.",
    meta: {
      role: "Solo Project",
      year: "2025",
      github: "https://github.com/RividuPesara/Neko-cafe",
      technologies: "HTML, CSS",
    },
    heroImage: {
      url: "../images/neko.png",
      alt: "Neko Cafe Homepage"
    },
    sections: [
      {
        title: "THE CHALLENGE",
        text: "I wanted to create a website that captures the Ghibli inspired theme of a café while clearly presenting its menu, location, and atmosphere. The challenge was to design a visually engaging site that reflected the café's brand identity and attracted user interest.",
      },
      {
        title: "THE SOLUTION",
        text: "I developed a static website using HTML and CSS, featuring a visually appealing homepage, a menu section highlighting popular items and specialties, an About Us section with location and contact info, and a gallery showcasing high-quality café photos. The project allowed me to explore web design, layout, and branding in a cohesive, immersive way.",
      },
    ],
    images: [
      {
        url: "../images/neko_menu.png",
        alt: "menu"
      },
      {
        url: "../images/neko_event.png",
        alt: "event"
      }
    ]
  },
  "modeM": {
    category: "DESKTOP APPLICATION",
    title: "MODEM",
    description:
      "A desktop productivity application for students, designed to manage subjects, notes, tasks, study timers, and milestone-based achievements, built with Next.js, TypeScript, and Rust.",
    meta: {
      role: "Backend Developer",
      year: "ONGOING",
      github: "https://github.com/RividuPesara",
      technologies: "Next.js, TypeScript, Rust, Tauri",
    },
    sections: [
      {
        title: "THE CHALLENGE",
        text: "Students often struggle to organize their academic workload, manage study sessions, and track progress in a single place. Existing tools either lack integration or fail to gamify productivity, making it difficult to maintain motivation and stay on top of tasks.",
      },
      {
        title: "THE SOLUTION",
        text: "We are developing ModeM, a desktop application using Next.js and TypeScript for the frontend and a Rust-based backend with Tauri for native functionality. The app enables students to manage subjects, notes, to-do lists, and study timers while rewarding progress with milestone-based achievement badges. Rust handles secure data operations and seamless communication between the frontend and backend, ensuring a fast, reliable, and integrated productivity experience.",
      },
    ],
    images: [
      {
        url: "../images/modem_subject.jpg",
        alt: "subject"
      },
      {
        url: "../images/modem_task.jpg",
        alt: "task"
      }
    ]
  },
  tictac: {
    category: "MOBILE APP",
    title: "TIC TAC TOE",
    description:
      "A Flutter/Dart mobile game with three difficulty levels and game state tracking, delivering a more engaging and interactive Tic Tac Toe experience.",
    meta: {
      role: "Solo Project",
      year: "2024",
      github: "https://github.com/RividuPesara/Tic-Tac-Toe",
      technologies: "Flutter, Dart",
    },
    sections: [
      {
        title: "THE CHALLENGE",
        text: "Classic Tic Tac Toe games are often limited to simple gameplay without adaptive difficulty or state tracking, which can reduce engagement for users seeking a more challenging or polished experience.",
      },
      {
        title: "THE SOLUTION",
        text: "Developed a mobile version of Tic Tac Toe using Flutter and Dart, implementing three difficulty modes: Normal (random moves), Medium (logic combined with random moves), and Hard (advanced algorithm). The app also tracks game states to enhance user experience, allowing players to resume, analyze, and enjoy a more interactive and challenging gameplay.",
      },
    ],
    images: [
      {
        url: "../images/tic_tac_startscreen.png",
        alt: "startscreen"
      },
      {
        url: "../images/tic_tac_gameplay.png",
        alt: "Gameplay"
      }
    ]
  },
};