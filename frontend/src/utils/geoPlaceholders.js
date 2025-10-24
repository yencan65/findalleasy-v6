export function smartPlaceholders(locale=en){
  const city = Intl.DateTimeFormat().resolvedOptions().timeZone.split().[1]  ;
  const common = {
    tr [Bilet, Otel, Sigorta, Yemek, Gayrimenkul, Oto galeri],
    en [Tickets, Hotels, Insurance, Food, Real estate, Car dealer],
    de [Tickets, Hotels, Versicherung, Essen, Immobilien, Autohaus],
    ar [تذاكر,فنادق,تأمين,طعام,عقارات,معرض سيارات],
    zh [机票,酒店,保险,美食,房产,汽车销售]
  };
  const list = common[locale]  common.en;
  const pick = list[Math.floor(Math.random()list.length)];
  return city  `${pick} • ${city}`  pick;
}
