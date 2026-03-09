// =============================================
//  ANIME QUIZ PORTAL — script.js
// =============================================

// ===== STANDARD QUESTION BANK =====
const questionBank = {
  Action: [
    { q: "Which anime features a character with the Sharingan eye?", opts: ["Bleach","Naruto","One Piece","Fairy Tail"], ans: 1 },
    { q: "In Dragon Ball Z, what level does Goku achieve first?", opts: ["Super Saiyan 3","Super Saiyan God","Super Saiyan","Ultra Instinct"], ans: 2 },
    { q: "What is the name of the sword used by Ichigo in Bleach?", opts: ["Zanpakuto","Zangetsu","Tensa","Mugetsu"], ans: 1 },
    { q: "Who is the captain of the Straw Hat Pirates?", opts: ["Zoro","Sanji","Luffy","Nami"], ans: 2 },
    { q: "Which organization does Itachi Uchiha belong to?", opts: ["Anbu","Akatsuki","Sannin","Root"], ans: 1 },
    { q: "What is the main power system in Hunter x Hunter?", opts: ["Chakra","Reiatsu","Nen","Haki"], ans: 2 },
    { q: "In Attack on Titan, what is the largest titan form?", opts: ["Armored Titan","Colossal Titan","Beast Titan","War Hammer Titan"], ans: 1 },
    { q: "Deku's real name in My Hero Academia is?", opts: ["Katsuki Bakugo","Shoto Todoroki","Izuku Midoriya","Tenya Iida"], ans: 2 },
    { q: "What is Levi Ackerman's rank in Attack on Titan?", opts: ["Commander","Captain","General","Scout"], ans: 1 },
    { q: "Which Devil Fruit did Luffy eat?", opts: ["Mera Mera no Mi","Gura Gura no Mi","Gomu Gomu no Mi","Ope Ope no Mi"], ans: 2 },
  ],
  Romance: [
    { q: "Which anime features a love story between a delinquent and a student council president?", opts: ["Toradora","Kaichou wa Maid-sama!","Your Lie in April","Clannad"], ans: 1 },
    { q: "In 'Your Lie in April', what instrument does Kousei play?", opts: ["Violin","Cello","Piano","Guitar"], ans: 2 },
    { q: "Who is Ryuuji's love interest in Toradora?", opts: ["Ami Kawashima","Sumire Kano","Taiga Aisaka","Minori Kushieda"], ans: 2 },
    { q: "What is the name of the female protagonist in 'Clannad'?", opts: ["Fuko Ibuki","Kyou Fujibayashi","Nagisa Furukawa","Tomoyo Sakagami"], ans: 2 },
    { q: "In 'Fruits Basket', what does Tohru Honda discover about the Sohma family?", opts: ["They are vampires","They transform into zodiac animals","They have superpowers","They are immortal"], ans: 1 },
    { q: "In 'Ore Monogatari', what is the main character's name?", opts: ["Sunakawa","Takeo Goda","Suna","Makoto"], ans: 1 },
    { q: "Which anime is set in a high school with a literature club?", opts: ["K-On","Haruhi Suzumiya","Kokoro Connect","Ore Gairu"], ans: 3 },
    { q: "What does 'Kimi no Na wa' translate to in English?", opts: ["Your Voice","Your Name","Your Heart","Your Dream"], ans: 1 },
    { q: "In 'Lovely Complex', what is the main conflict between the leads?", opts: ["Different schools","Height difference","Family rivalry","Social status"], ans: 1 },
    { q: "What genre is 'Horimiya' classified as?", opts: ["Isekai","Shounen","Slice of Life Romance","Sports"], ans: 2 },
  ],
  Fantasy: [
    { q: "In 'Fullmetal Alchemist', what is the first law of alchemy?", opts: ["Energy cannot be destroyed","Matter is equivalent","Equivalent Exchange","Nothing from nothing"], ans: 2 },
    { q: "What is the name of the dragon god in 'Fairy Tail'?", opts: ["Acnologia","Igneel","Weisslogia","Skiadrum"], ans: 0 },
    { q: "In 'That Time I Got Reincarnated as a Slime', what is Rimuru's ultimate form?", opts: ["Demon Lord","True Dragon","Chaos Lord","Storm Dragon"], ans: 0 },
    { q: "Which studio produced 'Spirited Away'?", opts: ["Toei Animation","Madhouse","Studio Ghibli","Gainax"], ans: 2 },
    { q: "In 'Black Clover', what is Asta's unique power?", opts: ["Fire Magic","Anti-Magic","Dark Magic","Wind Magic"], ans: 1 },
    { q: "What is the name of the floating castle in 'Sword Art Online'?", opts: ["Aincrad","Alfheim","GGO","Underworld"], ans: 0 },
    { q: "In 'Re:Zero', what is Subaru's ability?", opts: ["Time Travel","Return by Death","Infinite Loop","Death Reset"], ans: 1 },
    { q: "Who is the main antagonist in 'Overlord'?", opts: ["Cocytus","Albedo","Ainz Ooal Gown","Demiurge"], ans: 2 },
    { q: "In 'No Game No Life', what are Sora and Shiro known as?", opts: ["Blank","White","Zero","Null"], ans: 0 },
    { q: "What element does Natsu Dragneel use in Fairy Tail?", opts: ["Lightning","Ice","Fire","Water"], ans: 2 },
  ],
  Classics: [
    { q: "Which classic anime features a robot named Astro Boy?", opts: ["Gigantor","Tetsuwan Atom","Mazinger Z","Voltron"], ans: 1 },
    { q: "Who created the manga 'Dragon Ball'?", opts: ["Masashi Kishimoto","Eiichiro Oda","Akira Toriyama","Yoshihiro Togashi"], ans: 2 },
    { q: "In 'Neon Genesis Evangelion', what organization fights the Angels?", opts: ["SHIELD","NERV","SEELE","GEHIRN"], ans: 1 },
    { q: "What year did 'Sailor Moon' first air in Japan?", opts: ["1990","1992","1995","1988"], ans: 1 },
    { q: "Which 1997 Ghibli film features a young girl protecting her forest?", opts: ["Nausicaä","Princess Mononoke","Totoro","Kiki's Delivery"], ans: 1 },
    { q: "Who is the rival of Goku in the original Dragon Ball?", opts: ["Frieza","Cell","Piccolo","Vegeta"], ans: 2 },
    { q: "In 'Cowboy Bebop', what is the name of Spike's ship?", opts: ["Swordfish","Bebop","Red Tail","Hammerhead"], ans: 1 },
    { q: "What is the name of Inuyasha's sword?", opts: ["Tessaiga","Tokijin","Bakusaiga","Sounga"], ans: 0 },
    { q: "In 'Yu Yu Hakusho', what is Yusuke Urameshi's title?", opts: ["Spirit Detective","Ghost Hunter","Demon Slayer","Soul Reaper"], ans: 0 },
    { q: "Which classic anime is considered the father of the mecha genre?", opts: ["Voltron","Gundam","Mazinger Z","Macross"], ans: 2 },
  ]
};

// ===== SPECIAL ANIME QUESTION BANKS =====
// Question format:
//   MCQ: { q, opts: [...], ans: index }
//   Open: { q, open: true, ans: "answer", aliases: ["alt1","alt2"] }
// Last 3 questions of each series are open-ended (no options)

const specialBank = {

  Bleach: [
    { q: "What is the name of the realm where Soul Reapers reside and govern?", opts: ["Hueco Mundo","Soul Society","Dangai","Seireitei"], ans: 1 },
    { q: "Which Bleach character possesses both Shinigami and Hollow powers simultaneously?", opts: ["Uryu Ishida","Kisuke Urahara","Ichigo Kurosaki","Sosuke Aizen"], ans: 2 },
    { q: "What is the name of Byakuya Kuchiki's Bankai?", opts: ["Senbonzakura Kageyoshi","Ryumon Hozukimaru","Daiguren Hyorinmaru","Tensa Zangetsu"], ans: 0 },
    { q: "Which squad is known as the Execution Squad in the Gotei 13?", opts: ["Squad 2","Squad 12","Squad 9","Squad 4"], ans: 0 },
    { q: "What is the term for the technique that allows Arrancar to tear a hole in space and travel between worlds?", opts: ["Sonido","Hierro","Descorrer (Garganta)","Pesquisa"], ans: 2 },
    { q: "Who is the Soul King?", opts: ["A powerful hollow","The original Quincy","A divine being who stabilizes the three worlds","Genryusai Yamamoto"], ans: 2 },
    { q: "What is the name of Kenpachi Zaraki's Zanpakuto (revealed in the final arc)?", opts: ["Nozarashi","Ryujin Jakka","Benihime","Wabisuke"], ans: 0 },
    { q: "In the Thousand-Year Blood War arc, what is the ability of Yhwach's Schrift 'A'?", opts: ["The Almighty — can see and alter the future","Absolute Destruction","The All — absorb any power","Auswählen — choose who lives"], ans: 0 },
    { q: "Which member of the Visored was the former captain of Squad 9?", opts: ["Shinji Hirako","Kensei Muguruma","Love Aikawa","Mashiro Kuna"], ans: 1 },
    { q: "What is the name of Sosuke Aizen's shikai ability?", opts: ["Infinite illusion","Complete Hypnosis (Kanzen Saimin)","Mirror world","Reality manipulation"], ans: 1 },
    // ---- OPEN-ENDED ----
    { q: "What is the full name of Ichigo Kurosaki's final Bankai revealed in the Thousand-Year Blood War arc?", open: true, ans: "tensa zangetsu", aliases: ["true tensa zangetsu","merged tensa zangetsu"] },
    { q: "Name the five Royal Guard members (Squad Zero) in Bleach. List any two of their names.", open: true, ans: "ichibei hyosube", aliases: ["nimaiya oetsu","kirio hikifune","tenjirou kirinji","senjumaru shutara","oetsu","hikifune","kirinji","shutara","hyosube"] },
    { q: "What is the name of the technique Yamamoto uses that burns with the heat of the Sun in his Bankai?", open: true, ans: "zanka no tachi", aliases: ["zanka no tachi higashi","ryujin jakka bankai"] },
  ],

  Naruto: [
    { q: "Which clan's Kekkei Genkai allows them to use the Wood Release (Mokuton)?", opts: ["Uchiha","Senju","Uzumaki","Hyuga"], ans: 1 },
    { q: "What is the name of the space-time jutsu used by Tobirama Senju?", opts: ["Hiraishin","Flying Thunder God","Kamui","Amenotejikara"], ans: 1 },
    { q: "Which Akatsuki member has the ability 'Edo Tensei' (Reanimation Jutsu)?", opts: ["Pain","Konan","Kabuto Yakushi (Orochimaru's tech)","Sasori"], ans: 2 },
    { q: "What is the name of the technique Minato used to seal the Nine-Tails?", opts: ["Dead Demon Consuming Seal","Eight Trigrams Sealing Style","Reaper Death Seal","Shiki Fujin"], ans: 0 },
    { q: "Which Tailed Beast is sealed inside Killer Bee?", opts: ["Seven-Tails","Eight-Tails","Five-Tails","Six-Tails"], ans: 1 },
    { q: "What is the name of Itachi's ultimate Genjutsu that traps a target in an infinite loop?", opts: ["Amaterasu","Tsukuyomi","Izanagi","Izanami"], ans: 3 },
    { q: "Which village was Nagato (Pain) originally from?", opts: ["Konoha","Kirigakure","Amegakure","Iwagakure"], ans: 2 },
    { q: "What is the name of Naruto's sage mode that uses natural energy?", opts: ["Six Paths Sage Mode","Toad Sage Mode","Kurama Mode","Baryon Mode"], ans: 1 },
    { q: "Which two clans formed the hidden leaf village (Konoha) together?", opts: ["Hyuga and Uchiha","Senju and Uchiha","Uzumaki and Senju","Nara and Akimichi"], ans: 1 },
    { q: "What is the exact name of the forbidden technique Sasuke learns that sacrifices his eye?", opts: ["Izanami","Izanagi","Susanoo","Kotoamatsukami"], ans: 1 },
    // ---- OPEN-ENDED ----
    { q: "What is the name of the mode Naruto uses in Boruto that drastically shortens his lifespan to defeat Isshiki?", open: true, ans: "baryon mode", aliases: ["baryon"] },
    { q: "Name the six paths of Pain that Nagato controlled. List any two.", open: true, ans: "deva path", aliases: ["naraka path","animal path","human path","asura path","preta path","yahiko","pain paths"] },
    { q: "What is the specific jutsu name that Minato Namikaze (Fourth Hokage) is famous for — his signature space-time technique?", open: true, ans: "flying thunder god", aliases: ["hiraishin no jutsu","flying raijin","hiraishin"] },
  ],

  JJK: [
    { q: "What is the name of the Domain Expansion used by Gojo Satoru?", opts: ["Unlimited Void","Malevolent Shrine","Coffin of the Iron Mountain","Chimera Shadow Garden"], ans: 0 },
    { q: "Which cursed technique does Kento Nanami use?", opts: ["Straw Doll Technique","Ratio Technique","Projection Sorcery","Ten Shadows Technique"], ans: 1 },
    { q: "What is Ryomen Sukuna's binding vow called that he forced on Itadori?", opts: ["Binding vow of the feast","Swear on my existence","Vow of Ten Seconds","Contract of the King"], ans: 2 },
    { q: "What is the name of Mahito's cursed technique?", opts: ["Divergent Fist","Idle Transfiguration","Black Flash","Slaughter Demon"], ans: 1 },
    { q: "Which Special Grade cursed spirit is known as the Disaster Flames?", opts: ["Hanami","Jogo","Dagon","Choso"], ans: 1 },
    { q: "What is the maximum number of cursed tools Yuta Okkotsu can imbue with cursed energy simultaneously?", opts: ["Unlimited — he uses Rika","1","5","He cannot imbue tools"], ans: 0 },
    { q: "In the Culling Game, what rule allows players to add new rules?", opts: ["Earn 100 points and spend them","Kill a player","Win 10 consecutive matches","Be voted by all players"], ans: 0 },
    { q: "What is the name of Choso's technique that fires hardened blood projectiles?", opts: ["Piercing Blood","Flowing Red Scale","Blood Meteorite","Convergence"], ans: 0 },
    { q: "Which sorcerer is known as the 'Disgraced One' and uses Projection Sorcery?", opts: ["Aoi Todo","Naobito Zenin","Naoya Zenin","Ogi Zenin"], ans: 1 },
    { q: "What cursed technique does Hakari Kinji use that involves a near-infinite loop of cursed energy?", opts: ["Jackpot — Idle Death Gamble","Rat Race","Lucky Draw","Death Roll"], ans: 0 },
    // ---- OPEN-ENDED ----
    { q: "What is the name of Sukuna's Domain Expansion?", open: true, ans: "malevolent shrine", aliases: ["fukuma mizuchi"] },
    { q: "Name the technique Gojo uses that makes his infinity process near infinite calculations, effectively stopping anything from touching him.", open: true, ans: "infinity", aliases: ["unlimited void","mukagen"] },
    { q: "What is the name of the ancient sorcerer clan that Megumi Fushiguro belongs to?", open: true, ans: "zenin", aliases: ["zenin clan","the zenin"] },
  ],

  DemonSlayer: [
    { q: "What is the name of Tanjiro's first Breathing Style he learns?", opts: ["Flame Breathing","Water Breathing","Sun Breathing","Wind Breathing"], ans: 1 },
    { q: "Who is the Flame Hashira at the start of the series?", opts: ["Mitsuri Kanroji","Rengoku Shinjuro","Kyojuro Rengoku","Flame Hashira Akaza"], ans: 2 },
    { q: "Which Demon holds the title of Upper Rank One?", opts: ["Doma","Akaza","Kokushibo","Muzan"], ans: 2 },
    { q: "What is the name of Nezuko's unique demon ability involving fire?", opts: ["Exploding Blood","Demon Fire","Crimson Lotus","Blood Burst Flame"], ans: 0 },
    { q: "Which Hashira uses Insect Breathing?", opts: ["Mitsuri Kanroji","Shinobu Kocho","Kanao Tsuyuri","Aoi Kanzaki"], ans: 1 },
    { q: "What is the name of the original Breathing Style that all others are derived from?", opts: ["Flame Breathing","Water Breathing","Sun Breathing (Hinokami Kagura)","Moon Breathing"], ans: 2 },
    { q: "Which Upper Moon demon was once a Demon Slayer Corps member and uses Moon Breathing?", opts: ["Akaza","Doma","Kokushibo","Gyokko"], ans: 2 },
    { q: "What type of weapon does the Sound Hashira Tengen Uzui wield?", opts: ["Twin katana","War drums","Dual Nichirin cleavers","A flute sword"], ans: 2 },
    { q: "What is the weakness of all demons besides sunlight?", opts: ["Holy water","Wisteria poison","Nichirin blades","Silver weapons"], ans: 2 },
    { q: "In the Swordsmith Village arc, which Upper Moon is defeated by Mist Breathing?", opts: ["Hantengu","Doma","Gyokko","Nakime"], ans: 2 },
    // ---- OPEN-ENDED ----
    { q: "What is the name of the final form of Sun Breathing that Tanjiro uses, described as the 'Thirteenth Form'?", open: true, ans: "thirteenth form", aliases: ["13th form","hinokami kagura thirteenth","the thirteenth","form thirteen"] },
    { q: "What is the name of the mark that elite Demon Slayers awaken that grants them enhanced power?", open: true, ans: "demon slayer mark", aliases: ["slayer mark","mark of the demon slayer"] },
    { q: "What is the full name of the final boss / demon lord of Demon Slayer?", open: true, ans: "muzan kibutsuji", aliases: ["muzan","kibutsuji"] },
  ],

  OnePiece: [
    { q: "What is the name of the legendary treasure that Gol D. Roger hid, setting off the Great Pirate Era?", opts: ["Poseidon","One Piece","Ancient Weapon","Void Century Scroll"], ans: 1 },
    { q: "Which type of Haki allows the user to see the future?", opts: ["Armament Haki","Conqueror's Haki","Advanced Observation Haki","Basic Observation Haki"], ans: 2 },
    { q: "What is the name of the world government's ultimate military force made of clones of the greatest pirates?", opts: ["Marines","Cipher Pol","Pacifista","SWORD"], ans: 2 },
    { q: "Who is the former Warlord known as 'Hawkeye' — the world's greatest swordsman?", opts: ["Dracule Mihawk","Shanks","Vista","Roronoa Zoro"], ans: 0 },
    { q: "What is the name of the road stones that together form a map to Laugh Tale?", opts: ["Poneglyph","Road Poneglyph","Ancient Stones","Log Stones"], ans: 1 },
    { q: "What is the true name of Luffy's Devil Fruit revealed in Wano?", opts: ["Gomu Gomu no Mi","Hito Hito no Mi, Model: Nika","Gum Gum Fruit","Sun God Fruit"], ans: 1 },
    { q: "Which of the Five Elders is described as the head of the world government's secret intelligence?", opts: ["Im-sama controls them directly","Saturn","Gorousei are equals","Imu's orders override all"], ans: 0 },
    { q: "What is the name of Big Mom's homie who is her own soul and manages her lifespan collection?", opts: ["Prometheus","Zeus","Napoleon","Hera"], ans: 1 },
    { q: "Which crew member of the Straw Hats awakened their Devil Fruit during the Egghead arc?", opts: ["Nami","Robin","Luffy (previously)","Jewelry Bonney"], ans: 3 },
    { q: "What is the name of Whitebeard's Devil Fruit that can create earthquakes?", opts: ["Jishi Jishi no Mi","Gura Gura no Mi","Umi Umi no Mi","Bari Bari no Mi"], ans: 1 },
    // ---- OPEN-ENDED ----
    { q: "What is the name of the final island where the One Piece is located, discovered only by Roger's crew?", open: true, ans: "laugh tale", aliases: ["raftel","laughtale"] },
    { q: "Name the three Ancient Weapons mentioned in One Piece. List at least two.", open: true, ans: "poseidon", aliases: ["pluton","uranus","ancient weapons"] },
    { q: "What is the name of the technique where Zoro uses his three swords and cuts with his mouth as well — his signature powerful move?", open: true, ans: "oni giri", aliases: ["three sword style","santoryu oni giri","tiger trap","the 36 pound cannon","three thousand worlds"] },
  ],

  AOT: [
    { q: "What is the name of the power that allows Eren to control previous and future Titans?", opts: ["Founding Titan","Attack Titan","War Hammer Titan","Coordinate"], ans: 0 },
    { q: "Which Titan has the ability to harden its skin to near-indestructible levels?", opts: ["Jaw Titan","Cart Titan","Armored Titan","Beast Titan"], ans: 2 },
    { q: "Who is the 'Owl' — the original holder of the Attack Titan before Grisha?", opts: ["Zeke Yeager","Eren Kruger","Tom Ksaver","Rod Reiss"], ans: 1 },
    { q: "What is the name of the injection used to transform a human into a mindless Titan?", opts: ["Titan serum","Pure Titan serum","Spinal fluid injection","Marleyan injection"], ans: 2 },
    { q: "In which arc does Eren first transforms into the Attack Titan?", opts: ["Clash of the Titans","Trost District arc","Female Titan arc","Return to Shiganshina"], ans: 1 },
    { q: "What is the name of the secret organization within the Survey Corps revealed to be controlling the monarchy?", opts: ["The Reiss family","The First King's will","The Interior First Squad","The Royal Government"], ans: 2 },
    { q: "Which titan power does Ymir (the Jaw Titan girl) possess?", opts: ["Female Titan","Jaw Titan","Cart Titan","Founding Titan"], ans: 1 },
    { q: "What is the name of the Battle of Heaven and Earth technique / transformation Eren uses at Fort Salta?", opts: ["Titan Rumbling","The Great Titan War","Titan Scream","Wall Titan Release"], ans: 0 },
    { q: "Who ultimately kills Eren Yeager?", opts: ["Levi Ackerman","Mikasa Ackerman","Armin Arlert","Reiner Braun"], ans: 1 },
    { q: "Which Marleyan warrior candidate betrays Marley and joins Paradis?", opts: ["Porco Galliard","Colt Grice","Falco Grice","Gabi Braun"], ans: 2 },
    // ---- OPEN-ENDED ----
    { q: "What is the name of the catastrophic event Eren initiates by activating the Wall Titans to march across the world?", open: true, ans: "the rumbling", aliases: ["rumbling","wall titan march","great rumbling"] },
    { q: "What is the name of the island / nation on which Paradis is located that Marley considers their enemy?", open: true, ans: "paradis island", aliases: ["paradis","eldia","island of paradis"] },
    { q: "Who was the original founder of the Titan power — the figure from whom all titans descend? (Hint: She made a deal with the earth worm)", open: true, ans: "ymir fritz", aliases: ["ymir","the first ymir","subject of ymir"] },
  ],

  VinlandSaga: [
    { q: "Who is the legendary warrior and explorer that Thorfinn's father Thors served under?", opts: ["Askeladd","Floki","Sweyn","Bjorn"], ans: 0 },
    { q: "What is the name of Thors' homeland from which he deserted the Jomsviking?", opts: ["Iceland","Denmark","Norway","Ireland"], ans: 0 },
    { q: "Who kills Thors at the beginning of the series?", opts: ["Floki","Askeladd","Bjorn","King Sweyn"], ans: 0 },
    { q: "What warrior society did Thors formerly belong to before faking his death?", opts: ["The Varangian Guard","The Jomsviking","The Huscarls","The Berserkers"], ans: 1 },
    { q: "What is the name of the prince that Askeladd vows to protect throughout the series?", opts: ["Harald","Canute","Sweyn","Halfdan"], ans: 1 },
    { q: "In Season 2, where does Thorfinn work as a slave?", opts: ["Frankia","Ketil's farm in Denmark","Ireland","England"], ans: 1 },
    { q: "What does Thorfinn eventually dream of building — the 'land with no war'?", opts: ["A new Viking kingdom","Vinland","A kingdom in Frankia","A monastery"], ans: 1 },
    { q: "Who is the snake-like, deceptive battle leader among Askeladd's band known for cunning over strength?", opts: ["Bjorn","Atli","Askeladd himself","Thorkell"], ans: 2 },
    { q: "Which historical figure does Canute eventually become?", opts: ["King Canute of Denmark only","Canute the Great — King of England, Denmark and Norway","King of Norway only","High King of Scandinavia"], ans: 1 },
    { q: "What is the name of Thorfinn's father's ultimate philosophy that he tried to pass on?", opts: ["The warrior's code","True warrior has no enemies","Strength above all","Only the strong survive"], ans: 1 },
    // ---- OPEN-ENDED ----
    { q: "What is the real name of 'Askeladd', the Welsh prince and mercenary leader?", open: true, ans: "lucius artorius castus", aliases: ["lucius","artorius","lucius artorius","askeladd real name"] },
    { q: "In Norse exploration history, what is 'Vinland' believed to correspond to in the real world?", open: true, ans: "north america", aliases: ["newfoundland","canada","north american continent","americas"] },
    { q: "What is the name of the enormous, near-invincible warrior who is Thorkell's rival — known for incredible strength and serving the Danish king?", open: true, ans: "thorkell", aliases: ["thorkell the tall","thorkell","bjorn"] },
  ],
};

// ===== BADGE TIERS =====
function getBadge(score) {
  if (score >= 1500) return "🔥 Transcendent";
  if (score >= 1100) return "🥇 Legendary";
  if (score >= 800)  return "🥈 Elite";
  if (score >= 500)  return "🥉 Skilled";
  if (score >= 300)  return "⭐ Rising";
  return "🎌 Rookie";
}

// ===== STATE =====
let currentPage = 'home';
let playerName = localStorage.getItem('aqp_player') || '';
let currentCategory = '';
let isSpecial = false;
let questions = [];
let currentQ = 0;
let score = 0;
let timeBonus = 0;
let correct = 0;
let wrong = 0;
let timerInterval = null;
let timeLeft = 15;
let answered = false;
let quizReturnPage = 'play'; // which page to return to on Play Again

// ===== DOM =====
const pages = document.querySelectorAll('.page');
const navBtns = document.querySelectorAll('.nav-btn');

// ===== NAV =====
navBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(btn.dataset.page);
  });
});

function navigateTo(pg) {
  pages.forEach(p => p.classList.remove('active'));
  navBtns.forEach(b => b.classList.remove('active'));
  document.getElementById(`page-${pg}`).classList.add('active');
  document.querySelector(`.nav-btn[data-page="${pg}"]`).classList.add('active');
  currentPage = pg;
  if (pg === 'leaderboard') renderLeaderboard('All');
}

// ===== HOME BUTTONS =====
document.getElementById('startBtn').addEventListener('click', () => navigateTo('play'));
document.getElementById('specialsBtn').addEventListener('click', () => navigateTo('specials'));
document.getElementById('specialsTeaserBtn').addEventListener('click', () => navigateTo('specials'));

document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    navigateTo('play');
    startCategory(card.dataset.cat, false);
  });
});

// ===== PLAY: CATEGORY SELECTION =====
document.querySelectorAll('.play-cat-btn').forEach(btn => {
  btn.addEventListener('click', () => startCategory(btn.dataset.cat, false));
});

// ===== SPECIALS: SERIES BUTTONS =====
document.querySelectorAll('.start-special-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    navigateTo('play');
    startCategory(btn.dataset.series, true);
  });
});

// ===== START CATEGORY / SERIES =====
function startCategory(cat, special) {
  currentCategory = cat;
  isSpecial = special;
  quizReturnPage = special ? 'specials' : 'play';

  if (!playerName) {
    showModal();
    document.getElementById('confirmNameBtn').onclick = () => {
      const val = document.getElementById('player-name').value.trim();
      playerName = val || 'Otaku';
      localStorage.setItem('aqp_player', playerName);
      hideModal();
      beginQuiz();
    };
  } else {
    beginQuiz();
  }
}

function showModal() { document.getElementById('name-modal').classList.remove('hidden'); }
function hideModal() { document.getElementById('name-modal').classList.add('hidden'); }

// ===== BEGIN QUIZ =====
function beginQuiz() {
  showScreen('quiz-screen');

  if (isSpecial) {
    // Use full special bank (already ordered: MCQ first, open last)
    questions = [...specialBank[currentCategory]];
  } else {
    questions = shuffle([...questionBank[currentCategory]]).slice(0, 10);
  }

  currentQ = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  timeBonus = 0;
  updateScoreDisplay();
  loadQuestion();
}

// ===== LOAD QUESTION =====
function loadQuestion() {
  clearInterval(timerInterval);
  answered = false;
  const q = questions[currentQ];
  const total = questions.length;

  document.getElementById('cat-label').textContent = `⚡ ${currentCategory}`;
  document.getElementById('q-count').textContent = `Q ${currentQ + 1}/${total}`;
  document.getElementById('progress-fill').style.width = `${(currentQ / total) * 100}%`;
  document.getElementById('question-text').textContent = q.q;

  const openBadge = document.getElementById('open-badge');
  const optionsGrid = document.getElementById('options-grid');
  const openArea = document.getElementById('open-input-area');
  const openInput = document.getElementById('open-answer-input');

  hideFeedback();

  if (q.open) {
    // Open-ended question
    openBadge.classList.remove('hidden');
    optionsGrid.innerHTML = '';
    optionsGrid.classList.add('hidden');
    openArea.classList.remove('hidden');
    openInput.value = '';
    openInput.focus();

    // Allow Enter key submission
    openInput.onkeydown = (e) => { if (e.key === 'Enter') submitOpenAnswer(); };
    document.getElementById('submitOpenBtn').onclick = submitOpenAnswer;

    startTimer(30); // More time for open questions
  } else {
    // MCQ question
    openBadge.classList.add('hidden');
    optionsGrid.classList.remove('hidden');
    openArea.classList.add('hidden');
    optionsGrid.innerHTML = '';

    q.opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${['A','B','C','D'][i]}. ${opt}`;
      btn.addEventListener('click', () => selectAnswer(i, btn));
      optionsGrid.appendChild(btn);
    });

    startTimer(15);
  }
}

// ===== MCQ ANSWER =====
function selectAnswer(idx, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const q = questions[currentQ];
  const allBtns = document.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  if (idx === q.ans) {
    btn.classList.add('correct');
    const bonus = timeLeft * 10;
    score += 100 + bonus;
    timeBonus += bonus;
    correct++;
    showFeedback(`✅ Correct! +${100 + bonus} pts`, 'correct-fb');
  } else {
    btn.classList.add('wrong');
    allBtns[q.ans].classList.add('correct');
    wrong++;
    showFeedback(`❌ Wrong! Correct: ${q.opts[q.ans]}`, 'wrong-fb');
  }

  updateScoreDisplay();
  setTimeout(nextQuestion, 2000);
}

// ===== OPEN-ENDED ANSWER =====
function submitOpenAnswer() {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const q = questions[currentQ];
  const input = document.getElementById('open-answer-input');
  const userAns = input.value.trim().toLowerCase();
  const correctAns = q.ans.toLowerCase();
  const aliases = (q.aliases || []).map(a => a.toLowerCase());

  const allAnswers = [correctAns, ...aliases];
  const isCorrect = allAnswers.some(a => userAns.includes(a) || a.includes(userAns) && userAns.length > 3);

  input.disabled = true;
  document.getElementById('submitOpenBtn').disabled = true;

  if (isCorrect) {
    input.style.borderColor = 'var(--cyan)';
    const bonus = timeLeft * 8;
    score += 150 + bonus; // Open questions worth more
    timeBonus += bonus;
    correct++;
    showFeedback(`✅ Correct! +${150 + bonus} pts (Open Question Bonus!)`, 'correct-fb');
  } else {
    input.style.borderColor = 'var(--pink)';
    wrong++;
    showFeedback(`❌ Wrong! Expected: "${q.ans}"`, 'wrong-fb');
  }

  updateScoreDisplay();
  setTimeout(() => {
    input.style.borderColor = '';
    input.disabled = false;
    document.getElementById('submitOpenBtn').disabled = false;
    nextQuestion();
  }, 2500);
}

// ===== TIMER =====
function startTimer(seconds) {
  timeLeft = seconds;
  document.getElementById('timer').textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    const timerEl = document.getElementById('timer');
    if (timeLeft <= 5) timerEl.style.color = 'var(--pink)';
    else timerEl.style.color = 'var(--accent2)';

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!answered) timeExpired();
    }
  }, 1000);
}

function timeExpired() {
  answered = true;
  const q = questions[currentQ];

  if (q.open) {
    wrong++;
    showFeedback(`⏱ Time's up! Answer: "${q.ans}"`, 'wrong-fb');
    const input = document.getElementById('open-answer-input');
    input.disabled = true;
    document.getElementById('submitOpenBtn').disabled = true;
    setTimeout(() => {
      input.disabled = false;
      document.getElementById('submitOpenBtn').disabled = false;
      nextQuestion();
    }, 2500);
  } else {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    allBtns[q.ans].classList.add('correct');
    wrong++;
    showFeedback(`⏱ Time's up! Answer: ${q.opts[q.ans]}`, 'wrong-fb');
    setTimeout(nextQuestion, 2000);
  }
}

// ===== NEXT QUESTION =====
function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}

// ===== END QUIZ =====
function endQuiz() {
  clearInterval(timerInterval);
  saveToLeaderboard();
  showScreen('summary-screen');
  document.getElementById('final-score').textContent = score;
  document.getElementById('correct-count').textContent = correct;
  document.getElementById('wrong-count').textContent = wrong;
  document.getElementById('time-bonus').textContent = timeBonus;
  document.getElementById('summary-msg').textContent = getSummaryMsg();
  document.getElementById('progress-fill').style.width = '100%';
}

function getSummaryMsg() {
  const pct = (correct / questions.length) * 100;
  if (pct === 100) return "🔥 Perfect score! You're a transcendent anime god!";
  if (pct >= 80)  return "🌟 Outstanding! Almost flawless!";
  if (pct >= 60)  return "😎 Nice work! Keep leveling up!";
  if (pct >= 40)  return "📚 Not bad! More episodes to watch?";
  return "😅 Keep training, warrior!";
}

function updateScoreDisplay() {
  document.getElementById('score').textContent = score;
}

function showFeedback(msg, cls) {
  const bar = document.getElementById('feedback-bar');
  bar.textContent = msg;
  bar.className = `feedback-bar ${cls}`;
}

function hideFeedback() {
  document.getElementById('feedback-bar').className = 'feedback-bar hidden';
}

// ===== PLAY AGAIN / LEADERBOARD BUTTONS =====
document.getElementById('playAgainBtn').addEventListener('click', () => {
  // Return to the right selection screen
  navigateTo(quizReturnPage);
  if (quizReturnPage === 'play') {
    showScreen('cat-select-screen');
  }
});

document.getElementById('viewLbBtn').addEventListener('click', () => {
  navigateTo('leaderboard');
});

// ===== LEADERBOARD =====
function saveToLeaderboard() {
  const all = JSON.parse(localStorage.getItem('aqp_lb') || '[]');
  all.push({
    name: playerName,
    category: currentCategory,
    score: score,
    badge: getBadge(score),
    special: isSpecial,
    date: new Date().toLocaleDateString()
  });
  all.sort((a, b) => b.score - a.score);
  localStorage.setItem('aqp_lb', JSON.stringify(all.slice(0, 30)));
}

function renderLeaderboard(filter) {
  const all = JSON.parse(localStorage.getItem('aqp_lb') || '[]');
  const filtered = filter === 'All' ? all : all.filter(e => e.category === filter);
  const tbody = document.getElementById('lb-body');
  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:2rem;">No entries yet. Play to get on the board! 🎮</td></tr>`;
    return;
  }

  filtered.forEach((entry, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${escapeHtml(entry.name)}${entry.special ? ' ⭐' : ''}</td>
      <td>${entry.category}</td>
      <td style="color:var(--cyan);font-weight:800;">${entry.score}</td>
      <td>${entry.badge}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.querySelectorAll('.lb-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lb-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderLeaderboard(btn.dataset.cat);
  });
});

// ===== FORUM =====
document.getElementById('postBtn').addEventListener('click', () => {
  const input = document.getElementById('forum-input');
  const text = input.value.trim();
  if (!text) return;
  const container = document.querySelector('.forum-container');
  const newPost = document.createElement('div');
  newPost.className = 'forum-post';
  newPost.innerHTML = `
    <div class="post-avatar">😊</div>
    <div class="post-body">
      <strong>${escapeHtml(playerName || 'You')}</strong> <span class="post-time">just now</span>
      <p>${escapeHtml(text)}</p>
      <button class="post-reply">Reply</button>
    </div>
  `;
  container.insertBefore(newPost, document.querySelector('.new-post-box'));
  input.value = '';
});

// ===== HELPERS =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== INIT =====
renderLeaderboard('All');