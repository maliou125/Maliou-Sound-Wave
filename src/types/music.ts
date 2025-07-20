export interface Track {
  id: number;
  title: string;
  artist: {
    name: string;
    picture_medium: string;
  };
  album: {
    title: string;
    cover_medium: string;
    cover_big: string;
  };
  duration: number;
  preview: string;
  rank: number;
}

export interface SearchResponse {
  data: Track[];
  total: number;
}

export interface PlayingTrack extends Track {
  isPlaying: boolean;
  currentTime: number;
}