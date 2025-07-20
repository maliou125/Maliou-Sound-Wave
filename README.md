# 🎵 Maliou Sound Wave - Application de Découverte Musicale

Une belle application moderne de découverte musicale construite avec React.js et l'API Deezer. Maliou Sound Wave permet aux utilisateurs de rechercher de la musique, découvrir les tendances et écouter des aperçus de 30 secondes avec une interface élégante et professionnelle.

## ✨ Fonctionnalités

- **🔍 Recherche Musicale Intelligente** : Recherche en temps réel parmi des millions de pistes, artistes et albums
- **🎧 Aperçus Audio** : Lecture d'extraits de 30 secondes directement dans le navigateur
- **🔥 Pistes Tendances** : Découvrez ce qui est populaire avec de la musique tendance
- **📱 Design Responsive** : Expérience magnifique sur tous les appareils
- **🎨 Interface Moderne** : Thème sombre avec effets glassmorphism et animations fluides
- **⚡ Performance Rapide** : Optimisé pour la vitesse avec des appels API efficaces

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le repository** :
```bash
git clone https://github.com/votre-nom/maliou-sound-wave.git
cd maliou-sound-wave
```

2. **Installer les dépendances** :
```bash
npm install
```

3. **Démarrer le serveur de développement** :
```bash
npm run dev
```

4. **Ouvrir dans le navigateur** :
   - L'application sera disponible sur `http://localhost:5173`

### Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Construit l'application pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 🛠️ Stack Technique

- **Frontend** : React 18, JavaScript (JSX)
- **Outil de Build** : Vite
- **Styling** : Tailwind CSS
- **API** : API Web Deezer
- **Icônes** : Lucide React
- **Police** : Inter (Google Fonts)

## 📁 Structure du Projet

```
src/
├── components/              # Composants UI réutilisables
│   ├── SearchBar.jsx       # Interface de recherche musicale
│   ├── TrackCard.jsx       # Affichage de piste individuelle
│   ├── TrackList.jsx       # Collection de pistes
│   ├── NowPlaying.jsx      # Contrôles du lecteur en bas
│   └── Navbar.jsx          # Barre de navigation
├── context/                # Contexte React global
│   └── StoreContext.jsx    # Gestion d'état globale
├── hooks/                  # Hooks React personnalisés
│   └── useAudio.js         # Gestion de la lecture audio
├── services/               # Services API et externes
│   └── deezer.js           # Intégration API Deezer
├── App.jsx                 # Composant principal de l'application
├── index.jsx               # Point d'entrée de l'application
└── index.css               # Styles globaux
```

## 🎯 Utilisation

### Recherche de Musique
1. Utilisez la barre de recherche en haut pour trouver des chansons, artistes ou albums
2. Les résultats apparaissent en temps réel pendant que vous tapez
3. Cliquez sur le bouton lecture sur n'importe quelle piste pour démarrer l'aperçu

### Lecture de Musique
- Cliquez sur le bouton lecture/pause sur les cartes de piste pour contrôler la lecture
- Utilisez la barre de lecture en bas pour les contrôles de transport
- Faites glisser la barre de progression pour naviguer dans différentes parties de la piste

### Découverte de Musique
- Parcourez les pistes tendances sur la page d'accueil
- Explorez différents genres et artistes via la recherche
- Chaque piste affiche les informations d'artiste, album et durée

## 🔧 Contexte Global (StoreContext)

L'application utilise React Context pour la gestion d'état globale :

```jsx
import { useStore } from './context/StoreContext';

function MonComposant() {
  const { url, currentTrack, isPlaying } = useStore();
  
  return (
    <div>
      <p>API URL: {url}</p>
      <p>Piste actuelle: {currentTrack?.title}</p>
    </div>
  );
}
```

### Variables disponibles dans le contexte :
- `url` : URL de l'API Deezer
- `currentTrack` : Piste actuellement sélectionnée
- `isPlaying` : État de lecture
- `searchQuery` : Requête de recherche actuelle

## 🎨 Philosophie de Design

Maliou Sound Wave suit les principes de design modernes :

- **Glassmorphism** : Éléments semi-transparents avec flou d'arrière-plan
- **Thème Sombre** : Facile pour les yeux lors de sessions d'écoute prolongées
- **Accents Dégradés** : Dégradés violet-rose pour l'intérêt visuel
- **Animations Fluides** : Effets de survol et transitions pour le feedback d'interaction
- **Typographie** : Police Inter pour une excellente lisibilité
- **Accessibilité** : Ratios de contraste élevés et navigation au clavier

## 📱 Design Responsive

L'application est entièrement responsive avec des points de rupture pour :
- **Mobile** : < 768px (contrôles optimisés pour le tactile)
- **Tablette** : 768px - 1024px (mise en page équilibrée)
- **Desktop** : > 1024px (ensemble complet de fonctionnalités)

## 🔮 Améliorations Futures

- **Playlists** : Créer et gérer des playlists personnalisées
- **Comptes Utilisateur** : Sauvegarder les pistes favorites et préférences
- **Fonctionnalités Sociales** : Partager des pistes avec des amis
- **Mode Hors Ligne** : Mettre en cache les pistes populaires pour l'écoute hors ligne
- **Recherche Avancée** : Filtrer par genre, année, durée
- **Intégration Paroles** : Afficher les paroles synchronisées

## 🤝 Contribution

1. Forkez le repository
2. Créez une branche de fonctionnalité (`git checkout -b feature/fonctionnalite-incroyable`)
3. Commitez vos changements (`git commit -m 'Ajouter une fonctionnalité incroyable'`)
4. Poussez vers la branche (`git push origin feature/fonctionnalite-incroyable`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails.

## 🙏 Remerciements

- **Deezer** pour fournir l'API musicale complète
- **Lucide** pour les icônes belles et cohérentes
- **Tailwind CSS** pour le développement UI rapide
- **Équipe React** pour l'excellent framework

---

**Construit avec ❤️ et 🎵 par Maliou Marwen**