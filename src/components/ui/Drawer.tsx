import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const portalRoot = document.getElementById("overlay-root");
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!portalRoot) return null;

  // Close on ESC

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 h-screen w-full sm:w-[420px]
                       bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    portalRoot,
  );
}
