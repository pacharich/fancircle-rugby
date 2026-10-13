// =====================================================================
//  Fan Circle株式会社 様｜JAPAN RUGBY SAKURA CLUB 入会記念品グッズ着用撮影
//  モデル候補資料（初稿 / 2026年10月版）
//  募集：男性1名・女性1名（クライアントが候補から選定）
//  女性4名（マイカ／モカ／アイ／ユイ）、男性3名（せいき／ゆうき／ショーン）。
// =====================================================================

// ============ 撮影日 / 出演可否 ============
// 撮影：2026/10/24（土）10:00〜11:30（9:30集合）秩父宮ラグビー場 正面門（屋外）
// 各モデルの可否は確認中のため pending（未定）で表示。
const SCHEDULE_DATES = ['10/24（土）'];
const SHOOT = [{ date: '10/24（土）10:00〜11:30', status: 'pending' }];
const AVAILABILITY = {
  maika: SHOOT, moka: SHOOT, ai: SHOOT, yui: SHOOT,
  seiki: SHOOT, yuki: SHOOT, sean: SHOOT,
};

const PLACEHOLDER = '情報待ち';
const NA = '—';

// ============ Model Data ============
// 女性4名（掲載順：マイカ／モカ／アイ／ユイ）
const FEMALES = [
  // 1. マイカ
  {
    id: 'maika', name: 'マイカ', age: 29,
    height: 154, size: 'B 77cm / W 55cm / H 80cm',
    shoe: '22.5cm', hairColor: 'ナチュラルブラウン', exp: NA, location: '東京都（千葉県出身）',
    extra: [['体重', '40kg'], ['運転免許', 'あり']],
    videos: ['https://youtube.com/shorts/f3myIYxLkAc', 'https://youtube.com/shorts/QnyfSmSqNGI'],
    achievementTitle: '主な出演作',
    achievementSections: [
      { title: 'ドラマ', items: [
        'CX 月9「5→9 私に恋したお坊さん」／レギュラー生徒役',
        'NTV系 深夜ドラマ「ザンビ」',
        'EX「ハケン占い師アタル」',
        'TX「牙狼-GARO- 魔戒烈伝」／ヒバナ役' ] },
      { title: '映画', items: [
        '「トモダチゲーム」／花宮満役', '「海にうかぶ月」／平田美希役',
        '「志乃ちゃんは自分の名前が言えない」', '「友だちのパパがすき」／友人役' ] },
      { title: 'バラエティ', items: [
        'CX「痛快TVスカッとジャパン」4度出演',
        '「直撃！シンソウ坂上」〜日航123便からのメッセージ・33年目の真相〜／田淵満役' ] },
      { title: '舞台', items: ['「-Knights- アーサー王と円卓の騎士」／ニムエ役　2年連続'] },
      { title: 'CM', items: ['ソフトバンク', 'HONDA（web）', 'GungHo'] },
      { title: 'MV', items: ['ASIAN KUNG-FU GENERATION「オペラグラス」／バレリーナ'] },
      { title: 'ブライダルモデル', items: ['THE TOAI'] },
      { title: 'SNS広告', items: [
        'ハップアール', 'EPSON', 'サモエドカフェ moffu', '舞子スノーリゾート',
        'アパマンショップ 信濃土地', '珈琲倶楽部', 'KG高等学園', '東京ドームホテル',
        'アゲルキャリア', '鍛高譚／合同酒精', '牛たん とろろ 麦めし ねぎし', '蒲田矯正歯科' ] },
      { title: 'SNSショートドラマ', items: [
        '僕らの恋はかくれんぼ。', '金融女子が沼すぎる!?', '株式会社 World Change Analysis' ] }
    ]
  },
  // 2. モカ
  {
    id: 'moka', name: 'モカ', age: 28,
    height: 163, size: 'B 84cm / W 62cm / H 87cm',
    shoe: null, exp: NA, location: '東京都',
    extra: [['体重', '48kg']],
    videos: ['https://youtube.com/shorts/IuwVmCBWxNM'],
    achievementTitle: '出演実績',
    achievementSections: [
      { title: '出演実績', items: [
        'TBS×Netflix 恋愛リアリティショー「未来日記」Season2' ] },
      { title: 'スチール', items: [
        'KEYUCA アパレルモデル', 'SONY ワイヤレスイヤホン イメージ', 'Softbank ホームページ',
        'カラオケ歌広場 求人広告', '築地銀だこ メニュー表紙', 'ドン・キホーテ サンタコス表紙',
        'FAV LUX 長崎 ホームページ', 'Oh my teeth メインビジュアル', '浅草ビューホテル ブライダルモデル',
        'VIVOVIVA 石垣島 ホームページ', 'おふろの王様 ホームページ', 'グランスノー奥伊吹',
        'オートテクニックジャパン ホームページ', 'シェラトングランデトーキョーベイ',
        'ギオンデリバリーサービス ホームページ', '山と渓谷 2022年9月号', 'SAUNEA白州 ホームページ',
        'kashika京都北山 ホームページ' ] },
      { title: 'ムービー', items: [
        'BULK HOMME', 'MEDULLA', 'アクアパーク品川', 'ふじてんスノーリゾート',
        'KUDOCHI SAUNA', 'tondemi', 'シギラセブンマイルズリゾート', 'ヨドバシカメラ Akiba' ] }
    ]
  },
  // 3. アイ
  {
    id: 'ai', name: 'アイ', age: 27,
    height: 162, size: 'B 84cm / W 59cm / H 85cm',
    shoe: '24.0cm', exp: NA, location: '東京都',
    extra: [],
    videos: ['https://youtu.be/VKIoEIuxl8g'],
    achievementTitle: '出演実績 ／ BEAUTY・ADVERTISING・WEB MOVIE',
    achievementSections: [
      { title: 'CM・広告', items: [
        '三菱倉庫（CM）', 'Aカード（CM）', 'KDDI PONTAパス（WEB広告）',
        'パナソニックホームズ（PR映像）', 'BASE BREAD（広告）', 'JT（WEB）' ] },
      { title: 'BEAUTY / MEDICAL', items: [
        'TCB東京中央美容外科（WEB広告）', 'AGAスキンクリニックレディース（WEB広告）',
        'MEDULLA ソニックシャンプー（広告）', 'VIAGE（広告）', 'UNDEUX SUPERBODY（広告）' ] },
      { title: 'WEB / PROMOTION', items: [
        '日野自動車 デュトロ（商品紹介動画）', 'DAIKEN（SNS動画）', 'バイク王（LP広告）' ] },
      { title: 'STILL / POSTER', items: [
        '明治（ポスター）', 'ユニ・チャーム（シルコット）', 'ATELIER ÉCRAT' ] },
      { title: 'CORPORATE / VP', items: [
        '医療・美容・住宅・ライフスタイル領域など多数出演' ] }
    ]
  },
  // 4. ユイ
  {
    id: 'yui', name: 'ユイ', age: 26,
    height: 157.8, size: '非公開', shoe: null, exp: NA, location: '東京都板橋区',
    extra: [['体重', '43kg']],
    videos: ['https://youtube.com/shorts/flXNOUvtkCw'],
    achievementTitle: '出演実績',
    achievements: [
      'CanCam兼andGIRL 読者モデル', '東京プリンスホテル様／SNS広告', 'オーマイティース様／SNS広告',
      '株式会社タップル様／SNS広告', 'JR東海様／SNS広告', '長谷工ジョブクリエイト様／SNS広告・LP・HP',
      'しまむら様／SNS広告・紙チラシ・店頭POP', '東京カレンダー様／SNS広告', 'nouvelle様／SNS広告',
      'ディープラス様／SNS広告', '3rd inc.様／SNS広告・LP', 'HBL様／SNS広告・LP',
      '花王様（suisai）／SNS広告・ドンキホーテサイネージ・LP', 'ルミネ様／SNS広告', 'シャドテン様／SNS広告',
      'freee様／SNS広告', 'PATRIC様／SNS広告', 'ユンス様／SNS広告', 'ロペピクニック様／SNS広告', 'オルビス様／SNS広告'
    ]
  },
];

// 男性3名（掲載順：せいき／ゆうき／ショーン）
const MALES = [
  // 1. せいき
  {
    id: 'seiki', name: 'せいき', age: 29,
    height: 182, size: 'C 95cm / W 73cm / H 98cm',
    shoe: '27.5cm', clothesSize: 'L', hairColor: 'Black',
    exp: 6, location: '東京都',
    achievementTitle: 'ブライダルモデル活動実績',
    achievementNote: '※全て新郎役での出演',
    achievements: [
      'ウェスティンホテル横浜','セントレジデンスホテル大阪','ワタベウェディング',
      'プラチナドレススタイル','ドレリッチ横浜','ONE LIFE 横浜','fanta dress',
      'アンテリーベウェディング','京都ノーザンチャーチ北山教会',
      'ノートルダム横浜 みなとみらい','ラバンク ドロア横浜結婚式場',
      'ウェディングドレスブランド ituwa（イツワ）','スタジオマーリン 韓国フォトスタジオ',
    ]
  },
  // 2. ゆうき
  {
    id: 'yuki', name: 'ゆうき', age: 28,
    height: 181, size: 'B 85cm / W 79cm / H 93cm',
    exp: 5, location: '東京都',
    achievementTitle: 'ブライダルモデル活動実績',
    achievementNote: '※全て新郎役での出演',
    achievements: [
      'ホテルオークラ東京','アウトリガーリーフ（Hawaii🇺🇸）','ホテル雅叙園東京',
      'ホテル椿山荘東京','ウェスティンホテル横浜','サンシャイン水族館','東京大神宮',
      'JRホテルクレメント徳島','ヒカリフルコート高崎','ロイヤルチェスター太田',
      'ベルブランシェ天童','リーガロイヤルホテル京都','シェラトン東京ベイ',
    ]
  },
  // 3. ショーン
  {
    id: 'sean', name: 'ショーン', age: 34,
    height: 172, size: 'B 94cm / W 76cm / H 93cm',
    shoe: '28.0cm', exp: NA, location: '大分県出身',
    extra: [
      ['体重', '約70kg'], ['頭囲', '57.5cm'], ['首回り', '34.5cm'], ['肩幅', '45cm'],
      ['腕の長さ', '53cm'], ['袖丈', '57cm'], ['腕回り', '45cm'], ['手首回り', '16cm'],
      ['股下', '80cm（くるぶしまで72cm）'], ['太もも回り', '56cm'],
      ['プロフィール', '南アフリカ共和国の母と日本の父を持つハーフ。日本国籍、大分県出身'],
      ['趣味', '水泳・ゲーム（身体作りのため筋トレも実施）'],
      ['ピアス', '左耳のみ穴1つ']
    ],
    videos: [],
    achievementTitle: '活動実績',
    achievementSections: [
      { title: '撮影モデル（2018年12月〜）', items: [
        '自衛隊ショップ零 - アパレルEC', 'WRC OFFICIAL SHOP - アパレルEC', 'スーパースポーツゼビオ - アパレルEC',
        'Shreel - アパレルEC', 'UNLIMITED PWC - 2025年ウェットスーツEC',
        'オーシャンスポーツwebストア - ECサイト（BILLABONG 2025年ウェットスーツ）',
        'tennis365.net - NEWERAコラボウェア第3弾EC', 'ANDROSOPHY - 抱っこ紐EC', 'PIENA - アクセサリーEC',
        'MARCHON - 眼鏡・サングラスEC', 'エムディワール - GUSCIO UOMO カバン類EC', 'HOL - Puente アクセサリー類EC',
        'ボディスプラウト - ゴルフパンツPV&EC', 'Double Eagle - ゴルフショップPV', 'ルクスフォリア - リュック商品PV',
        'Byzoom fitness - 筋トレ器具EC', '青成堂 - サウナウェア HEATTRAP 商品EC', 'BACCI -「トトノウマット」Webページ',
        'ヨドバシカメラ - 商品PV多数', 'Brosh - オールウォッシュPV', 'MEGAドン・キホーテ渋谷本店 - 店内チョコレートPV',
        'ヘアモンスターラボ - ホームページ', '株式会社アン・ドゥ - ホームページ', '伊東歯科医院 - ホームページ',
        'DOUBLE O DESIGNBOOK - ホームページ', 'コトブキ環境株式会社 - ホームページ',
        '株式会社iruka - ハイエンド折り畳み自転車 iruka ウェブサイト', '石國商店 -「KUNISTEIN」ブランドサイト',
        '石國商店 -「Rocotte」ブランドサイト', 'Cao -「歩み」MV', 'This is LAST -「おやすみ」MV',
        'シンヴァンキッシュハイスクール -「シンヴァちゃんは猫型ロボットよりもすごい」MV',
        'エリックスタジオ・マルチスタジオ - 作例モデル', 'ファーストクリエーション - 作例モデル',
        'ブルーオリオン -「ハンサムラボ」サービス紹介ページ', 'タクティブ - レッスン紹介ページ',
        'ニコン - てくてくカメラ 第30回ナビゲーター', 'マイナビニュース - キャンプ記事', 'KDDI BUSINESS - WebCM',
        'CODE22 - アンダーウェア公式SNS投稿', 'Private Structure - アンダーウェア公式SNS投稿',
        'ポートレート教室モデル - ブライダル・前撮り', '個人ポートレート撮影',
        'ハンドモデル（電子決済機器・キリン - フォアローゼズ）' ] },
      { title: 'セリフ有', items: [
        'メンズライフクリニック TikTok「男の夜の相談室」- メインキャスト', 'YouTubeチャンネル「バンカラジオ」- サブキャスト多数',
        'YouTubeチャンネル「極楽レンジャー」- リポーター多数', 'YouTubeドラマ「鬼道伝説」- ケント役',
        'YouTubeドラマ「実写版ストリートファイター」- ケン役',
        'クロシオ - Yahoo!ショッピングチャンネル「クビカタノービー商品紹介ライブ」モニター役', 'SNS広告多数' ] },
      { title: 'ショーモデル', items: [
        '2025年 ジュエリーサロンスカーレット「スカーレットパーティー2025」' ] },
      { title: 'ヘアモデル（2012年〜）', items: ['大会・宣材・カタログ'] },
      { title: 'コスプレ代行', items: [
        'ヘタリア - プロイセン', '東京リベンジャーズ - 灰谷蘭（未来）', 'ゴールデンカムイ - 尾形百之助',
        'ストリートファイター - ケン' ] },
      { title: 'その他', items: [
        '模擬挙式モデル（2020年）', 'YouTube（2022年〜／ゲーム実況・筋トレ）', 'Kアリーナ横浜 VIPラウンジスタッフ' ] },
      { title: 'イベント関係（2024年3月〜）', items: [
        '2024年 フォーミュラE東京 グリッドアンバサダー',
        '2024年 MINIイベント「MeetNewEmotion」撮影・誘導スタッフ',
        '2024年 MISS DIOR EXHIBITION「ミス ディオール展覧会 ある女性の物語」撮影・誘導スタッフ',
        '2024年 ロールスロイス「カリナン・シリーズ II」披露イベント撮影スタッフ',
        '2024年 サイバーアーク「IMPACT World Tour Tokyo」案内スタッフ',
        '2024年 ReFa「ReFa WONDERFUL DAYS Winter 2024」案内スタッフ',
        '2024年 CHANEL「CHANEL celebration」誘引スタッフ',
        '2025年 日本口腔インプラント学会「関東・甲信越支部大会」案内スタッフ',
        '2025年 日本製紙連合会「ラブレターイベント2025 バレンタインデーは、手紙を書こう。」誘引スタッフ',
        '2025年 Eve Experience Live 2025「蒼像」撮影・誘導スタッフ',
        '2025年 サントリー食品インターナショナル株式会社「第16回定時株主総会」受付・案内スタッフ',
        '2025年 任天堂株式会社「Nintendo Switch 2 体験会 TOKYO」説明員',
        '2025年 株式会社HIKKY「Vket Real 2025 Summer」誘引・販売スタッフ',
        '2025年 株式会社ポケモン「ポケモンカードゲーム スクランブルバトル 東京 バトル」物販スタッフ',
        '2025年 アジレント・テクノロジー株式会社「JASIS 2025」出展ブースコンパニオン',
        '2025年 VT cosmetics「MEGA COSME LAND 2025」出展ブースコンパニオン',
        '2025年 株式会社オカムラ「オカムラグランドフェア2026」記念品コーナースタッフ',
        '2025年 CHANEL「イマーシヴ ジャーニー CHANEL WINTER CONSTELLATION」誘導・誘引スタッフ' ] },
      { title: 'イベントMC（2026年7月〜）', items: [
        '2026年 雫オフィス「雫 in Paris 〜フランス渡航報告会2026〜」司会・進行' ] }
    ]
  },
];

// 番号ラベルの接頭辞（旧テンプレートの「新婦役／新郎役」に代わる中立表記）
const NUM_PREFIX = 'MODEL ';

let currentTab = 'female';
let lbList = FEMALES;
let lbIdx = 0;
let lbShot = 0;

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

function getPhotos(m) {
  const genderKey = currentTab === 'female' ? 'female' : 'male';
  return (typeof PHOTO_DATA !== 'undefined' && PHOTO_DATA[genderKey] && PHOTO_DATA[genderKey][m.id]) || [];
}
function photoSrc(photo) { return 'data:image/jpeg;base64,' + photo.b64; }

function ytId(url) {
  const m = String(url).match(/(?:shorts\/|youtu\.be\/|v=|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : '';
}
function heightDisp(h) { return typeof h === 'number' ? h + 'cm' : h; }
function ageDisp(a)    { return typeof a === 'number' ? a + '歳' : a; }
function expDisp(e)    { return typeof e === 'number' ? e + '年' : (e != null ? e : '—'); }

// ============ Grid render ============
function buildCard(m, i, gender) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.id = m.id;

  const numLabel = NUM_PREFIX + String(i + 1).padStart(2, '0');
  const savedTab = currentTab;
  currentTab = gender;
  const photos = getPhotos(m);
  currentTab = savedTab;
  const firstPhoto = photos[0];
  const photoCountLabel = photos.length ? photos.length + '枚' : '写真情報待ち';

  card.innerHTML = `
    <div class="card-photo">
      ${firstPhoto
        ? `<img class="card-img" src="${photoSrc(firstPhoto)}" alt="${m.name}" loading="lazy">`
        : '<div class="card-img-empty"></div>'}
      <span class="card-no">${numLabel}</span>
      <span class="card-photocount">${photoCountLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-name">
        <span class="nm">${m.name}</span>
        <span class="age">${ageDisp(m.age)}</span>
      </div>
      <div class="card-loc">${m.location}</div>
      <div class="card-stat">
        <span><span class="l">身長</span>${heightDisp(m.height)}</span>
      </div>
      ${m.cardNote ? `<div class="card-note">${m.cardNote}</div>` : ''}
    </div>
  `;
  card.addEventListener('click', () => {
    currentTab = gender;
    lbList = gender === 'female' ? FEMALES : MALES;
    openLightbox(i);
  });
  return card;
}

function renderAllGrids() {
  const gf = $('#gridFemale');
  const gm = $('#gridMale');
  if (gf) { gf.innerHTML = ''; FEMALES.forEach((m, i) => gf.appendChild(buildCard(m, i, 'female'))); }
  if (gm) { gm.innerHTML = ''; MALES.forEach((m, i)   => gm.appendChild(buildCard(m, i, 'male'))); }
}

// ============ Lightbox ============
const lb = $('#lb');

function openLightbox(idx) {
  lbList = currentTab === 'female' ? FEMALES : MALES;
  lbIdx = idx;
  lbShot = 0;
  renderLightbox();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

function renderLightbox() {
  const m = lbList[lbIdx];
  const numLabel = NUM_PREFIX + String(lbIdx + 1).padStart(2, '0');
  const photos = getPhotos(m);
  const photo = photos[lbShot];

  const main = $('#lbMain');
  main.innerHTML = '';
  if (photo) {
    const img = document.createElement('img');
    img.src = photoSrc(photo);
    img.alt = m.name;
    img.className = lbShot === 0 ? 'lb-img-cover' : 'lb-img-natural';
    main.appendChild(img);
  } else {
    main.innerHTML = '<div style="color:rgba(255,255,255,.4);font-size:13px;letter-spacing:.1em;">写真情報待ち</div>';
  }

  const strip = $('#lbStrip');
  strip.innerHTML = '';
  photos.forEach((p, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'lb-thumb' + (i === lbShot ? ' active' : '');
    const tImg = document.createElement('img');
    tImg.src = photoSrc(p);
    tImg.alt = String(i + 1).padStart(2, '0');
    thumb.appendChild(tImg);
    const no = document.createElement('span');
    no.className = 'lb-thumb-no';
    no.textContent = String(i + 1).padStart(2, '0');
    thumb.appendChild(no);
    thumb.addEventListener('click', () => { lbShot = i; renderLightbox(); });
    strip.appendChild(thumb);
  });

  $('#lbId').innerHTML = photos.length
    ? `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;<strong>${String(lbShot + 1).padStart(2, '0')}</strong> / ${photos.length}枚`
    : `<span class="accent">${numLabel}</span>&nbsp;／&nbsp;写真情報待ち`;

  $('#lbName').innerHTML = typeof m.age === 'number'
    ? `${m.name} <span class="age">${m.age}歳</span>` : `${m.name}`;
  $('#lbLoc').textContent = m.location;
  $('#lbHeight').textContent = m.height;
  $('#lbHeightUnit').style.display = typeof m.height === 'number' ? '' : 'none';
  $('#lbAge').textContent = m.age;
  $('#lbAgeUnit').textContent = typeof m.age === 'number' ? '歳' : '';
  $('#lbSize').textContent = m.size;
  $('#lbLocSpec').textContent = m.location;

  const specShoe = $('#specShoe');
  if (m.shoe) { specShoe.style.display = ''; $('#lbShoe').textContent = m.shoe; }
  else { specShoe.style.display = 'none'; }

  // 芸歴は数値（年）がある場合のみ表示
  if (typeof m.exp === 'number') { $('#specExp').style.display = ''; $('#lbExp').textContent = expDisp(m.exp); }
  else { $('#specExp').style.display = 'none'; }

  const specHair = $('#specHair'), specEye = $('#specEye'), specClothes = $('#specClothes');
  if (m.hairColor) { specHair.style.display = ''; $('#lbHair').textContent = m.hairColor; } else { specHair.style.display = 'none'; }
  if (m.eyeColor)  { specEye.style.display = '';  $('#lbEye').textContent = m.eyeColor; }  else { specEye.style.display = 'none'; }
  if (m.clothesSize) { specClothes.style.display = ''; $('#lbClothes').textContent = m.clothesSize; } else { specClothes.style.display = 'none'; }

  // 追加プロフィール項目（体重・運転免許・利き手・ピアス等）
  document.querySelectorAll('.spec.extra-spec').forEach(e => e.remove());
  const specsBox = document.querySelector('.specs');
  (m.extra || []).forEach(([label, val]) => {
    const d = document.createElement('div');
    d.className = 'spec extra-spec';
    d.innerHTML = `<div class="spec-l">${label}</div><div class="spec-v">${val}</div>`;
    specsBox.appendChild(d);
  });

  // イメージ動画（specsの直後に表示）
  document.querySelectorAll('.lb-videos').forEach(e => e.remove());
  if (m.videos && m.videos.length) {
    const box = document.createElement('div');
    box.className = 'lb-videos';
    box.style.cssText = 'margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1);';
    box.innerHTML =
      '<div style="font-family:var(--mono);font-size:10px;letter-spacing:.16em;color:var(--accent);margin-bottom:12px;text-transform:uppercase;font-weight:600;">MOVIE ／ イメージ動画</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:12px;">' +
      m.videos.map(u => {
        const id = ytId(u);
        return `<div style="position:relative;width:200px;max-width:100%;aspect-ratio:9/16;border-radius:8px;overflow:hidden;background:#000;">
          <iframe src="https://www.youtube.com/embed/${id}" title="イメージ動画" loading="lazy"
            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen
            style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe>
        </div>`;
      }).join('') +
      '</div>';
    const specsEl = document.querySelector('.specs');
    specsEl.parentNode.insertBefore(box, specsEl.nextSibling);
  }

  const avail = AVAILABILITY[m.id] || [];
  const schedSection = $('#lbSchedule');
  if (avail.length) {
    schedSection.style.display = '';
    $('#lbScheduleCards').innerHTML = avail.map(d => {
      const cls   = d.status === 'ok' ? 'avail-ok' : d.status === 'ng' ? 'avail-ng' : 'avail-pending';
      const badge = d.status === 'ok' ? '○' : d.status === 'ng' ? '✕' : '－';
      const label = d.status === 'ok' ? '出演可' : d.status === 'ng' ? '出演不可' : '未定';
      return `<div class="avail-card ${cls}"><span class="avail-date">${d.date}</span><span class="avail-badge">${badge}</span><span class="avail-label">${label}</span></div>`;
    }).join('');
  } else { schedSection.style.display = 'none'; }

  const achSection = $('#lbAchievements');
  if (m.achievementSections && m.achievementSections.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '活動実績';
    $('#lbAchList').innerHTML = m.achievementSections.map(sec => `
      <li class="ach-section-title">${sec.title}</li>
      ${sec.items.map(a => `<li>${a}</li>`).join('')}`).join('');
  } else if (m.achievements && m.achievements.length) {
    achSection.style.display = '';
    $('#lbAchTitle').textContent = m.achievementTitle || '実績';
    const noteHtml = m.achievementNote ? `<li class="ach-note">${m.achievementNote}</li>` : '';
    $('#lbAchList').innerHTML = noteHtml + m.achievements.map(a => `<li>${a}</li>`).join('');
  } else { achSection.style.display = 'none'; }

  // 競合などの注意事項（枠で強調）
  document.querySelectorAll('.lb-warning-box').forEach(e => e.remove());
  if (m.warning) {
    const box = document.createElement('div');
    box.className = 'lb-warning-box';
    box.style.cssText = 'margin-top:22px;padding:16px 18px;border:1.5px solid var(--accent);border-radius:8px;background:rgba(196,69,45,.14);';
    box.innerHTML =
      `<div style="display:flex;align-items:center;gap:8px;font-weight:700;color:#ff9b86;font-size:13px;letter-spacing:.03em;margin-bottom:10px;">
         <span style="flex-shrink:0;width:18px;height:18px;border-radius:50%;background:var(--accent);color:#fff;font-size:12px;display:flex;align-items:center;justify-content:center;">!</span>
         ${m.warning.title}
       </div>` +
      m.warning.body.map(t => `<p style="margin:0 0 8px;font-size:12px;line-height:1.75;color:rgba(255,255,255,.88);">${t}</p>`).join('');
    const btns = document.querySelector('.lb-actions-bottom');
    btns.parentNode.insertBefore(box, btns);
  }

  $('#lbPrev').disabled = lbIdx === 0;
  $('#lbNext').disabled = lbIdx === lbList.length - 1;
}

$('#lbPrev').addEventListener('click', () => { if (lbIdx > 0) { lbIdx--; lbShot = 0; renderLightbox(); } });
$('#lbNext').addEventListener('click', () => { if (lbIdx < lbList.length - 1) { lbIdx++; lbShot = 0; renderLightbox(); } });
$('#lbClose').addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft'  && !$('#lbPrev').disabled) { lbIdx--; lbShot = 0; renderLightbox(); }
  if (e.key === 'ArrowRight' && !$('#lbNext').disabled) { lbIdx++; lbShot = 0; renderLightbox(); }
  if (e.key === 'ArrowUp')   { e.preventDefault(); if (lbShot > 0) { lbShot--; renderLightbox(); } }
  if (e.key === 'ArrowDown') { e.preventDefault(); const ph = getPhotos(lbList[lbIdx]); if (lbShot < ph.length - 1) { lbShot++; renderLightbox(); } }
});

renderAllGrids();
