import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from './theme-provider'
import { cn } from '../../lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const

  return (
    <div className="flex items-center bg-white/10 dark:bg-gray-800/30 backdrop-blur-md rounded-full p-1 border border-white/20 dark:border-gray-700/50">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
            "hover:bg-white/20 dark:hover:bg-gray-600/30",
            theme === value && "bg-white/30 dark:bg-gray-600/50 shadow-lg"
          )}
          aria-label={`Switch to ${label} theme`}
          title={`Switch to ${label} theme`}
        >
          <Icon 
            size={16} 
            className={cn(
              "transition-all duration-300",
              theme === value 
                ? "text-primary-600 dark:text-accent-400" 
                : "text-gray-600 dark:text-gray-400"
            )}
          />
        </button>
      ))}
    </div>
  )
}
