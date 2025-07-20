const CORS_PROXY = 'https://corsproxy.io/?';

export class DeezerService {
  static async searchTracks(query, limit = 20) {
    if (!query.trim()) return { data: [] };
    
    try {
      const encodedQuery = encodeURIComponent(query);
      const url = `${CORS_PROXY}${encodeURIComponent(`https://api.deezer.com/search?q=${encodedQuery}&limit=${limit}`)}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching tracks:', error);
      return { data: [] };
    }
  }

  static async getTopTracks(limit = 20) {
    try {
      const url = `${CORS_PROXY}${encodeURIComponent(`https://api.deezer.com/chart/0/tracks?limit=${limit}`)}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching top tracks:', error);
      return { data: [] };
    }
  }

  static formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}