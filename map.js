// 1. Initialize Leaflet Map over Tsim Sha Tsui, Hong Kong
const map = L.map('map').setView([22.2990, 114.1724], 16);

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
        name: '牛角日本燒肉專門店',
        location: 'V Walk',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.327042519418743, 114.15413709529979],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E8%A7%92%E6%97%A5%E6%9C%AC%E7%87%92%E8%82%89%E5%B0%88%E9%96%80%E5%BA%97-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%83%A4%E8%82%89-r632091'
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
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%88%8C%E4%B8%BC-%E8%A7%80%E5%A1%98-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%87%92%E7%83%A4-r791232'
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
        url: 'https://www.openrice.com/zh/hongkong/r-hygge-%E5%B0%87%E8%BB%8D%E6%BE%B3-%E8%A5%BF%E5%BC%8F-r743338'
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
    },
    {
        name: '漁場台風',
        location: '快富街',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.32062264618523, 114.1712610245689],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%BC%81%E5%A0%B4%E5%8F%B0%E9%A2%A8-%E6%97%BA%E8%A7%92-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r445841'
    },
    {
        name: 'Popeyes',
        location: 'T.O.P',
        tier: 'A Tier',
        sizeRating: 3,
        coords: [22.32049144950444, 114.16960543080324],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A7%E5%8A%9B%E6%B0%B4%E6%89%8B%E7%82%B8%E9%9B%9E-%E6%97%BA%E8%A7%92-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%B8%85%E7%9C%9F%E8%AA%8D%E8%AD%89%E9%A3%9F%E5%93%81-r577935'
    },
    {
        name: '古早台居',
        location: 'T.O.P',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.320506957263824, 114.1693325160395],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%8F%A4%E6%97%A9%E5%8F%B0%E5%B1%85-%E6%97%BA%E8%A7%92-%E5%8F%B0%E7%81%A3%E8%8F%9C-r706958'
    },
    {
        name: 'Sukiya',
        location: '譽發廣場',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.305117997726104, 114.17167067503313],
        url: 'https://www.openrice.com/zh/hongkong/r-sukiya-%E3%81%99%E3%81%8D%E5%AE%B6-%E6%B2%B9%E9%BA%BB%E5%9C%B0-%E6%97%A5%E6%9C%AC%E8%8F%9C-r665937'
    },
    {
        name: 'Saizeriya',
        location: '莊士倫敦廣場',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.30345071978486, 114.17153991745259],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%96%A9%E8%8E%89%E4%BA%9E%E6%84%8F%E5%BC%8F%E9%A4%90%E5%BB%B3-%E4%BD%90%E6%95%A6-%E6%84%8F%E5%A4%A7%E5%88%A9%E8%8F%9C-%E8%96%84%E9%A4%85-r716361'
    },
    {
        name: '漢和韓國料理',
        location: '胡社生行',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.318531524317265, 114.16926001048502],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%BC%A2%E5%92%8C%E9%9F%93%E5%9C%8B%E6%96%99%E7%90%86-%E6%97%BA%E8%A7%92-%E9%9F%93%E5%9C%8B%E8%8F%9C-%E4%BB%BB%E9%A3%9F-%E6%94%BE%E9%A1%8C-r41552'
    },
    {
        name: 'Goobne Chicken',
        location: 'V Point',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.27919087503562, 114.18157875314895],
        url: 'https://www.openrice.com/zh/hongkong/r-goobne-chicken-%E9%8A%85%E9%91%BC%E7%81%A3-%E9%9F%93%E5%9C%8B%E8%8F%9C-%E9%9F%93%E5%BC%8F%E7%82%B8%E9%9B%9E-r503026'
    },
    {
        name: '牛駅麻辣火鍋放題',
        location: '愛賓商業大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.29957458523824, 114.17267640642169],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E9%A7%85%E9%BA%BB%E8%BE%A3%E7%81%AB%E9%8D%8B%E6%94%BE%E9%A1%8C-%E5%B0%96%E6%B2%99%E5%92%80-%E5%8F%B0%E7%81%A3%E8%8F%9C-%E7%81%AB%E9%8D%8B-r740026'
    },
    {
        name: '田記魚蛋牛腩專門店',
        location: '碧街',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.313896954991222, 114.17001298126411],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%94%B0%E8%A8%98%E9%AD%9A%E8%9B%8B%E7%89%9B%E8%85%A9%E5%B0%88%E9%96%80%E5%BA%97-%E6%B2%B9%E9%BA%BB%E5%9C%B0-%E6%B8%AF%E5%BC%8F-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r559494'
    },
    {
        name: '大壹燒鵝',
        location: '啟田大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.315137728188397, 114.23395950332949],
        url: 'https://example.com/chubby-bento'
    },
    {
        name: '文記車仔麵',
        location: '福榮街',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.33193211714304, 114.16276138352563],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%96%87%E8%A8%98%E8%BB%8A%E4%BB%94%E9%BA%B5-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%B8%AF%E5%BC%8F-%E8%BB%8A%E4%BB%94%E9%BA%B5-r55580'
    },
    {
        name: '台食館',
        location: '福榮街',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.331682616315085, 114.16339504470467],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%8F%B0%E9%A3%9F%E9%A4%A8-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E5%8F%B0%E7%81%A3%E8%8F%9C-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r700223'
    },
    {
        name: '韓燒大叔',
        location: '友誠商業中心',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.318743930625686, 114.17002388198613],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%9F%93%E7%87%92%E5%A4%A7%E5%8F%94-%E6%97%BA%E8%A7%92-%E9%9F%93%E5%9C%8B%E8%8F%9C-%E4%BB%BB%E9%A3%9F-%E6%94%BE%E9%A1%8C-r796729'
    },
    {
        name: '山見',
        location: 'APM',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.312302086323683, 114.225498895478],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%B1%B1%E8%A6%8B-%E8%A7%80%E5%A1%98-%E5%8F%B0%E7%81%A3%E8%8F%9C-%E7%81%AB%E9%8D%8B-r805270'
    },
    {
        name: '極尚大喜屋',
        location: '銅鑼灣廣場一期',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.28034683010983, 114.18272269547717],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%A5%B5%E5%B0%9A%E5%A4%A7%E5%96%9C%E5%B1%8B-%E9%8A%85%E9%91%BC%E7%81%A3-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E4%BB%BB%E9%A3%9F-%E6%94%BE%E9%A1%8C-r541150'
    },
    {
        name: '牛陣',
        location: '銅鑼灣廣場一期',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.280465923306878, 114.18277633940944],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E9%99%A3-%E9%8A%85%E9%91%BC%E7%81%A3-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E4%BB%BB%E9%A3%9F-%E6%94%BE%E9%A1%8C-r48867'
    },
    {
        name: '牛大人台灣火鍋吃到飽',
        location: '加拿芬廣場',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.29936245092929, 114.17328838534009],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E5%A4%A7%E4%BA%BA%E5%8F%B0%E7%81%A3%E7%81%AB%E9%8D%8B%E5%90%83%E5%88%B0%E9%A3%BD-%E5%B0%96%E6%B2%99%E5%92%80-%E5%8F%B0%E7%81%A3%E8%8F%9C-%E4%BB%BB%E9%A3%9F-%E6%94%BE%E9%A1%8C-r678976'
    },
    {
        name: '牛大人台灣火鍋吃到飽',
        location: '銅鑼灣廣場二期',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.280754824441125, 114.18219996849281],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E5%A4%A7%E4%BA%BA%E5%8F%B0%E7%81%A3%E7%81%AB%E9%8D%8B%E5%90%83%E5%88%B0%E9%A3%BD-%E9%8A%85%E9%91%BC%E7%81%A3-%E5%8F%B0%E7%81%A3%E8%8F%9C-%E4%BB%BB%E9%A3%9F-%E6%94%BE%E9%A1%8C-r667443'
    },
    {
        name: '牛之鍋',
        location: '冠景樓',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.278892598624548, 114.18101496849266],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E4%B9%8B%E9%8D%8B-%E9%8A%85%E9%91%BC%E7%81%A3-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E4%BB%BB%E9%A3%9F-%E6%94%BE%E9%A1%8C-r688339'
    },
    {
        name: '牛角日本燒肉專門店',
        location: '又一城',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.338264960876323, 114.17378485372218],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E8%A7%92%E6%97%A5%E6%9C%AC%E7%87%92%E8%82%89%E5%B0%88%E9%96%80%E5%BA%97-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%83%A4%E8%82%89-r549517'
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
