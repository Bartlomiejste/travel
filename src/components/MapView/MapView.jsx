import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { MapViewContainer, MapViewTitle, MarkerImg } from "../../ui/MapView/MapView.styled";
import Img from '../../assets/mapView/markerMap.png';

const MapView = () => {

  const places = [
    { lat: -6.16, lng: 39.20, name: "Zanzibar" },
    { lat: 18.73, lng: -70.16, name: "Dominikana" },
    { lat: -14.23, lng: -51.92, name: "Brazylia" },
    { lat: 3.20, lng: 73.22, name: "Malediwy" },
    { lat: 15.87, lng: 100.99, name: "Tajlandia" },
    { lat: 35.24, lng: 24.80, name: "Kreta" },
 ];
  
 const lng = 0;
 const lat = 0;
  
  return (
    <MapViewContainer>
      <MapViewTitle>Mapa wyjazdów naszych klientów</MapViewTitle>
      <Map
      class="mapContainerClass"
        mapboxAccessToken="pk.eyJ1IjoiemVicmFhYSIsImEiOiJjbHFhMjEyNGsxbTdnMmxudnk1bHp4NHRnIn0.eMEasNYxewpWGNlKz3S54w"
        style={{
          width: "1000px",
          height: "700px",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
    {places.map((place, index) => (
    <Marker key={index} latitude={place.lat} longitude={place.lng}>
         <MarkerImg src={Img} alt="Marker" title={place.name}/>
    </Marker>
    ))}
        <NavigationControl position="bottom-right" />
        <FullscreenControl />
        <GeolocateControl />
      </Map>
    </MapViewContainer>
  );
}

export default MapView;