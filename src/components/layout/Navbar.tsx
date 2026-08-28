'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV_LINKS, COMPANY, type NavLink } from '@/lib/data';
import { cn } from '@/lib/utils';
import SocialLinks from '@/components/layout/SocialLinks';

function isLinkActive(pathname: string, href: string) {
  return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
}

function DesktopDropdown({
  link,
  pathname,
}: {
  link: NavLink;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const children = link.children ?? [];
  const parentActive = isLinkActive(pathname, link.href);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={link.href}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          'group relative inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
          parentActive ? 'text-[#A88D2E]' : 'text-white/80 hover:text-white',
        )}
      >
        {link.label}
        <ChevronDown
          size={12}
          className={cn(
            'transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
        <span
          className={cn(
            'absolute inset-x-3.5 -bottom-0.5 h-px bg-[#A88D2E] transition-transform duration-300',
            parentActive || open ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
          )}
        />
      </Link>

      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.16 }}
              role="menu"
              className="min-w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0e0c08]/95 py-2 shadow-xl shadow-black/30 backdrop-blur-xl"
            >
              {children.map((child) => {
                const childActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    className={cn(
                      'block px-4 py-2.5 text-[11px] tracking-[0.16em] uppercase transition-colors',
                      childActive
                        ? 'text-[#A88D2E]'
                        : 'text-white/80 hover:bg-[#A88D2E]/10 hover:text-[#A88D2E]',
                    )}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

function MobileNavItem({
  link,
  pathname,
  onNavigate,
}: {
  link: NavLink;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(() =>
    isLinkActive(pathname, link.href),
  );
  const children = link.children ?? [];
  const isActive = isLinkActive(pathname, link.href);

  if (children.length === 0) {
    return (
      <Link
        href={link.href}
        onClick={onNavigate}
        className={cn(
          'rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-[#A88D2E]/10',
          isActive ? 'text-[#A88D2E]' : 'text-white hover:text-[#A88D2E]',
        )}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex items-center">
        <Link
          href={link.href}
          onClick={onNavigate}
          className={cn(
            'flex-1 rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-[#A88D2E]/10',
            isActive ? 'text-[#A88D2E]' : 'text-white hover:text-[#A88D2E]',
          )}
        >
          {link.label}
        </Link>
        <button
          type="button"
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${link.label} menu`}
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white/70 hover:text-[#A88D2E]"
        >
          <ChevronDown
            size={16}
            className={cn(
              'transition-transform duration-200',
              expanded && 'rotate-180',
            )}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden"
          >
            <div className="ml-2 mb-1 flex flex-col border-l border-white/10 pl-2">
              {children.map((child) => {
                const childActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onNavigate}
                    className={cn(
                      'rounded-xl px-3 py-2 text-sm transition hover:bg-[#A88D2E]/10',
                      childActive
                        ? 'text-[#A88D2E]'
                        : 'text-white/75 hover:text-[#A88D2E]',
                    )}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-4',
          scrolled
            ? 'max-w-5xl border-white/10 bg-[#0e0c08]/80 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'max-w-6xl border-transparent bg-transparent',
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2 pl-1">
          <Image
            src="/logo-main.png"
            alt={COMPANY.name}
            width={140}
            height={86}
            className="h-10 w-auto sm:h-16"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.children?.length) {
              return (
                <DesktopDropdown
                  key={link.href}
                  link={link}
                  pathname={pathname}
                />
              );
            }

            const isActive = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
                  isActive
                    ? 'text-[#A88D2E]'
                    : 'text-white/80 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-px bg-[#A88D2E] transition-transform duration-300',
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <SocialLinks
            className="mr-4 md:mr-2"
            iconSize={18}
            linkClassName="text-white/70 hover:text-[#A88D2E]"
          />
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-[#A88D2E] text-xs tracking-wide transition-colors hover:text-[#bda962] xl:flex"
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-[#A88D2E] px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase text-[#A88D2E] transition-all duration-200 hover:bg-[#A88D2E] hover:text-black sm:inline-flex"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={cn(
              'mx-auto mt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0e0c08]/95 p-4 shadow-xl backdrop-blur-xl lg:hidden',
              scrolled ? 'max-w-5xl' : 'max-w-6xl',
            )}
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <MobileNavItem
                  key={link.href}
                  link={link}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </div>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#A88D2E] px-4 py-3 text-center text-sm font-semibold tracking-[0.15em] uppercase text-black"
              >
                Get in Touch
              </Link>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-[#A88D2E]/30 px-4 py-3 text-center text-sm font-medium text-white"
              >
                <Phone size={14} className="text-[#A88D2E]" />
                {COMPANY.phone}
              </a>
              <div className="flex justify-center pt-1">
                <SocialLinks
                  iconSize={20}
                  linkClassName="text-white/70 hover:text-[#A88D2E]"
                />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
