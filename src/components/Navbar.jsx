import React from 'react';
import { Music } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Navbar = () => {
  const { url } = useStore(); // Utilisation du contexte

  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl">
            <Music className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Maliou Sound Wave
          </h1>
        </div>
        
        <div className="text-gray-400 text-sm">
          API: {url}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;