// 1. Initialize Leaflet Map over Tsim Sha Tsui, Hong Kong
const map = L.map('map').setView([22.2990, 114.1724], 17);

// 2. Load Free OpenStreetMap Style Tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Updated Dataset: Tier and Size are now totally separate!
const restaurants = [
    {
        name: '壽司郎',
        location: '佐敦店',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.304921809859376, 114.17138672277119],
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '壽司郎',
        location: '南昌店',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.32573569302258, 114.1550352796978],
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '牛角',
        location: '南昌店',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.327042519418743, 114.15413709529979],
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '牛角Buffet',
        location: '裕民坊',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.31424600075877, 114.2239906168497],
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '牛品台式火鍋',
        location: '銅鑼灣店',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.27890415887033, 114.18175850713389],
        url: 'https://example.com/tamjai'
    },
    {
        name: '麵尊',
        location: '登龍街',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.279126674690243, 114.18167531489904],
        url: 'https://example.com/fairwood'
    }
    {
        name: '黃金冰室',
        location: '成業街',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.31062076163059, 114.22644466732764],
        url: 'https://example.com/fairwood'
    }
];

// 4. Standalone Color Evaluator Function (Handles Tiers)
function getMarkerColor(tier) {
    switch(tier) {
        case 'S Tier': return '#8ad6ff'; // Blue
        case 'A Tier': return '#48f595'; // Green
        case 'B Tier': return '#fcf062'; // Yellow
        case 'D Tier': return '#ff3b3b'; // Bright Red
        default:       return '#b5b5b5'; // Grey fallback
    }
}

// 5. Standalone Size Evaluator Function (Completely Independent of Tier)
function getMarkerRadius(sizeRating) {
    switch(sizeRating) {
        case 3:  return 22; // Large Circle
        case 2:  return 15; // Medium Circle
        case 1:  return 9;  // Small Circle
        default: return 12; // Standard fallback
    }
}

// 6. Loop through your data to plot points on the street view map grid
restaurants.forEach(place => {
    
    // Apply separate design logic profiles 
    const markerStyles = {
        radius: getMarkerRadius(place.sizeRating), // Isolated Size Logic
        fillColor: getMarkerColor(place.tier),     // Isolated Color Logic
        color: '#474747',
        weight: 1.5,
        fillOpacity: 0.85
    };

    // Plot circle marker structure instance
    const circleMarker = L.circleMarker(place.coords, markerStyles).addTo(map);

    // Build the popup message container interface elements
    const popupHtml = `
        <div>
            <h3>${place.name}</h3>
            <p>${place.location} &nbsp;•&nbsp; <strong style="color: ${getMarkerColor(place.tier)}; text-shadow: 0.5px 0.5px 0 #000;">${place.tier}</strong></p>
            <a href="${place.url}" target="_blank">More info</a>
        </div>
    `;

    circleMarker.bindPopup(popupHtml);

    // Attach static map display text descriptions layout metrics
    circleMarker.bindTooltip(place.name, {
        permanent: true,
        direction: 'bottom',
        offset: [0, markerStyles.radius], // Adapts text label gap automatically to circle boundary
        className: 'custom-label'
    }).openTooltip();
});
