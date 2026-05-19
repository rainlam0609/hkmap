// Supply your Mapbox access token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const map = new mapboxgl.Map({
    container: 'map', // matches the ID of the div in HTML
    style: 'mapbox://styles/mapbox/streets-v12', // standard street style
    center: [114.1694, 22.3193], // [Lng, Lat] centered right over Victoria Harbour
    zoom: 11 // A zoom level of 11 focuses nicely on Hong Kong Island, Kowloon, and New Territories
});

// Optional: Add basic zoom and rotation controls to the top-right of the map
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Optional: Add a marker at the center of Hong Kong
const marker = new mapboxgl.Marker({ color: '#ff0000' }) // Red marker
    .setLngLat([114.1694, 22.3193])
    .setPopup(new mapboxgl.Popup().setHTML('<h3>Welcome to Hong Kong!</h3>'))
    .addTo(map);