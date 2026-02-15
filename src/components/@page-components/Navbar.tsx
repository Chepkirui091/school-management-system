"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between gap-4 p-4 bg-card border-b border-border shadow-card">
      <div className="hidden md:flex items-center gap-2 flex-1 max-w-sm">
        <div className="flex items-center gap-2 w-full rounded-full border border-border bg-muted/50 px-3 py-2 text-sm text-muted-foreground focus-within:ring-2 focus-within:ring-lamaPurple/50 focus-within:border-lamaPurple dark:focus-within:ring-lamaSky/30 dark:focus-within:border-lamaSky">
          <Image src="/search.png" alt="" height={14} width={14} className="opacity-70" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground min-w-0"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 sm:gap-6 justify-end w-full">
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
          <Image src="/message.png" alt="Messages" width={20} height={20} />
        </button>
        <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors relative">
          <Image src="/announcement.png" alt="Announcements" width={20} height={20} />
          <span className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs font-medium">
            1
          </span>
        </button>
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-sm font-medium text-foreground">John Doe</span>
          <span className="text-xs text-muted-foreground">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full border-2 border-border object-cover"
        />
      </div>
    </header>
  );
};

export default NavBar;
