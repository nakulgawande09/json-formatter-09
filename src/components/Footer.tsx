import React from 'react';
import { Mail, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 Nakul Navneet Gawande. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:nakGawande@gmail.com" className="text-sm hover:text-blue-300 transition-colors flex items-center">
              <Mail size={18} className="mr-2" />
              nakGawande@gmail.com
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-300 transition-colors flex items-center">
              <Github size={18} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;