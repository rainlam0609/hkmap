// 1. Initialize Leaflet Map over Tsim Sha Tsui, Hong Kong
const map = L.map('map').setView([22.2990, 114.1724], 13);

// 2. Load Free OpenStreetMap Style Tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Updated Dataset: Tier and Size are now totally separate!
const restaurants = [
    {
        name: '壽司郎',
        location: '佐敦薈',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.304921809859376, 114.17138672277119],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E4%BD%90%E6%95%A6-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r735171'
    },
    {
        name: '壽司郎',
        location: 'V Walk',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.32573569302258, 114.1550352796978],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r853548'
    },
    {
        name: '壽司郎',
        location: '源成中心',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.3107355291976, 114.22539373488918],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E8%A7%80%E5%A1%98-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r875940'
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
        location: '愛賓商業大廈',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.299419627450252, 114.17258723440538],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E5%B0%96%E6%B2%99%E5%92%80-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r790808'
    },
    {
        name: '壽司郎',
        location: '樂富廣場A區',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.339865109251043, 114.18736833038608],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E6%A8%82%E5%AF%8C-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r678463'
    },
    {
        name: '壽司郎',
        location: '天地時尚坊(第二期)',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.305410465609306, 114.18995828444899],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E7%B4%85%E7%A3%A1-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r1113938'
    },
    {
        name: '壽司郎',
        location: '天地享膳坊(第4期)',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.303916939343875, 114.18846666806746],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E7%B4%85%E7%A3%A1-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r649929'
    },
    {
        name: '壽司郎',
        location: '啟田商場',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.30882963140762, 114.23485511113519],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%BD%E5%8F%B8%E9%83%8E-%E8%97%8D%E7%94%B0-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r684828'
    },
    {
        name: '元気寿司',
        location: 'V Walk',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.327951961257792, 114.15242012589741],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%85%83%E6%B0%97%E5%AF%BF%E5%8F%B8-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r852249'
    },
    {
        name: '元気寿司',
        location: '東薈城名店倉',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.29005251387071, 113.94040289547746],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%85%83%E6%B0%97%E5%AF%BF%E5%8F%B8-%E6%9D%B1%E6%B6%8C-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r644669'
    },
    {
        name: '爭鮮外帶壽司',
        location: '港鐵太子站',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.325040039291647, 114.16830550878854],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%88%AD%E9%AE%AE%E5%A4%96%E5%B8%B6%E5%A3%BD%E5%8F%B8-%E5%A4%AA%E5%AD%90-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r51255'
    },
    {
        name: '爭鮮外帶壽司',
        location: '南昌戲院大廈',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.334110868304876, 114.16752398012538],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%88%AD%E9%AE%AE%E5%A4%96%E5%B8%B6%E5%A3%BD%E5%8F%B8-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r821255'
    },
    {
        name: '爭鮮外帶壽司',
        location: '開源道',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.31123218587477, 114.22600827541508],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%88%AD%E9%AE%AE%E5%A4%96%E5%B8%B6%E5%A3%BD%E5%8F%B8-%E8%A7%80%E5%A1%98-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r174154'
    },
    {
        name: '爭鮮外帶壽司',
        location: '彌敦道',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.3120016265903, 114.17114445738297],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%88%AD%E9%AE%AE%E5%A4%96%E5%B8%B6%E5%A3%BD%E5%8F%B8-%E6%B2%B9%E9%BA%BB%E5%9C%B0-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E5%A3%BD%E5%8F%B8-%E5%88%BA%E8%BA%AB-r486448'
    },
    {
        name: 'McDonald‘s',
        location: '海富中心',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.279271795263227, 114.16502192717638],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E9%87%91%E9%90%98-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r486343'
    },
    {
        name: 'McDonald’s',
        location: '又一城',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.33661575264774, 114.17549238028681],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r685660'
    },
    {
        name: 'McDonald’s',
        location: '海達邨三期平台',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.329334542085917, 114.15170761601867],
    },
    {
        name: 'McDonald’s',
        location: '欽州街',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.332113865999773, 114.16145251082226],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r2244'
    },
    {
        name: 'McDonald’s',
        location: '鴨寮街',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.330047552225466, 114.16262894862682],
    },
    {
        name: 'McDonald’s',
        location: '萬盛閣',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.32587928944367, 114.16442066423001],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r2243'
    },
    {
        name: 'McDonald’s',
        location: '大同新村',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.321640133338807, 114.16166564491859],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E5%A4%A7%E8%A7%92%E5%92%80-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r4135'
    },
    {
        name: 'McDonald’s',
        location: '仁寶大廈',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.331409858760843, 114.1700891367917],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r81823'
    },
    {
        name: 'McDonald’s',
        location: 'The Wave',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.309697851753967, 114.22464039743558],
    },
    {
        name: 'McDonald’s',
        location: '顯徑商場',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.363777223952063, 114.1721245859204],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E5%A4%A7%E5%9C%8D-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r37846'
    },
    {
        name: 'McDonald’s',
        location: '寶漢大廈',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.280665216453027, 114.1825284976602],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E9%8A%85%E9%91%BC%E7%81%A3-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r747866'
    },
    {
        name: 'McDonald’s',
        location: '牛頭角道',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.31501955092096, 114.22233150660617],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E7%89%9B%E9%A0%AD%E8%A7%92-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r48575'
    },
    {
        name: 'McDonald’s',
        location: 'D‘Deck',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.296611931603735, 114.01689998933371],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E6%84%89%E6%99%AF%E7%81%A3-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r2246'
    },
    {
        name: 'McDonald’s',
        location: '東薈城名店倉',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.289955118702753, 113.94061221817283],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E6%9D%B1%E6%B6%8C-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r35250'
    },
    {
        name: 'McDonald’s',
        location: '機場一號客運大樓',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.314895444606346, 113.93483782909603],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E8%B5%A4%E9%B1%B2%E8%A7%92-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r572791'
    },
    {
        name: 'McDonald’s',
        location: '裕民坊YM²',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.314187525049572, 114.22942743705238],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E8%A7%80%E5%A1%98-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r820124'
    },
    {
        name: 'McDonald’s',
        location: '屯門市廣場二期',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.394255928203826, 113.97636227936077],
    },
    {
        name: 'McDonald’s',
        location: '九龍公園',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.301754673897467, 114.16996735336733],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%A5%E7%95%B6%E5%8B%9E-%E5%B0%96%E6%B2%99%E5%92%80-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r2171'
    },
    {
        name: '麥當勞小食亭',
        location: '九龍公園',
        tier: 'A Tier',
        sizeRating: 3,
        coords: [22.300082082547842, 114.17027580741077],
    },
    {
        name: 'KFC',
        location: '港灣豪庭廣場',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.324612060051294, 114.16167589467157],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%AE%B6%E9%84%89%E9%9B%9E-kfc-%E5%A4%A7%E8%A7%92%E5%92%80-%E7%BE%8E%E5%9C%8B%E8%8F%9C-r606043'
    },
    {
        name: 'KFC',
        location: '又一城',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.33820755849869, 114.17445301275482],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%AE%B6%E9%84%89%E9%9B%9E-kfc-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E7%BE%8E%E5%9C%8B%E8%8F%9C-r681459'
    },
    {
        name: 'KFC',
        location: '逸東商場',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.281373246977676, 113.93517439857908],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%AE%B6%E9%84%89%E9%9B%9E-kfc-%E6%9D%B1%E6%B6%8C-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%B8%85%E7%9C%9F%E8%AA%8D%E8%AD%89%E9%A3%9F%E5%93%81-r104188'
    },
    {
        name: '大快活',
        location: '港灣豪庭廣場',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.32428819061814, 114.16089450955772],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A7%E5%BF%AB%E6%B4%BB-%E5%A4%A7%E8%A7%92%E5%92%80-%E6%B8%AF%E5%BC%8F-r578625'
    },
    {
        name: '大快活',
        location: '遠東金融中心',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.280166238730953, 114.16404736602941],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A7%E5%BF%AB%E6%B4%BB-%E9%87%91%E9%90%98-%E6%B8%AF%E5%BC%8F-r5234'
    },
    {
        name: '大家樂',
        location: '富東廣場',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.289049363141274, 113.94252636491379],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A7%E5%AE%B6%E6%A8%82-%E6%9D%B1%E6%B6%8C-%E6%B8%AF%E5%BC%8F-%E7%84%A1%E8%82%89%E9%A4%90%E5%96%AE-r6532'
    },
    {
        name: '大家樂',
        location: 'V Walk',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.326515701878865, 114.15490318089338],
    },
    {
        name: '吉野家',
        location: '港灣豪庭廣場',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.32456469042345, 114.16070558612564],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%90%89%E9%87%8E%E5%AE%B6-%E5%A4%A7%E8%A7%92%E5%92%80-%E6%97%A5%E6%9C%AC%E8%8F%9C-r881562'
    },
    {
        name: '吉野家',
        location: '大昌大廈',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.283023061340376, 114.15768386509687],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%90%89%E9%87%8E%E5%AE%B6-%E4%B8%AD%E7%92%B0-%E6%97%A5%E6%9C%AC%E8%8F%9C-r14506'
    },
    {
        name: '吉野家',
        location: '屯門時代廣場南翼',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.392500483686103, 113.97614702166531],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%90%89%E9%87%8E%E5%AE%B6-%E5%B1%AF%E9%96%80-%E6%97%A5%E6%9C%AC%E8%8F%9C-r52220'
    },
    {
        name: 'Saizeriya',
        location: '港灣豪庭廣場',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.324921415264164, 114.16108607374287],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%96%A9%E8%8E%89%E4%BA%9E%E6%84%8F%E5%BC%8F%E9%A4%90%E5%BB%B3-%E5%A4%A7%E8%A7%92%E5%92%80-%E6%84%8F%E5%A4%A7%E5%88%A9%E8%8F%9C-%E8%96%84%E9%A4%85-r751450'
    },
    {
        name: 'Saizeriya',
        location: '莊士倫敦廣場',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.303444987434197, 114.17154265981641],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%96%A9%E8%8E%89%E4%BA%9E%E6%84%8F%E5%BC%8F%E9%A4%90%E5%BB%B3-%E4%BD%90%E6%95%A6-%E6%84%8F%E5%A4%A7%E5%88%A9%E8%8F%9C-%E8%96%84%E9%A4%85-r716361'
    },
    {
        name: 'Saizeriya',
        location: '長發廣場',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.362449795938474, 114.10328689037901],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%96%A9%E8%8E%89%E4%BA%9E%E6%84%8F%E5%BC%8F%E9%A4%90%E5%BB%B3-%E9%9D%92%E8%A1%A3-%E6%84%8F%E5%A4%A7%E5%88%A9%E8%8F%9C-%E8%96%84%E9%A4%85-r608841'
    },
    {
        name: 'Pizza Hut',
        location: '東堤灣畔',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.288413406513854, 113.94068098052539],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%BF%85%E5%8B%9D%E5%AE%A2-%E6%9D%B1%E6%B6%8C-%E6%84%8F%E5%A4%A7%E5%88%A9%E8%8F%9C-%E8%96%84%E9%A4%85-r21589'
    },
    {
        name: 'Pizza Hut',
        location: '港灣豪庭廣場',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.324767373683247, 114.16154644933282],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%BF%85%E5%8B%9D%E5%AE%A2-%E5%A4%A7%E8%A7%92%E5%92%80-%E6%84%8F%E5%A4%A7%E5%88%A9%E8%8F%9C-%E8%96%84%E9%A4%85-r578611'
    },
    {
        name: '燒肉LIKE',
        location: 'Mikiki',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.333675035845147, 114.19722836815211],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%87%92%E8%82%89like-%E6%96%B0%E8%92%B2%E5%B4%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%87%92%E7%83%A4-r872989'
    },
    {
        name: '燒肉LIKE',
        location: '黃大仙中心南館',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.34334383092665, 114.19514474987207],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%87%92%E8%82%89like-%E9%BB%83%E5%A4%A7%E4%BB%99-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%83%A4%E8%82%89-r802353'
    },
    {
        name: '燒肉LIKE',
        location: '奧海城二期',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.333675035845147, 114.19722836815211],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%87%92%E8%82%89like-%E5%A4%A7%E8%A7%92%E5%92%80-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%83%A4%E8%82%89-r790880'
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
        coords: [22.315054289661408, 114.2221263176192],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%87%91%E9%A3%AF%E9%A4%A8-%E7%89%9B%E9%A0%AD%E8%A7%92-%E6%B8%AF%E5%BC%8F-r721717'
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
        coords: [22.303999086563643, 114.26040376999742],
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
        name: '阿梁手撕雞',
        location: '寶靈街',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.304244371706936, 114.17048671339394],
    },
    {
        name: '楚撚記大排檔',
        location: '百悅坊',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.369211655133622, 114.11488148673101],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%A5%9A%E6%92%9A%E8%A8%98%E5%A4%A7%E6%8E%92%E6%AA%94-%E8%8D%83%E7%81%A3-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-r680361'
    },
    {
        name: '壹點甜粵點專門店',
        location: '馬頭圍道',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.314578979685045, 114.18729272431413],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A3%B9%E9%BB%9E%E7%94%9C%E7%B2%B5%E9%BB%9E%E5%B0%88%E9%96%80%E5%BA%97-%E5%9C%9F%E7%93%9C%E7%81%A3-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E9%BB%9E%E5%BF%83-r490755'
    },
    {
        name: '一蘭',
        location: '駱克大廈',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.28048221150417, 114.18136287031743],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A9%E7%84%B6%E8%B1%9A%E9%AA%A8%E6%8B%89%E9%BA%B5%E5%B0%88%E9%96%80%E5%BA%97%E4%B8%80%E8%98%AD-%E9%8A%85%E9%91%BC%E7%81%A3-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r140523'
    },
    {
        name: '大門拉麵',
        location: '屯門市廣場1期',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.392551179173235, 113.97793147893455],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A7%E9%96%80%E6%8B%89%E9%BA%B5-%E5%B1%AF%E9%96%80-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r474534'
    },
    {
        name: '麵屋丸京',
        location: '荔枝角道',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.328577199331107, 114.16026759892318],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BA%B5%E5%B1%8B%E4%B8%B8%E4%BA%AC-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r686553'
    },
    {
        name: '漁場台風',
        location: '快富街',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.320570506090437, 114.17125121126436],
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
        coords: [22.304706065649405, 114.17184837162105],
        url: 'https://www.openrice.com/zh/hongkong/r-sukiya-%E3%81%99%E3%81%8D%E5%AE%B6-%E6%B2%B9%E9%BA%BB%E5%9C%B0-%E6%97%A5%E6%9C%AC%E8%8F%9C-r665937'
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
        coords: [22.27912029694743, 114.18155691535785],
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
        name: '田記魚蛋牛腩專門店',
        location: '塘尾道',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.324911084327184, 114.16470359645758],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%94%B0%E8%A8%98%E9%AD%9A%E8%9B%8B%E7%89%9B%E8%85%A9%E5%B0%88%E9%96%80%E5%BA%97-%E5%A4%AA%E5%AD%90-%E6%B8%AF%E5%BC%8F-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r673663'
    },
    {
        name: '大壹燒鵝',
        location: '啟田大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.308614509720375, 114.23406162151718],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%A7%E5%A3%B9%E7%87%92%E9%B5%9D-%E8%97%8D%E7%94%B0-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E7%87%92%E8%87%98-r699025'
    },
    {
        name: '文記車仔麵',
        location: '福榮街',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.33181045876882, 114.16279304662552],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%96%87%E8%A8%98%E8%BB%8A%E4%BB%94%E9%BA%B5-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%B8%AF%E5%BC%8F-%E8%BB%8A%E4%BB%94%E9%BA%B5-r55580'
    },
    {
        name: '台食館',
        location: '福榮街',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.3316321628472, 114.16338778404081],
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
        coords: [22.280594686537523, 114.18213535252173],
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
    },
    {
        name: '牛涮鍋もっと',
        location: 'V Walk',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.327031988159867, 114.15414268220128],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E6%B6%AE%E9%8D%8B%E3%82%82%E3%81%A3%E3%81%A8-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%81%AB%E9%8D%8B-r631473/'
    },
    {
        name: '真真美食店',
        location: '春秧街',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.291199833168914, 114.19705732581501],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%9C%9F%E7%9C%9F%E7%BE%8E%E9%A3%9F%E5%BA%97-%E5%8C%97%E8%A7%92-%E9%96%A9%E8%8F%9C-%E7%A6%8F%E5%BB%BA-%E4%B8%AD%E5%BC%8F%E5%8C%85%E9%BB%9E-r19179'
    },
    {
        name: '深仔記茶餐廳',
        location: '九龍中心大廈',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.297656238237, 114.17037645314944],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%B7%B1%E4%BB%94%E8%A8%98%E8%8C%B6%E9%A4%90%E5%BB%B3-%E5%B0%96%E6%B2%99%E5%92%80-%E6%B8%AF%E5%BC%8F-r640339'
    },
    {
        name: '黑龍拉麵',
        location: '汕頭街',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.27619956841629, 114.17183506999201],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%BB%91%E9%BE%8D-%E7%81%A3%E4%BB%94-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r348661'
    },
    {
        name: '橫濱家系町田商店',
        location: 'AIRSIDE',
        tier: 'A Tier',
        sizeRating: 2,
        coords: [22.33156276339441, 114.19832060897072],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%A9%AB%E6%BF%B1%E5%AE%B6%E7%B3%BB%E7%94%BA%E7%94%B0%E5%95%86%E5%BA%97-%E4%B9%9D%E9%BE%8D%E5%9F%8E-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r869688'
    },
    {
        name: 'Crêpe Delicious',
        location: '利東街',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.27583680484922, 114.17251516849257],
        url: 'https://www.openrice.com/zh/hongkong/r-crepe-delicious-urban-cafe-%E7%81%A3%E4%BB%94-%E8%A5%BF%E5%BC%8F-%E9%9B%AA%E7%B3%95-%E4%B9%B3%E9%85%AA-r680846'
    },
    {
        name: 'Mr. Steak Buffet à la minute',
        location: '世貿中心',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.281906195413118, 114.18411840896947],
        url: 'https://www.openrice.com/zh/hongkong/r-mr-steak-buffet-a-la-minute-%E9%8A%85%E9%91%BC%E7%81%A3-%E5%A4%9A%E5%9C%8B%E8%8F%9C-%E8%87%AA%E5%8A%A9%E9%A4%90-r179934'
    },
    {
        name: '萬發海鮮菜館',
        location: '福華街',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.329015422558555, 114.1655485331703],
        url: 'https://www.openrice.com/zh/hongkong/r-%E8%90%AC%E7%99%BC%E6%B5%B7%E9%AE%AE%E8%8F%9C%E9%A4%A8-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E6%B5%B7%E9%AE%AE-r495907'
    },
    {
        name: '江湖小棧',
        location: '寶成大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.371354719391988, 114.11539373658422],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%B1%9F%E6%B9%96%E5%B0%8F%E6%A3%A7-%E8%8D%83%E7%81%A3-%E6%B8%AF%E5%BC%8F-r453593'
    },
    {
        name: '雞味濃',
        location: '樹德大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.27932287334518, 114.17009239412947],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%9B%9E%E5%91%B3%E6%BF%83-%E7%81%A3%E4%BB%94-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-r749863'
    },
    {
        name: 'Outdark',
        location: '飛達商業中心',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.31783270129838, 114.16934251760989],
        url: 'https://www.openrice.com/zh/hongkong/r-outdark-%E6%97%BA%E8%A7%92-%E9%9F%93%E5%9C%8B%E8%8F%9C-r457435'
    },
    {
        name: '潮興正宗潮州菜館',
        location: '福榮街',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.33978729890027, 114.1531226954788],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%BD%AE%E8%88%88%E6%AD%A3%E5%AE%97%E6%BD%AE%E5%B7%9E%E8%8F%9C%E9%A4%A8-%E9%95%B7%E6%B2%99%E7%81%A3-%E6%BD%AE%E5%B7%9E%E8%8F%9C-r792311'
    },
    {
        name: '稻香',
        location: '藍天海岸',
        tier: 'B Tier',
        sizeRating: 3,
        coords: [22.292346522927886, 113.94419977535688],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%A8%BB%E9%A6%99-%E6%9D%B1%E6%B6%8C-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E7%81%AB%E9%8D%8B-r38028'
    },
    {
        name: '新強記燒腊飯店',
        location: '上海街',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.30601791131212, 114.16931353704081],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%96%B0%E5%BC%B7%E8%A8%98%E7%87%92%E8%85%8A%E9%A3%AF%E5%BA%97-%E4%BD%90%E6%95%A6-%E6%B8%AF%E5%BC%8F-%E7%87%92%E8%87%98-r22131'
    },
    {
        name: '彩福皇宴',
        location: '置富都會',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.30361436296026, 114.18341218703638],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%BD%A9%E7%A6%8F%E7%9A%87%E5%AE%B4-%E7%B4%85%E7%A3%A1-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E6%B5%B7%E9%AE%AE-r12853'
    },
    {
        name: 'Lawn Café',
        location: '香港理工大學',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.30427371746216, 114.18009003102135],
    },
    {
        name: '23座冰室',
        location: '東頭商場',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.33353744413776, 114.19235061082233],
    },
    {
        name: '南北小廚',
        location: '香港科技大學',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.337265387664523, 114.26405083636365],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%8D%97%E5%8C%97%E5%B0%8F%E5%BB%9A-%E8%A5%BF%E8%B2%A2-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E9%BB%9E%E5%BF%83-r1216'
    },
    {
        name: '四寶食堂',
        location: '東頭商場',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.316821776040417, 114.1710116586616],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%9B%9B%E5%AF%B6%E9%A3%9F%E5%A0%82-%E6%97%BA%E8%A7%92-%E6%B8%AF%E5%BC%8F-all-day-breakfast-r691904'
    },
    {
        name: '一粥麵',
        location: '富東商場',
        tier: 'A Tier',
        sizeRating: 2,
        coords: [22.288754599259654, 113.93997290000001],
        url: 'https://www.openrice.com/zh/hongkong/r-%E4%B8%80%E7%B2%A5%E9%BA%B5-%E6%9D%B1%E6%B6%8C-%E6%B8%AF%E5%BC%8F-%E7%B2%A5%E5%93%81-r31839'
    },
    {
        name: '潮螺螺真香螺蛳粉',
        location: '利威商業大廈',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.298339505201238, 114.1739701276681],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%BD%AE%E8%9E%BA%E8%9E%BA%E7%9C%9F%E9%A6%99%E8%9E%BA%E8%9B%B3%E7%B2%89-%E5%B0%96%E6%B2%99%E5%92%80-%E6%A1%82%E8%8F%9C-%E5%BB%A3%E8%A5%BF-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r802099'
    },
    {
        name: '牛奶冰室 ',
        location: '銅鑼灣廣場二期',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.28050843873377, 114.18221179547724],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%89%9B%E5%A5%B6%E5%86%B0%E5%AE%A4-%E9%8A%85%E9%91%BC%E7%81%A3-%E6%B8%AF%E5%BC%8F-r796960'
    },
    {
        name: 'Power Burger',
        location: '黃竹街',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.327421156480824, 114.16446663216466],
        url: 'https://www.openrice.com/zh/hongkong/r-power-burger-%E6%B7%B1%E6%B0%B4%E5%9F%97-%E7%BE%8E%E5%9C%8B%E8%8F%9C-%E6%BC%A2%E5%A0%A1%E5%8C%85-r741232'
    },
    {
        name: '亞參雞飯',
        location: '德福廣場1期',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.324956720397918, 114.213434400689],
        url: 'https://www.openrice.com/zh/hongkong/r-%E4%BA%9E%E5%8F%83%E9%9B%9E%E9%A3%AF-%E4%B9%9D%E9%BE%8D%E7%81%A3-%E9%A6%AC%E4%BE%86%E8%A5%BF%E4%BA%9E%E8%8F%9C-r676591'
    },
    {
        name: '安金稻拌飯',
        location: '啟德零售館1',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.327173508596662, 114.19644525384558],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%AE%89%E9%87%91%E7%A8%BB%E6%8B%8C%E9%A3%AF-%E4%B9%9D%E9%BE%8D%E5%9F%8E-%E9%9F%93%E5%9C%8B%E8%8F%9C-r889726'
    },
    {
        name: '安金稻朝鮮拌飯',
        location: 'Mikiki',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.334077200223245, 114.19744774590767],
        url: 'hhttps://www.openrice.com/zh/hongkong/r-%E5%AE%89%E9%87%91%E7%A8%BB%E6%9C%9D%E9%AE%AE%E6%8B%8C%E9%A3%AF-%E6%96%B0%E8%92%B2%E5%B4%97-%E9%9F%93%E5%9C%8B%E8%8F%9C-r883907'
    },
    {
        name: '燒肉LIKE',
        location: 'Mikiki',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.333675035845147, 114.19722836815211],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%87%92%E8%82%89like-%E6%96%B0%E8%92%B2%E5%B4%97-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E7%87%92%E7%83%A4-r872989'
    },
    {
        name: '印度野',
        location: '慧安商場',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.32445324461893, 114.2541766853746],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%8D%B0%E5%BA%A6%E9%87%8E-%E5%B0%87%E8%BB%8D%E6%BE%B3-%E5%8D%B0%E5%BA%A6%E8%8F%9C-%E5%92%96%E5%96%B1-r790085'
    },
    {
        name: '多彩皇宮',
        location: '美彩樓',
        tier: 'B Tier',
        sizeRating: 2,
        coords: [22.3326221687015, 114.16609408696533],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%A4%9A%E5%BD%A9%E7%9A%87%E5%AE%AE-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E7%87%92%E8%87%98-r58814'
    },
    {
        name: '南豐餐廳',
        location: '南山邨',
        tier: 'A Tier',
        sizeRating: 3,
        coords: [22.333184726489662, 114.17068795697962],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%8D%97%E8%B1%90%E9%A4%90%E5%BB%B3-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%B8%AF%E5%BC%8F-r20065'
    },
    {
        name: '品香樓中西風味餐廳',
        location: '南山邨',
        tier: 'A Tier',
        sizeRating: 2,
        coords: [22.333018498325167, 114.1708140208017],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%93%81%E9%A6%99%E6%A8%93%E4%B8%AD%E8%A5%BF%E9%A2%A8%E5%91%B3%E9%A4%90%E5%BB%B3-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%B8%AF%E5%BC%8F-r7601'
    },
    {
        name: '新南山冰室',
        location: '南山邨',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.333273246845295, 114.17024136441319],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%96%B0%E5%8D%97%E5%B1%B1%E5%86%B0%E5%AE%A4-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%B8%AF%E5%BC%8F-r19152'
    },
    {
        name: '髀加燒',
        location: '南山邨',
        tier: 'A Tier',
        sizeRating: 2,
        coords: [22.33298172735632, 114.17028830306977],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%AB%80%E5%8A%A0%E7%87%92-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%B8%AF%E5%BC%8F-r878336'
    },
    {
        name: '南山雞蛋仔',
        location: '南山邨',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.332977357063776, 114.17020082473371],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%8D%97%E5%B1%B1%E9%9B%9E%E8%9B%8B%E4%BB%94-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%B8%AF%E5%BC%8F-r886721'
    },
    {
        name: '南山白汁冰',
        location: '南山邨',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.333000616620957, 114.17014483362047],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%8D%97%E5%B1%B1%E7%99%BD%E6%B1%81%E5%86%B0-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%B8%AF%E5%BC%8F-r862463'
    },
    {
        name: 'C+屋',
        location: '南山邨',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.332883388415734, 114.1708918288322],
        url: 'https://www.openrice.com/zh/hongkong/r-c-%E5%B1%8B-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E6%B8%AF%E5%BC%8F-%E9%9B%AA%E7%B3%95-%E4%B9%B3%E9%85%AA-r438729'
    },
    {
        name: '美景小廚',
        location: '石硤尾邨街市及熟食檔平台',
        tier: 'S Tier',
        sizeRating: 2,
        coords: [22.331840981614423, 114.16597537016743],
        url: 'https://www.openrice.com/zh/hongkong/r-%E7%BE%8E%E6%99%AF%E5%B0%8F%E5%BB%9A-%E7%9F%B3%E7%A1%A4%E5%B0%BE-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E9%BB%9E%E5%BF%83-r459291'
    },
    {
        name: '金色不如帰',
        location: '又一城',
        tier: 'S Tier',
        sizeRating: 1,
        coords: [22.33742606444853, 114.17410276829817],
        url: 'https://www.openrice.com/zh/hongkong/r-%E9%87%91%E8%89%B2%E4%B8%8D%E5%A6%82%E5%B8%B0-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E6%97%A5%E6%9C%AC%E8%8F%9C-%E6%8B%89%E9%BA%B5-r686546'
    },
    {
        name: '沙嗲王',
        location: '又一城',
        tier: 'A Tier',
        sizeRating: 3,
        coords: [22.33782510706878, 114.1739578700043],
        url: 'https://www.openrice.com/zh/hongkong/r-%E6%B2%99%E5%97%B2%E7%8E%8B-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E5%A4%9A%E5%9C%8B%E8%8F%9C-r770247'
    },
    {
        name: '吉野家',
        location: '又一城',
        tier: 'B Tier',
        sizeRating: 1,
        coords: [22.33854919208418, 114.17410800609262],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%90%89%E9%87%8E%E5%AE%B6-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E6%97%A5%E6%9C%AC%E8%8F%9C-r14790'
    },
    {
        name: 'Pepper Lunch Express',
        location: '又一城',
        tier: 'A Tier',
        sizeRating: 3,
        coords: [22.337589326154184, 114.17441071233246],
        url: 'https://www.openrice.com/zh/hongkong/r-pepper-lunch-express-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E6%97%A5%E6%9C%AC%E8%8F%9C-r87367'
    },
    {
        name: '城大中菜廳',
        location: '香港城市大學',
        tier: 'A Tier',
        sizeRating: 1,
        coords: [22.337316201729916, 114.17178170092245],
        url: 'https://www.openrice.com/zh/hongkong/r-%E5%9F%8E%E5%A4%A7%E4%B8%AD%E8%8F%9C%E5%BB%B3-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-%E9%BB%9E%E5%BF%83-r457778'
    },
    {
        name: 'Ebeneezer‘s Kebabs & Pizzeria',
        location: '香港城市大學',
        tier: 'S Tier',
        sizeRating: 3,
        coords: [22.336911807532044, 114.17199895984984],
        url: 'https://www.openrice.com/zh/hongkong/r-ebeneezers-kebabs-pizzeria-%E4%B9%9D%E9%BE%8D%E5%A1%98-%E4%B8%AD%E6%9D%B1%E8%8F%9C-%E5%92%96%E5%96%B1-r528199'
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
        case 3:  return 18; // Large Circle
        case 2:  return 10; // Medium Circle
        case 1:  return 5;  // Small Circle
        default: return 12; // Standard fallback
    }
}

// 6. Loop through your data to plot points on the street view map grid
restaurants.forEach(place => {
    
    const markerStyles = {
        radius: getMarkerRadius(place.sizeRating),
        fillColor: getMarkerColor(place.tier),
        color: '#474747',
        weight: 1.5,
        fillOpacity: 0.85
    };

    const circleMarker = L.circleMarker(place.coords, markerStyles).addTo(map);

    // 1. Create a variable to hold our link HTML
    let linkHtml = '';

    // 2. Check if the restaurant actually has a URL entered
    if (place.url && place.url !== '') {
        // If it has a URL, create the clickable link button
        linkHtml = `<a href="${place.url}" target="_blank">More info</a>`;
    } else {
        // If it doesn't have a URL, leave it empty or show a placeholder text
        linkHtml = `<span style="font-size: 13px; color: #999; font-style: italic;">No link available</span>`;
    }

    // 3. Insert that linkHtml variable straight into your main popup template
    const popupHtml = `
        <div>
            <h3>${place.name}</h3>
            <p>${place.location} &nbsp;•&nbsp; <strong style="color: ${getMarkerColor(place.tier)};">${place.tier}</strong></p>
            ${linkHtml} 
        </div>
    `;

    circleMarker.bindPopup(popupHtml);

    circleMarker.bindTooltip(place.name, {
        permanent: true,
        direction: 'bottom',
        offset: [0, markerStyles.radius],
        className: 'custom-label'
    }).openTooltip();
});
