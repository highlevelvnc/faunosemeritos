"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/utils";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/#servicos" },
  { name: "Portfólio", href: "/portfolio" },
  { name: "Cascais", href: "/remodelacoes-cascais" },
  { name: "Lisboa", href: "/remodelacoes-lisboa" },
  { name: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ controla se o header aparece ou some no scroll (mobile)
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsScrolled(currentY > 50);

      // Se o menu mobile estiver aberto, não esconda o header
      if (isMobileMenuOpen) {
        lastScrollY.current = currentY;
        setShowHeader(true);
        return;
      }

      // Sempre mostrar perto do topo
      if (currentY < 80) {
        setShowHeader(true);
        lastScrollY.current = currentY;
        return;
      }

      // Se está descendo -> esconde; se está subindo -> mostra
      if (currentY > lastScrollY.current + 8) {
        setShowHeader(false);
      } else if (currentY < lastScrollY.current - 8) {
        setShowHeader(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // trava scroll quando menu mobile abre
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "glass border-b border-white/10 py-4" : "bg-transparent py-6"
        )}
        initial={{ y: -120 }}
        animate={{ y: showHeader ? 0 : -140 }} // ✅ some no scroll down
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-visible">
                <Image
                  src="/logo.png"
                  alt="Faunos Eméritos"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain bg-transparent"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="font-display text-xl md:text-2xl font-bold gradient-text">
                  Faunos Eméritos
                </span>
                <span className="text-xs text-ice/60 mt-0.5">
                  Remodelações Premium 🇵🇹
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-ice/80 hover:text-electric transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-electric group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Orçamento
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden glass p-3 rounded-full"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-ice" />
              ) : (
                <Menu className="w-6 h-6 text-ice" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <motion.div
              className="absolute inset-0 bg-navy-950/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              className="relative z-10 h-full overflow-y-auto flex flex-col items-center justify-center gap-8 p-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.05 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-display font-bold text-ice hover:text-electric transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  Pedir Orçamento
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
