import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Track } from '../types/music';
import { DeezerService } from '../services/deezer';

interface TrackCardProps {
  track: Track;
  isCurrentTrack: boolean;
  isPlaying: boolean;
  onPlay: (track: Track) => void;
}

export const TrackCard: React.FC<TrackCardProps> = ({
  track,
  isCurrentTrack,
  isPlaying,
  onPlay,
}) => {
  const handlePlay = () => {
    onPlay(track);
  };

  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center space-x-4">
        <div className="relative flex-shrink-0">
          <img
            src={track.album.cover_medium}
            alt={track.album.title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            disabled={!track.preview}
          >
            {isCurrentTrack && isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium truncate text-lg">
            {track.title}
          </h3>
          <p className="text-gray-300 truncate">
            {track.artist.name}
          </p>
          <p className="text-gray-400 text-sm truncate">
            {track.album.title}
          </p>
        </div>
        
        <div className="text-right flex-shrink-0">
          <div className="text-gray-300 text-sm">
            {DeezerService.formatDuration(track.duration)}
          </div>
          {!track.preview && (
            <div className="text-xs text-yellow-400 mt-1">
              Preview unavailable
            </div>
          )}
        </div>
      </div>
      
      {isCurrentTrack && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-600 rounded-b-xl"></div>
      )}
    </div>
  );
};