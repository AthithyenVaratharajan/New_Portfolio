import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    linkedin,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    github,
    tripguide,
    threejs,
    ecommerce_crud,
    google,
    facebook,
    amazon,
    netflix,
    netflix2,
    Drone,
    c,
    cplusplus,
    python,
    java
  } from "../assets";
  

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Development",
      icon: web,
    },
    {
      title: "Mobile Develoment",
      icon: mobile,
    },
    {
      title: "Machine Learning/AI",
      icon: backend,
    },
    {
      title: "AI/VR Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "c++",
      icon: cplusplus,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Google Clone",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: google,
      source_code_link: "https://github.com/",
      web_link: "https://clone-966a7.web.app/"
    },
    {
        name: "Facebook Clone",
        description:
          "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "firebase",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
        ],
        image: facebook,
        source_code_link: "https://github.com/",
        web_link: "https://social-media-app-cbee8.web.app/"
      },
      {
        name: "Amazon Clone",
        description:
          "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "firebase",
            color: "green-text-gradient",
          },
          {
            name: "stripe",
            color: "pink-text-gradient",
          },
        ],
        image: amazon,
        source_code_link: "https://github.com/",
        web_link: "https://clone-63f62.web.app/"
      },
      {
        name: "Netflix Clone",
        description:
          "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
          {
            name: "redux",
            color: "blue-text-gradient",
          },
          {
            name: "firebase",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
        ],
        image: netflix,
        source_code_link: "https://github.com/",
        web_link: "https://netflix-build-f0566.web.app/"
      },
      {
        name: "Netflix 2.0 Clone",
        description:
          "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
          {
            name: "redux",
            color: "blue-text-gradient",
          },
          {
            name: "firebase",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
        ],
        image: netflix2,
        source_code_link: "https://github.com/",
        web_link: "https://netflix-clone-a99e7.web.app/"
      },
      
    {
      name: "Ecommerce CRUD Grocery App",
      description:
        "Web application I build in under a day actually in a couple of hours to refresh on basic react and mongodb backend apis",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce_crud,
      source_code_link: "https://github.com/",
      web_link: "https://frontend-two-rho-15.vercel.app/"
    },
    // {
    //   name: "Job IT",
    //   description:
    //     "Mobile application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react native",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Drone/Autonomus Self Driving AI",
    //   description:
    //     "Drone that self drives using computer vision Python currently working on project, will incorporate solar powered Drone features. Video Linke coming soon.",
    //   tags: [
    //     {
    //       name: "evTOL",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "UAV",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Autonomous AI/ Solar",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: Drone,
      
    // },
    
    
  ];

  export const socialLinks = [
    
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AthithyenVaratharajan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/athithyen-varatharajan-a10231260/',
    }
];
  
  export { services, technologies, experiences, testimonials, projects };
  