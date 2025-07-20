import React from 'react';
import { Track } from '../types/music';
import { TrackCard } from './TrackCard';

interface TrackListProps {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  onTrackPlay: (track: Track) => void;
  title: string;
}

export const TrackList: React.FC<TrackListProps> = ({
  tracks,
  currentTrack,
  isPlaying,
  onTrackPlay,
  title,
}) => {
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