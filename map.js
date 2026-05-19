// 1. Initialize Leaflet Map over Tsim Sha Tsui, Hong Kong
const map = L.map('map').setView([22.2990, 114.1724], 12);

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
        name: '壽司郎',
        location: '觀塘店',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.3107355291976, 114.22539373488918],
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '壽司郎',
        location: '旺角店',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.31775827710611, 114.16991916666875],
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '壽司郎',
        location: '尖沙咀店',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.299419627450252, 114.17258723440538],
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
    },
    {
        name: '黃金冰室',
        location: '成業街',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.31062076163059, 114.22644466732764],
        url: 'https://example.com/fairwood'
    },
    {
        name: '金飯館',
        location: '牛頭角道',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.315211785246543, 114.2221581819858],
        url: 'https://example.com/fairwood'
    },
    {
        name: '舌丼',
        location: '駱駝漆大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.310156258577994, 114.22491725989589],
        url: 'https://example.com/fairwood'
    },
    {
        name: '牛霸王',
        location: '成業工業大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.310243713785088, 114.227068695478],
        url: 'https://example.com/fairwood'
    },
    {
        name: 'Hygge',
        location: '海天晉滙',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.30418122070105, 114.2603938980381],
        url: 'https://example.com/fairwood'
    },
    {
        name: '紅蔥頭',
        location: '西九龍中心',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.331018984464382, 114.15956485989649],
        url: 'https://example.com/fairwood'
    },
    {
        name: '在蘭州',
        location: '西九龍中心',
        tier: 'A Tier',
        sizeRating: 2,
        coords: [22.33118675830544, 114.15993402879299],
        url: 'https://example.com/fairwood'
    },
    {
        name: '一蘭',
        location: '駱克大廈',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.2813263711094, 114.18152071414741],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A9%E7%84%B6%E8%B1%9A%E9%AA%A8%E6%8B%89%E9%BA%B5%E5%B0%88%E9%96%80%E5%BA%97%E4%B8%80%E8%98%AD-%E9%8A%85%E9%91%BC%E7%81%A3-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r140523'
    },
    {
        name: '大門拉麵',
        location: '屯門市廣場1期',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.33118675830544, 114.15993402879299],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A7%E9%96%80%E6%8B%89%E9%BA%B5-%E5%B1%AF%E9%96%80-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r474534'
    },
    {
        name: '麵屋丸京',
        location: '荔枝角道',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.32859239605463, 114.16026525199025],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%B5%E5%B1%8B%E4%B8%B8%E4%BA%AC-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r686553'
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
