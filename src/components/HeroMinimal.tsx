import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Code, Mail, MapPin, ArrowRight, MessageSquare, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useMemo } from "react";
import HoverPreview from "./HoverPreview";
import { askResume, resumeData } from "../utils/resumeData";
import { useTheme } from "./ThemeProvider";

const HeroMinimal = ({ onNavigate }: { onNavigate: (sectionId: string) => void }) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [chatResponse, setChatResponse] = useState<string | null>(null);
    const [isTyping, setIsTyping] = useState(false);
    const { theme, setTheme } = useTheme();

    const defaultSuggestions = [
        "What are your skills?",
        "Show me your projects",
        "Tell me about yourself",
        "How can I contact you?",
        "What is your philosophy?"
    ];

    // Generate dynamic suggestions from resumeData
    const allSuggestions = useMemo(() => {
        const keywords = resumeData.flatMap(section => section.keywords);
        const titles = resumeData.map(section => section.title);
        // Combine, dedup, and title-case
        const unique = Array.from(new Set([...defaultSuggestions, ...titles, ...keywords]));
        return unique.map(s => s.charAt(0).toUpperCase() + s.slice(1));
    }, []);

    const filteredSuggestions = searchQuery
        ? allSuggestions.filter(q => q.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6)
        : defaultSuggestions;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        processSearch(searchQuery);
    };

    const handleSuggestionClick = (question: string) => {
        setSearchQuery(""); // Clear first
        setIsTyping(true);
        let i = 0;

        const typeInterval = setInterval(() => {
            setSearchQuery(question.substring(0, i + 1));
            i++;

            if (i === question.length) {
                clearInterval(typeInterval);
                setIsTyping(false);
                // process search after a short pause
                setTimeout(() => processSearch(question), 300);
            }
        }, 50); // Speed of typing
    };

    const processSearch = (query: string) => {
        setIsTyping(true);
        // Simulate thinking delay
        setTimeout(() => {
            const response = askResume(query);

            // If the response has a modalId, navigate to it!
            if (response.modalId) {
                setChatResponse(null); // Clear any chat bubbles
                onNavigate(`#${response.modalId}`);
                setSearchQuery(""); // Clear search after navigation
            } else {
                setChatResponse(response.text);
            }

            setIsTyping(false);
        }, 600);
    };

    const navigationItems = [
        { icon: User, label: "Me", href: "#about", preview: "Software Engineer & Java Developer" },
        { icon: Briefcase, label: "Projects", href: "#projects", preview: "5+ Enterprise & IoT Projects" },
        { icon: Code, label: "Skills", href: "#skills", preview: "Java, Spring Boot, React, IoT" },
        { icon: Mail, label: "Contact", href: "#contact", preview: "Let's Connect!" },
        { icon: MapPin, label: "Location", href: "#contact", sub: "Coimbatore", preview: "Open to Relocation" },
    ];

    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Theme Toggle */}
            <div className="absolute top-6 right-6 z-50">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-3 rounded-full bg-background/20 backdrop-blur-md border border-border/20 text-foreground hover:bg-background/40 transition-all shadow-lg"
                    aria-label="Toggle theme"
                >
                    {theme === "dark" ? (
                        <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                        <Moon className="h-5 w-5 text-purple-500" />
                    )}
                </button>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-500/20 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-pink-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-blue-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
                <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-foreground/5 whitespace-nowrap select-none pointer-events-none">
                    Saraniya G
                </h1>
            </div>

            <div className="container relative z-10 mx-auto px-4 max-w-4xl flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-xl font-medium">Hey, I'm Saraniya Gopalakrishnan</span>
                        <motion.span
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                            className="text-2xl inline-block origin-bottom-right"
                        >
                            👋
                        </motion.span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                        Electronics & Software Engineer
                    </h1>
                </motion.div>

                {/* Avatar Placeholder - Doodle Style */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12 relative"
                >
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-background border-4 border-foreground p-1 relative z-10 overflow-hidden shadow-2xl">
                        <img
                            src="/profile-placeholder.jpg"
                            alt="Saraniya"
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl rounded-full" />
                </motion.div>

                {/* Chat/Search Component */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-md mb-8 relative z-50 flex flex-col items-center"
                >
                    <form onSubmit={handleSearch} className="relative group w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Ask me anything (e.g., 'skills', 'projects')..."
                            className="w-full px-6 py-4 rounded-full bg-background/50 border border-border/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-lg text-lg transition-all pr-12"
                        />
                        <Button
                            type="submit"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10"
                            disabled={isTyping}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </form>

                    {/* Suggestions */}
                    {!chatResponse && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap justify-center gap-2 mt-4"
                        >
                            {filteredSuggestions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSuggestionClick(q)}
                                    className="px-3 py-1 text-xs bg-secondary/50 hover:bg-primary/20 hover:text-primary rounded-full border border-border/50 transition-colors backdrop-blur-sm"
                                >
                                    {q}
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {/* Chat Response Popover */}
                    <AnimatePresence>
                        {chatResponse && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 10, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                className="absolute top-full left-0 right-0 bg-popover/90 backdrop-blur-xl border border-border rounded-xl p-4 shadow-xl mt-2 z-50"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-primary/20 rounded-lg">
                                        <MessageSquare className="w-4 h-4 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm leading-relaxed">
                                            {isTyping ? "Thinking..." : chatResponse}
                                        </p>
                                        <button
                                            onClick={() => setChatResponse(null)}
                                            className="text-xs text-muted-foreground mt-2 hover:text-primary"
                                        >
                                            Dismiss
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Bento Navigation */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full"
                >
                    {navigationItems.map((item, index) => (
                        <div key={item.label} className="relative group">
                            <button
                                onClick={() => onNavigate(item.href)}
                                onMouseEnter={() => setHoveredItem(item.label)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className="w-full h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-background/40 hover:bg-background/60 border border-border/50 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl cursor-pointer"
                            >
                                <item.icon className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="font-medium text-sm">{item.label}</span>
                                {item.sub && <span className="text-xs text-muted-foreground mt-1">{item.sub}</span>}
                            </button>

                            <HoverPreview
                                isVisible={hoveredItem === item.label}
                                title={item.label}
                                previewText={item.preview}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroMinimal;
