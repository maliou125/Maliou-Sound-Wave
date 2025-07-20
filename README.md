# 🎵 Maliou Sound Wave - Music Discovery App

A beautiful, modern music discovery application built with React and TypeScript, powered by the Deezer API. Maliou Sound Wave allows users to search for music, discover trending tracks, and play 30-second previews with a sleek, professional interface.

## ✨ Features

- **🔍 Smart Music Search**: Real-time search across millions of tracks, artists, and albums
- **🎧 Audio Previews**: Play 30-second preview clips directly in the browser
- **🔥 Trending Tracks**: Discover what's hot with curated trending music
- **📱 Responsive Design**: Beautiful experience across all devices
- **🎨 Modern UI**: Dark theme with glassmorphism effects and smooth animations
- **⚡ Fast Performance**: Optimized for speed with efficient API calls and caching

## 🚀 Live Demo

[View Live Demo](https://your-deployed-url.netlify.app)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **API**: Deezer Web API
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/maliou-sound-wave.git
cd maliou-sound-wave
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### Searching for Music
1. Use the search bar at the top to find songs, artists, or albums
2. Results appear in real-time as you type
3. Click the play button on any track to start the preview

### Playing Music
- Click the play/pause button on track cards to control playback
- Use the now-playing bar at the bottom for transport controls
- Drag the progress bar to seek to different parts of the track

### Discovering Music
- Browse trending tracks on the homepage
- Explore different genres and artists through search
- Each track shows artist, album, and duration information

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SearchBar.tsx   # Music search interface
│   ├── TrackCard.tsx   # Individual track display
│   ├── TrackList.tsx   # Collection of tracks
│   └── NowPlaying.tsx  # Bottom player controls
├── hooks/              # Custom React hooks
│   └── useAudio.ts     # Audio playback management
├── services/           # API and external services
│   └── deezer.ts       # Deezer API integration
├── types/              # TypeScript type definitions
│   └── music.ts        # Music-related interfaces
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🔧 API Integration

Maliou Sound Wave uses the Deezer Web API to fetch music data:

- **Search Endpoint**: `/search?q={query}` - Search for tracks
- **Chart Endpoint**: `/chart/0/tracks` - Get trending tracks
- **CORS Handling**: Uses AllOrigins proxy for cross-origin requests

### API Features Used
- Track metadata (title, artist, album, duration)
- Album artwork in multiple resolutions
- 30-second audio previews
- Artist information and images

## 🎨 Design Philosophy

Maliou Sound Wave follows modern design principles:

- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Dark Theme**: Easy on the eyes for extended listening sessions
- **Gradient Accents**: Purple-to-pink gradients for visual interest
- **Smooth Animations**: Hover effects and transitions for interaction feedback
- **Typography**: Inter font for excellent readability
- **Accessibility**: High contrast ratios and keyboard navigation

## 📱 Responsive Design

The app is fully responsive with breakpoints for:
- **Mobile**: < 768px (touch-optimized controls)
- **Tablet**: 768px - 1024px (balanced layout)
- **Desktop**: > 1024px (full feature set)

## 🚀 Performance Optimizations

- **Lazy Loading**: Images load on demand
- **Debounced Search**: Reduces API calls during typing
- **Efficient Re-renders**: Optimized React component updates
- **Compressed Assets**: Optimized images and fonts

## 📈 Future Enhancements

- **Playlists**: Create and manage custom playlists
- **User Accounts**: Save favorite tracks and preferences
- **Social Features**: Share tracks with friends
- **Offline Mode**: Cache popular tracks for offline listening
- **Advanced Search**: Filter by genre, year, duration
- **Lyrics Integration**: Display synchronized lyrics
- **Radio Mode**: Continuous playback of similar tracks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Deezer** for providing the comprehensive music API
- **Lucide** for beautiful, consistent icons
- **Tailwind CSS** for rapid UI development
- **React Team** for the excellent framework

## 📞 Support

If you encounter any issues or have questions:


1. Create a new issue with detailed information
2. Contact the maintainers

---

**Built with ❤️ and 🎵 by Maliou Marwen
