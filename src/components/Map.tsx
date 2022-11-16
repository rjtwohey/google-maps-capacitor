import { IonButton } from '@ionic/react';
import './ExploreContainer.css';
import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';



interface MapProps { }

const Map: React.FC<MapProps> = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    if (process.env.REACT_APP_YOUR_API_KEY_HERE) {
      const newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: mapRef.current,
        apiKey: process.env.REACT_APP_YOUR_API_KEY_HERE!,
        config: {
          center: {
            lat: 43.07423923811246,
            lng: -89.3809923212564
          },
          zoom: 8
        }
      })
    }
  }


  return (
      <div className="component-wrapper">
        <capacitor-google-map ref={mapRef} style={{
          display: 'inline-block',
          width: 750,
          height: 600
        }}></capacitor-google-map>

        <button onClick={createMap}>Create Map</button>
      </div>
  );
};

export default Map;
