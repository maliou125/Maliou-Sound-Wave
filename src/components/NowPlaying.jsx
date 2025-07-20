import React from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { DeezerService } from '../services/deezer';
import { useStore } from '../context/StoreContext';

const NowPlaying = ({ track, isPlaying, currentTime, duration, onTogglePlayPause, onSeek }) => {
  const { url } = useStore(); // Utilisation du contexte

  if (!track) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    onSeek(newTime);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/20 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Barre de progression */}
        <div
          className="w-full h-1 bg-gray-600 rounded-full mb-4 cursor-pointer"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          {/* Informations de la piste */}
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <img
              src={track.album.cover_medium}
              alt={track.album.title}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-medium truncate">
                {track.title}
              </h4>
              <p className="text-gray-300 text-sm truncate">
                {track.artist.name}
              </p>
            </div>
          </div>
          
          {/* Contrôles */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            
            <button
              onClick={onTogglePlayPause}
              className="bg-white text-black rounded-full p-3 hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </button>
            
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          
          {/* Temps */}
          <div className="text-gray-300 text-sm flex-shrink-0 ml-6">
            {DeezerService.formatDuration(Math.floor(currentTime))} / {DeezerService.formatDuration(duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;