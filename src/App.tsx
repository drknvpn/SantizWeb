import StarField from './components/StarField';
import VHSOverlay from './components/VHSOverlay';
import ArtistPage from './components/ArtistPage';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <StarField />
      <VHSOverlay />
      <ArtistPage />
    </div>
  );
}
