import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full ${theme === 'light' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
        title="Light mode"
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full ${theme === 'dark' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
        title="Dark mode"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full ${theme === 'system' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
        title="System theme"
      >
        <Monitor size={18} />
      </button>
    </div>
  );
};

export default ThemeToggle;