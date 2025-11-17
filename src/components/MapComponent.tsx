import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

// Restaurant location data - easy to add more locations in the future
const locations = [
  {
    id: 1,
    name: 'Fake Arab Shawarma Station',
    address: '21 Amado St, Rodriguez (Montalban), 1860 Rizal, Philippines',
    position: {
      lat: 14.717290569088517, // Burgos, Rodriguez coordinates
      lng: 121.13892158753127
    }
  }
  // Add more locations here as needed:
  // {
  //   id: 2,
  //   name: 'Fake Arab Shawarma Station - Branch 2',
  //   address: 'Address here',
  //   position: { lat: 0, lng: 0 }
  // }
];

// Dark/Night mode map styles
const darkMapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }]
  }
];

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '500px'
};

// Center on Burgos, Rodriguez (Montalban), Rizal
const center = {
  lat: 14.7367,
  lng: 121.1167
};

interface MapComponentProps {
  className?: string;
}

const MapComponent = ({ className = '' }: MapComponentProps) => {
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const openInGoogleMaps = (lat: number, lng: number, name: string) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  };

  // Error state
  if (loadError) {
    return (
      <div className={`flex items-center justify-center bg-secondary/10 rounded-3xl ${className}`} style={{ minHeight: '500px' }}>
        <div className="text-center p-8">
          <div className="text-red-500 text-xl font-bold mb-4">Failed to load Google Maps</div>
          <p className="text-muted-foreground">
            Please check your internet connection or API key configuration.
          </p>
        </div>
      </div>
    );
  }

  // Loading state
  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center bg-secondary/10 rounded-3xl ${className}`} style={{ minHeight: '500px' }}>
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl ${className}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: darkMapStyles,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        }}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
            onClick={() => setSelectedLocation(location)}
            animation={google.maps.Animation.DROP}
          />
        ))}

        {selectedLocation && (
          <InfoWindow
            position={selectedLocation.position}
            onCloseClick={() => setSelectedLocation(null)}
          >
            <div className="p-2 min-w-[200px]">
              <h3 className="font-bold text-lg text-secondary mb-2">
                {selectedLocation.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {selectedLocation.address}
              </p>
              <button
                onClick={() => openInGoogleMaps(
                  selectedLocation.position.lat,
                  selectedLocation.position.lng,
                  selectedLocation.name
                )}
                className="bg-primary text-secondary font-bold px-4 py-2 rounded-lg text-sm hover:bg-primary/90 transition-colors w-full"
              >
                Open in Google Maps
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
