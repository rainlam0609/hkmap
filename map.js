// 1. Initialize Leaflet Map over Tsim Sha Tsui, Hong Kong
// Coordinates format: [Latitude, Longitude]
const map = L.map('map').setView([22.2990, 114.1724], 17);

// 2. Load Free OpenStreetMap Style Tiles (No Account/Token Required)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Your Restaurant Dataset Array
const restaurants = [
    {
        name: '小胖台灣便當 Chubby Bento',
        location: '加拿大分道',
        tier: 'S Tier',
        coords: [22.2985, 114.1732], // [Lat, Lng]
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '譚仔雲南米線 Tamjai Mixian',
        location: '尖沙咀店',
        tier: 'A Tier',
        coords: [22.2998, 114.1715],
        url: 'https://example.com/tamjai'
    },
    {
        name: '壽司郎 Sushiro',
        location: '加連威老道',
        tier: 'S Tier',
        coords: [22.2975, 114.1740],
        url: 'https://example.com/sushiro'
    }
    // You can copy and paste more restaurants here easily!
];

// 4. Function to determine circle sizing and coloring based on your tier list rules
function getMarkerOptions(tier) {
    if (tier === 'S Tier') {
        return {
            radius: 16,            // Size of circle
            fillColor: '#8ad6ff',  // Light Blue from your screenshot
            color: '#474747',      // Border color
            weight: 1.5,
            fillOpacity: 0.8
        };
    } else if (tier === 'A Tier') {
        return {
            radius: 12,
            fillColor: '#48f595',  // Green from your screenshot
            color: '#474747',
            weight: 1.5,
            fillOpacity: 0.8
        };
    } else {
        return {
            radius: 9,
            fillColor: '#fcf062',  // Yellow fallback
            color: '#474747',
            weight: 1.5,
            fillOpacity: 0.8
        };
    }
}

// 5. Loop through your dataset to plot points and attach interactive popup modules
restaurants.forEach(place => {
    
    // Create custom styled circle markers
    const circleMarker = L.circleMarker(place.coords, getMarkerOptions(place.tier)).addTo(map);

    // Build the dynamic interactive HTML pop-up window component template
    const popupHtml = `
        <div>
            <h3>${place.name}</h3>
            <p>${place.location} &nbsp;•&nbsp; <strong>${place.tier}</strong></p>
            <a href="${place.url}" target="_blank">More info</a>
        </div>
    `;

    // Attach popup action to circle clicks
    circleMarker.bindPopup(popupHtml);

    // Optional text string hovering label overlay implementation
    circleMarker.bindTooltip(place.name, {
        permanent: true,       // Makes text label permanently visible on screen like your reference photo
        direction: 'bottom',   // Places label text layout beneath the circle node bounds
        offset: [0, 10],       // Slight positional spacing adjustment
        className: 'custom-label' // Target class identifier hook
    }).openTooltip();
});