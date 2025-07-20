import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const { url } = useStore(); // Utilisation du contexte

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-400 transition-colors" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher des chansons, artistes ou albums..."
          className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          disabled={isLoading}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      {isLoading && (
        <div className="absolute top-full left-0 right-0 mt-2 text-center">
          <div className="inline-flex items-center text-purple-300">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-300 mr-2"></div>
            Recherche en cours...
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchBar;