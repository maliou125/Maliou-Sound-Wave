import React, { createContext, useContext, useState } from 'react';

// Créer le contexte
const StoreContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore doit être utilisé dans un StoreProvider');
  }
  return context;
};

// Provider du contexte
export const StoreProvider = ({ children }) => {
  const [url, setUrl] = useState('https://api.deezer.com');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const value = {
    url,
    setUrl,
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    searchQuery,
    setSearchQuery,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;