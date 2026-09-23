import React from "react";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme, ThemeMode } from "../context/ThemeContext";

interface ThemeOption {
  id: ThemeMode;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const themeOptions: ThemeOption[] = [
  { id: "light", label: "Light Mode", shortLabel: "Light", icon: Sun },
  { id: "night", label: "Night Mode", shortLabel: "Night", icon: Moon },
  { id: "dark", label: "Dark Mode", shortLabel: "Dark", icon: Sparkles },
];

interface ThemeSwitcherProps {
  variant?: "desktop" | "mobile";
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ variant = "desktop", className = "" }) => {
  const { theme, setTheme } = useTheme();

  if (variant === "mobile") {
    return (
      <div className={`space-y-1.5 ${className}`}>
        <span className="text-xs font-semibold tracking-wider uppercase text-[#63726a] dark-mode-label px-1">
          Theme Mode
        </span>
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-[#ede8dc] border border-[#d6cfbe] theme-switcher-bg">
          {themeOptions.map((opt) => {
            const Icon = opt.icon;
            const isActive = theme === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setTheme(opt.id)}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#0e261f] text-[#f7f4ec] shadow-sm font-semibold active-theme-btn"
                    : "text-[#2f3d36] hover:bg-black/5 hover:text-[#0e261f]"
                }`}
                aria-pressed={isActive}
                aria-label={opt.label}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#d98d12]" : ""}`} />
                <span className="text-[11px] leading-tight text-center">{opt.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop variant: Clean, modern, segmented bar with icons and clear labels
  return (
    <div
      className={`inline-flex items-center p-1 rounded-full bg-[#ede8dc]/80 border border-[#d6cfbe]/80 theme-switcher-bg transition-colors ${className}`}
      role="group"
      aria-label="Theme mode switcher"
    >
      {themeOptions.map((opt) => {
        const Icon = opt.icon;
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => setTheme(opt.id)}
            title={opt.label}
            aria-pressed={isActive}
            className={`group/btn relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-200 ${
              isActive
                ? "bg-[#0e261f] text-[#f7f4ec] font-semibold shadow-xs active-theme-btn"
                : "text-[#4a5a51] hover:text-[#0e261f] hover:bg-black/5"
            }`}
          >
            <Icon
              className={`w-3.5 h-3.5 transition-transform group-hover/btn:scale-110 ${
                isActive ? "text-[#d98d12]" : "text-current opacity-80"
              }`}
            />
            <span className="whitespace-nowrap hidden lg:inline">{opt.label}</span>
            <span className="whitespace-nowrap lg:hidden">{opt.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
};
