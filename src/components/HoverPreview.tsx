import { motion, AnimatePresence } from "framer-motion";

interface HoverPreviewProps {
    isVisible: boolean;
    title: string;
    previewText: string;
}

const HoverPreview = ({ isVisible, title, previewText }: HoverPreviewProps) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 bg-popover/80 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl z-50 pointer-events-none"
                >
                    <h4 className="font-bold text-sm mb-1 text-primary">{title}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{previewText}</p>
                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-popover/80 border-b border-r border-border/50 rotate-45" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HoverPreview;
