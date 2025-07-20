import React from 'react';
import TrackCard from './TrackCard';
import { useStore } from '../context/StoreContext';

const TrackList = ({ tracks, currentTrack, isPlaying, onTrackPlay, title }) => {
  const { url } = useStore(); // Utilisation du contexte

  if (tracks.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-3">
        {tracks.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            isCurrentTrack={currentTrack?.id === track.id}
            isPlaying={isPlaying && currentTrack?.id === track.id}
            onPlay={onTrackPlay}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;