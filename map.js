// CRITICAL: Replace this string placeholder with your real Mapbox account token!
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

// Initialize the map frame focused directly over Kowloon / Tsim Sha Tsui area
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11', // Using the clean light grey background style
    center: [114.1724, 22.2990], // [Longitude, Latitude] center view
    zoom: 16 // Zoomed in tight to display close city restaurants clearly
});

// Add standard zoom and orientation interface layout controls
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Your restaurant locations data collection object (GeoJSON Format)
const restaurantsData = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [114.1732, 22.2985] // Location coordinates
            },
            'properties': {
                'name': '小胖台灣便當 Chubby Bento',
                'location': '加拿大分道',
                'tier': 'S Tier',
                'url': 'https://example.com/chubby-bento'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [114.1715, 22.2998]
            },
            'properties': {
                'name': '譚仔雲南米線 Tamjai Yunnan Mixian',
                'location': '尖沙咀店',
                'tier': 'A Tier',
                'url': 'https://example.com/tamjai'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [114.1740, 22.2975]
            },
            'properties': {
                'name': '壽司郎 Sushiro',
                'location': '加連威老道',
                'tier': 'S Tier',
                'url': 'https://example.com/sushiro'
            }
        }
        // Paste additional map coordinates elements right here following the comma formatting rule!
    ]
};

// Wait until the primary canvas layout template style engine has fully loaded before drawing
map.on('load', () => {
    
    // Inject the raw GeoJSON variable into the Mapbox source structure engine
    map.addSource('places-source', {
        'type': 'geojson',
        'data': restaurantsData
    });

    // Layer 1: Render the dynamic color circles based on the tier system properties
    map.addLayer({
        'id': 'places-circles',
        'type': 'circle',
        'source': 'places-source',
        'paint': {
            // Adjust circle diameter radius sizes matching specific key profile evaluations
            'circle-radius': [
                'match', ['get', 'tier'],
                'S Tier', 24,  // Big scale circle node
                'A Tier', 16,  // Mid scale circle node
                10             // Standard fallback default radius dimensions
            ],
            // Map specific hex color properties matching your reference screenshot style design
            'circle-color': [
                'match', ['get', 'tier'],
                'S Tier', '#8ad6ff', // Light Sky Blue color fill
                'A Tier', '#48f595', // Vivid Green color fill
                '#fcf062'            // Bright Amber-Yellow fallback color fill
            ],
            'circle-stroke-width': 1.5,
            'circle-stroke-color': '#474747',
            'circle-opacity': 0.75
        }
    });

    // Layer 2: Draw text descriptive labeling layouts statically beside the data nodes
    map.addLayer({
        'id': 'places-labels',
        'type': 'symbol',
        'source': 'places-source',
        'layout': {
            'text-field': ['get', 'name'], // Pulls restaurant name string text dynamically
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 1.8, // Distance boundary push text clear from node bounds
            'text-justify': 'auto',
            'text-size': 12
        },
        'paint': {
            'text-color': '#222222',
            'text-halo-color': '#ffffff', // Outer crisp rendering halo outline to stay readable
            'text-halo-width': 2
        }
    });
});

// Layer Click Event Listener Interface to trigger interactive popup elements
map.on('click', 'places-circles', (e) => {
    // Collect the primary node coordinates element points array
    const coordinates = e.features[0].geometry.coordinates.slice();
    
    // Pull the internal structural evaluation property keys
    const { name, location, tier, url } = e.features[0].properties;

    // Generate responsive nested HTML format content box architecture mirroring your view
    const popupHtml = `
        <div style="min-width: 180px;">
            <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: bold; color: #111;">${name}</h3>
            <p style="margin: 0 0 12px 0; font-size: 13px; color: #666;">
                ${location} &nbsp;•&nbsp; <span style="color: #333; font-weight: 600;">${tier}</span>
            </p>
            <a href="${url}" target="_blank" style="font-size: 13px; color: #0055ff; text-decoration: underline; font-weight: bold;">More info</a>
        </div>
    `;

    // Calculate rendering wrapping alignment offset metrics correctly
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Spawn the popup template node element anchor point location
    new mapboxgl.Popup({ offset: 10 })
        .setLngLat(coordinates)
        .setHTML(popupHtml)
        .addTo(map);
});

// UI cursor transformation handling properties upon layer element pointer entry
map.on('mouseenter', 'places-circles', () => {
    map.getCanvas().style.cursor = 'pointer';
});

// Reset visual indicator cursor setting upon boundary intersection leave
map.on('mouseleave', 'places-circles', () => {
    map.getCanvas().style.cursor = '';
});