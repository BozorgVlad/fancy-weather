const monthesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const weekDaysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekDaysEnFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekDaysRu = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const weekDaysRuFull = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const monthesRu = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Иля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const monthesBe = ['Студзеня', 'Лютага', 'Сакавiкa', 'Красавiкa', 'Мая', 'Чэрвеня', 'Лiпеня', 'Жнiўня', 'Верасня', 'Кастрычнiка', 'Лiстапада', 'Снежня'];
const weekDaysBe = ['Нд', 'Пн', 'Аў', 'Ср', 'Чц', 'Пт', 'Cб'];
const weekDaysBeFull = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятнiца', 'Субота'];
const weatherInfoEn = [{ name: 'Feels Like:', id: 1 }, { name: 'Wind:', id: 2 }, { name: 'Humidity:', id: 3 }];
const weatherInfoRu = [{ name: 'Ощущается как:', id: 1 }, { name: 'Ветер:', id: 2 }, { name: 'Влажность:', id: 3 }];
const weatherInfoBe = [{ name: 'Адчуваецца як:', id: 1 }, { name: 'Вецер:', id: 2 }, { name: 'Вільготнасць:', id: 3 }];
const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
const langNews = ['News', 'Новости', 'Навiны'];
const latitudeLang = ['Latitude', 'Широта', 'Шырата'];
const longitudeLang = ['Longitude', 'Долгота', 'Даўгата'];
const voiceLang = ['Voice control:', 'Гол. управление:', 'Гал. кіраванне:'];
const volumeLang = ['Volume:', 'Громкость:', 'Гучнасць:'];
const placeholderLang = ['Search city', 'Поиск города', 'Пошук горада'];
const warningLang = ['Voice input is not avaliable', 'Голсовой ввод недоступен', 'Галасавы ўвод недаступны'];
const conditionBe = {
  200: 'навальніца з невялікім дажджом',
  201: 'навальніца з дажджом',
  202: 'навальніца з моцным дажджом',
  210: 'невялікая навальніца',
  211: 'навальніца',
  212: 'моцная навальніца',
  221: 'навальніца',
  230: 'навальніца з невялікай імглой',
  231: 'навальніца з імглой',
  232: 'навальніца з моцнай імглой',
  300: 'невялікая імгла',
  301: 'лёгкі дождж, імгла',
  302: 'кароткачасовы дождж',
  310: 'невялікая імгла з дажджом',
  311: 'лёгкі дождж',
  312: 'лёгкі інтэнсіўны дождж',
  313: 'кароткачасовы дождж з імглой',
  314: 'моцны кароткачасовы дождж з імглой',
  321: 'кароткачасовая імгла',
  500: 'лёгкі дождж',
  501: 'умераны дождж',
  502: 'моцны дождж',
  503: 'вельмі моцны дождж',
  504: 'лівень',
  511: 'дождж з градам',
  520: 'лёгкі кароткачасовы дождж',
  521: 'кароткачасовы дождж',
  522: 'моцны кароткачасовы дождж',
  531: 'кароткачасовыя дажджы',
  600: 'невялікі снег',
  601: 'снег',
  602: 'моцны снег',
  611: 'мокры снег',
  612: 'кароткачасовы мокры снег',
  615: 'лёгкі снег з дажджом',
  616: 'снег з дажджом',
  620: 'лёгкі кароткачасовы снег',
  621: 'кароткачасовы снег',
  622: 'моцны кароткачасовы снег',
  701: 'туман',
  711: 'дым',
  721: 'лёгкі туман',
  731: 'віхор пяску і пылу',
  741: 'туман',
  751: 'пясок',
  761: 'пыл',
  762: 'вулканічны попел',
  771: 'шквалы',
  781: 'тарнада',
  800: 'ясна',
  801: 'невялікая воблачнасць',
  802: 'воблачна',
  803: 'пераменная воблачнасць',
  804: 'пахмурна',
};

export {
  monthesEn, weekDaysEn, weekDaysRu, monthesRu, weatherInfoEn, weatherInfoRu,
  weatherInfoBe, conditionBe, monthesBe, weekDaysBeFull, weekDaysRuFull, weekDaysEnFull,
  weekDaysBe, seasons, langNews, latitudeLang, longitudeLang, voiceLang, volumeLang, warningLang,
  placeholderLang,
};
