import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Restaurant locations - easy to add more
const locations = [
  {
    id: 1,
    name: 'Fake Arab Shawarma Station',
    address: '21 Amado St, Rodriguez (Montalban), 1860 Rizal, Philippines',
    position: {
      lat: 14.717290569088517,
      lng: 121.13892158753127
    }
  }
];

// Center coordinates
const center: [number, number] = [14.717290569088517, 121.13892158753127];

interface MapComponentFreeProps {
  className?: string;
}

const MapComponentFree = ({ className = '' }: MapComponentFreeProps) => {
  const openInGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl ${className}`} style={{ minHeight: '500px' }}>
      <MapContainer
        center={center}
        zoom={16}
        style={{ height: '100%', width: '100%', minHeight: '500px' }}
        scrollWheelZoom={true}
      >
        {/* Dark theme tile layer - CartoDB Dark Matter */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {locations.map((location) => (
          <Marker key={location.id} position={[location.position.lat, location.position.lng]}>
            <Popup>
              <div className="p-1 min-w-[200px]">
                <h3 className="font-bold text-base text-secondary mb-2">
                  {location.name}
                </h3>
                <p className="text-xs text-gray-600 mb-3">
                  {location.address}
                </p>
                <button
                  onClick={() => openInGoogleMaps(location.position.lat, location.position.lng)}
                  className="bg-yellow-500 text-black font-bold px-3 py-2 rounded-lg text-xs hover:bg-yellow-400 transition-colors w-full"
                >
                  Open in Google Maps
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponentFree;
