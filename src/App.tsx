import React, { useState } from 'react';
import { Brackets, FileJson, FileCode, GitCompare } from 'lucide-react';
import JSONXMLFormatter from './components/JSONXMLFormatter';
import JSONXMLParser from './components/JSONXMLParser';
import JSONXMLDiff from './components/JSONXMLDiff';
import InteractiveConsole from './components/InteractiveConsole';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [activeTab, setActiveTab] = useState('formatter');

  const tabs = [
    { id: 'formatter', label: 'Formatter', icon: Brackets },
    { id: 'parser', label: 'Parser', icon: FileJson },
    { id: 'diff', label: 'Diff Tool', icon: GitCompare },
    { id: 'console', label: 'Console', icon: FileCode },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">JSON/XML Tool</h1>
              <p className="mt-2 text-sm">Your all-in-one solution for JSON and XML processing</p>
            </div>
            <ThemeToggle />
          </div>
        </header>
        <nav className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto">
            <ul className="flex">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    className={`flex items-center px-6 py-3 ${
                      activeTab === tab.id
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-b-2 border-blue-600 dark:border-blue-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    } transition-colors`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <tab.icon className="mr-2" size={18} />
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <main className="flex-grow container mx-auto p-6">
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {activeTab === 'formatter' && 'JSON/XML Formatter'}
              {activeTab === 'parser' && 'JSON/XML Parser'}
              {activeTab === 'diff' && 'JSON/XML Diff Tool'}
              {activeTab === 'console' && 'Interactive Console'}
            </h2>
            {activeTab === 'formatter' && <JSONXMLFormatter />}
            {activeTab === 'parser' && <JSONXMLParser />}
            {activeTab === 'diff' && <JSONXMLDiff />}
            {activeTab === 'console' && <InteractiveConsole />}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;