import { motion, AnimatePresence } from "framer-motion";

export interface ResumeSection {
    title: string;
    content: string;
    keywords: string[];
    modalId?: string;
}

export const resumeData: ResumeSection[] = [
    {
        title: "Bio",
        content: "I am Saraniya G, an Electronics & Communication Engineering graduate with a strong orientation toward software engineering. I focus on backend development, database systems, and IoT applications using Java, SQL, and modern web tech.",
        keywords: ["who are you", "bio", "about", "introduction", "name", "role", "saraniya"],
        modalId: "about"
    },
    {
        title: "Skills",
        content: "My core competencies include: Backend development (Java, JDBC, JPA, Servlets), Database design (MySQL, SQL Server), MVC Architecture, Frontend (HTML, CSS, React), and IoT integration (ESP32, Sensors).",
        keywords: ["skills", "skill", "tech stack", "technologies", "java", "react", "backend", "database"],
        modalId: "skills"
    },
    {
        title: "Philosophy",
        content: "My philosophy: 'Scalable systems are built on clarity, discipline, and continuous learning.' I believe technical excellence comes from structured thinking.",
        keywords: ["philosophy", "belief", "vision", "approach"],
        modalId: "about"
    },
    {
        title: "Projects",
        content: "Key projects: 1) Bus Reservation System (Java/JDBC/MVC) - Managed bookings & transactions. 2) Smart Saline Bottle (IoT/ESP32) - Real-time patient monitoring. 3) Restaurant Recommendation Interface (HTML/CSS) - Responsive UI design.",
        keywords: ["projects", "project", "bus", "saline", "restaurant", "work", "portfolio"],
        modalId: "projects"
    },
    {
        title: "Achievements",
        content: "I participated in the Smart India Hackathon (Internal Round), presented research on Decentralized Banking at SONA College, and hold certifications from IBM (Web Dev), Meta (Blockchain), and SkillRack (C/Python/MySQL).",
        keywords: ["achievements", "achievement", "awards", "award", "certifications", "certification", "hackathon", "certificates", "education"],
        modalId: "education"
    },
    {
        title: "Contact",
        content: "You can reach me at saraniyagopalakrishnan@gmail.com or connect via LinkedIn.",
        keywords: ["contact", "email", "reach", "hire", "gmail", "address", "location"],
        modalId: "contact"
    }
];

export interface ChatResponse {
    text: string;
    modalId?: string;
}

export const askResume = (query: string): ChatResponse => {
    const lowerQuery = query.toLowerCase();

    // Direct match
    const match = resumeData.find(section =>
        section.keywords.some(keyword => lowerQuery.includes(keyword))
    );

    if (match) {
        return { text: match.content, modalId: match.modalId };
    }

    // Default responses
    if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
        return { text: "Hello! I'm Saraniya's AI assistant. Ask me about her projects, skills, or achievements, and I'll take you there!" };
    }

    return { text: "I'm not sure about that, but I can tell you about my Projects, Skills, or Achievements. Try asking 'Show me projects'!" };
};
