import React, { useState, useEffect } from 'react';
import { Music, Heart } from 'lucide-react';
import { Track } from './types/music';
import { DeezerService } from './services/deezer';
import { useAudio } from './hooks/useAudio';
import { SearchBar } from './components/SearchBar';
import { TrackList } from './components/TrackList';
import { NowPlaying } from './components/NowPlaying';

function App() {
  const [searchTracks, setSearchTracks] = useState<Track[]>([]);
  const [topTracks, setTopTracks] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    audioRef,
    playTrack,
    togglePlayPause,
    seekTo,
  } = useAudio();

  // Load top tracks on component mount
  useEffect(() => {
    const loadTopTracks = async () => {
      setIsLoading(true);
      try {
        const response = await DeezerService.getTopTracks(15);
        setTopTracks(response.data || []);
      } catch (error) {
        console.error('Error loading top tracks:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTopTracks();
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchTracks([]);
      setHasSearched(false);
      return;
    }

    setIsLoading(true);
    setHasSearched(true);
    try {
      const response = await DeezerService.searchTracks(query, 20);
      setSearchTracks(response.data || []);
    } catch (error) {
      console.error('Error searching tracks:', error);
      setSearchTracks([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Audio Element */}
      <audio ref={audioRef} />
      
      {/* Header */}
      <header className="p-6 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
              <Music className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Maliou Sound Wave
            </h1>
          </div>
          <p className="text-gray-300 text-lg mb-8">
            Discover and play music from millions of tracks
          </p>
          
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-32">
        {hasSearched && searchTracks.length > 0 && (
          <div className="mb-12">
            <TrackList
              tracks={searchTracks}
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              onTrackPlay={playTrack}
              title="Search Results"
            />
          </div>
        )}

        {hasSearched && searchTracks.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
              <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                No tracks found
              </h3>
              <p className="text-gray-400">
                Try searching for a different song, artist, or album
              </p>
            </div>
          </div>
        )}

        {!hasSearched && topTracks.length > 0 && (
          <TrackList
            tracks={topTracks}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            onTrackPlay={playTrack}
            title="🔥 Trending Now"
          />
        )}

        {!hasSearched && topTracks.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto">
              <Music className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Welcome to SoundWave
              </h3>
              <p className="text-gray-400">
                Search for your favorite music to get started
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Now Playing */}
      <NowPlaying
        track={currentTrack}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        onTogglePlayPause={togglePlayPause}
        onSeek={seekTo}
      />
    </div>
  );
}

export default App;