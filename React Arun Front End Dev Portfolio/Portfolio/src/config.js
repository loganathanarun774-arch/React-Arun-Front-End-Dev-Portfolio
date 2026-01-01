// Centralized Configuration for easy manual updates
import heroBg from './assets/hero-bg.jpg';
import profileImg from './assets/profile.jpg';
import aboutProfile from './assets/about-profile.jpg';

export const CONFIG = {
    name: "Arun Loganathan",
    logo: "Arun Loganathan",
    hero: {
        backgroundImage: heroBg,
        heading: "Front End developer.",
        subheading: "Frontend Developer | React • JavaScript • UI Engineering",
        stats: [
            { label: "Projects", value: "500+" },
            { label: "Satisfaction", value: "99%" },
            { label: "Years Exp", value: "10+" }
        ]
    },
    about: {
        title: "About me",
        profileImage: aboutProfile,
        bio: "Hi, I’m Arun — a Frontend Developer based in India with hands-on experience building responsive web interfaces using HTML, CSS, JavaScript, and React. I focus on creating clean UI, integrating APIs, and delivering user-friendly applications through real-world projects and continuous learning. I aim to grow in a collaborative environment where I can sharpen my frontend skills and contribute value through scalable, well-structured code.",
        contact: {
            email: "loganathanarun774@gmail.com",
            phone: "+91-9629807233",
            linkedin: "https://www.linkedin.com/in/arun-loganathan-20b075364",
            Github: "https://github.com/loganathanarun774-arch",
            address: "2/14 Namakkal, TN"
        },
        education: {
            school: "Anna university - Mechanical Engineering",
            degree: "Bachelor of Engineering",
            period: "2017 - 2021"
        },
        skills: {
            soft: ["Communication", "Problem Solving", "Attention-to-detail", "Adaptability"],
            technical_display: [
                { label: "React", percentage: "90%", icon: "Atom", color: "#61DAFB", level: 9 },
                { label: "HTML", percentage: "95%", icon: "Code2", color: "#E34F26", level: 10 },
                { label: "CSS", percentage: "90%", icon: "Layers", color: "#1572B6", level: 9 },
                { label: "JavaScript", percentage: "85%", icon: "Terminal", color: "#F7DF1E", level: 8 },
                { label: "Tailwind", percentage: "88%", icon: "Wind", color: "#38B2AC", level: 9 },
                { label: "Bootstrap", percentage: "80%", icon: "Boxes", color: "#7952B3", level: 8 }
            ],
            technical: ["React.js", "HTML", "CSS", "JAVASCRIPT", "TAILWIND CSS", "BOOTSTRAP"],
            tools: ["GitHub", "VS Code"],
            set: ["Frontend Development", "Responsive UI Design", "API Integration", "Component-Based Architecture", "UI Optimization"]
        },
        languages: ["Tamil (Native)", "English (Professional), Telugu (conversational)"],
        interests: ["Photo Design", "Video Editing"]
    },
    services: [
        {
            title: "Frontend Web Development",
            desc: "I build responsive, modern web interfaces using HTML, CSS, JavaScript, and React. My focus is on clean structure, reusable components, and user-friendly layouts.",
            icon: "Monitor",
            color: "#ECAA00"
        },
        {
            title: "React Application Development",
            desc: "I develop single-page applications using React with a component-based architecture, managing state, props, and hooks for scalable solutions.",
            icon: "Atom",
            color: "#61DAFB"
        },
        {
            title: "Project-Based & Freelance Support",
            desc: "I collaborate on short-term projects, internships, and freelance assignments, contributing frontend features, UI improvements, and bug fixes.",
            icon: "Briefcase",
            color: "#A855F7"
        }
    ],
    resume: {
        summary: "Motivated Junior Front End Developer with a strong foundation in HTML, CSS, JavaScript, React, and AngularJS. Experienced in building responsive, user-friendly web interfaces and interactive components. Passionate about clean UI development, performance optimization, and continuous learning of modern frontend technologies.",
        experience: [
            {
                role: "Front-End Developer",
                company: "Apple E-Commerce Website",
                period: "Project",
                desc: "Developed a premium Apple-style e-commerce application using React with component-based architecture and fully custom CSS for a modern, responsive UI. Implemented global state management with React Context API and designed scalable frontend workflows."
            },
            {
                role: "Front-End Developer",
                company: "News Feed / Smart Event Management",
                period: "Project",
                desc: "Built an interactive news application using external APIs, displaying real-time updates with category-based filtering. Implemented reusable components and efficient state handling."
            },
            {
                role: "Front-End Developer",
                company: "Pediatric Medical Center Website",
                period: "Project",
                desc: "Designed and developed a professional medical website with responsive layouts, focusing on accessibility, clean UI, and user-friendly navigation using integrated APIs."
            }
        ],
        strengths: ["Strong understanding of frontend fundamentals", "Quick learner and adaptable to new technologies", "Attention to detail in UI design", "Passion for frontend development and user experience"]
    }
};
