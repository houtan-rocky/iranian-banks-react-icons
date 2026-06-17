export type Category = 'all' | 'banks' | 'payment' | 'psp' | 'network' | 'merged';

export interface IconEntry {
  key: string;
  displayName: string;
  colorIcon: string;
  monoIcon?: string;
  category: Exclude<Category, 'all'>;
}

export const ICONS: IconEntry[] = [
  // State & Traditional Banks
  { key: 'Melli', displayName: 'Bank Melli', colorIcon: 'MelliColorIcon', monoIcon: 'MelliIcon', category: 'banks' },
  { key: 'Mellat', displayName: 'Bank Mellat', colorIcon: 'MellatColorIcon', monoIcon: 'MellatIcon', category: 'banks' },
  { key: 'Saderat', displayName: 'Bank Saderat', colorIcon: 'SaderatColorIcon', monoIcon: 'SaderatIcon', category: 'banks' },
  { key: 'Tejarat', displayName: 'Bank Tejarat', colorIcon: 'TejaratColorIcon', monoIcon: 'TejaratIcon', category: 'banks' },
  { key: 'Sepah', displayName: 'Bank Sepah', colorIcon: 'SepahColorIcon', monoIcon: 'SepahIcon', category: 'banks' },
  { key: 'Keshavarzi', displayName: 'Bank Keshavarzi', colorIcon: 'KeshavarziColorIcon', monoIcon: 'KeshavarziIcon', category: 'banks' },
  { key: 'Maskan', displayName: 'Bank Maskan', colorIcon: 'MaskanColorIcon', monoIcon: 'MaskanIcon', category: 'banks' },
  { key: 'Refah', displayName: 'Bank Refah', colorIcon: 'RefahColorIcon', monoIcon: 'RefahIcon', category: 'banks' },
  { key: 'Post', displayName: 'Post Bank', colorIcon: 'PostColorIcon', monoIcon: 'PostIcon', category: 'banks' },
  { key: 'SanatMadan', displayName: 'Bank Sanat & Madan', colorIcon: 'SanatMadanColorIcon', monoIcon: 'SanatMadanIcon', category: 'banks' },
  { key: 'TaavonEslami', displayName: 'Taavon Eslami', colorIcon: 'TaavonEslamiColorIcon', monoIcon: 'TaavonEslamiIcon', category: 'banks' },
  // Private Banks
  { key: 'Pasargad', displayName: 'Bank Pasargad', colorIcon: 'PasargadColorIcon', monoIcon: 'PasargadIcon', category: 'banks' },
  { key: 'Saman', displayName: 'Bank Saman', colorIcon: 'SamanColorIcon', monoIcon: 'SamanIcon', category: 'banks' },
  { key: 'Parsian', displayName: 'Bank Parsian', colorIcon: 'ParsianColorIcon', monoIcon: 'ParsianIcon', category: 'banks' },
  { key: 'Ayandeh', displayName: 'Bank Ayandeh', colorIcon: 'AyandehColorIcon', monoIcon: 'AyandehIcon', category: 'banks' },
  { key: 'Karafarin', displayName: 'Bank Karafarin', colorIcon: 'KarafarinColorIcon', monoIcon: 'KarafarinIcon', category: 'banks' },
  { key: 'EghtesadNovin', displayName: 'Eghtesad Novin', colorIcon: 'EghtesadNovinColorIcon', monoIcon: 'EghtesadNovinIcon', category: 'banks' },
  { key: 'Sina', displayName: 'Bank Sina', colorIcon: 'SinaColorIcon', monoIcon: 'SinaIcon', category: 'banks' },
  { key: 'Shahr', displayName: 'Bank Shahr', colorIcon: 'ShahrColorIcon', monoIcon: 'ShahrIcon', category: 'banks' },
  { key: 'Gardeshgari', displayName: 'Bank Gardeshgari', colorIcon: 'GardeshgariColorIcon', monoIcon: 'GardeshgariIcon', category: 'banks' },
  { key: 'KhavarMianeh', displayName: 'Bank Khavar Mianeh', colorIcon: 'KhavarMianehColorIcon', monoIcon: 'KhavarMianehIcon', category: 'banks' },
  { key: 'Dey', displayName: 'Bank Dey', colorIcon: 'DeyColorIcon', monoIcon: 'DeyIcon', category: 'banks' },
  { key: 'Caspian', displayName: 'Bank Caspian', colorIcon: 'CaspianColorIcon', monoIcon: 'CaspianIcon', category: 'banks' },
  { key: 'Sarmayeh', displayName: 'Bank Sarmayeh', colorIcon: 'SarmayehColorIcon', monoIcon: 'SarmayehIcon', category: 'banks' },
  { key: 'Resalat', displayName: 'Bank Resalat', colorIcon: 'ResalatColorIcon', monoIcon: 'ResalatIcon', category: 'banks' },
  { key: 'IranZamin', displayName: 'Iran Zamin Bank', colorIcon: 'IranZaminColorIcon', monoIcon: 'IranZaminIcon', category: 'banks' },
  { key: 'IranEurope', displayName: 'Iran Europe Bank', colorIcon: 'IranEuropeColorIcon', monoIcon: 'IranEuropeIcon', category: 'banks' },
  { key: 'IranVenezuela', displayName: 'Iran Venezuela Bank', colorIcon: 'IranVenezuelaColorIcon', monoIcon: 'IranVenezuelaIcon', category: 'banks' },
  { key: 'Noor', displayName: 'Noor Bank', colorIcon: 'NoorColorIcon', monoIcon: 'NoorIcon', category: 'banks' },
  { key: 'MehrIran', displayName: 'Mehr Iran Bank', colorIcon: 'MehrIranColorIcon', monoIcon: 'MehrIranIcon', category: 'banks' },
  { key: 'Melall', displayName: 'Bank Melall', colorIcon: 'MelallColorIcon', monoIcon: 'MelallIcon', category: 'banks' },
  { key: 'Tosee', displayName: 'Bank Tosee', colorIcon: 'ToseeColorIcon', monoIcon: 'ToseeIcon', category: 'banks' },
  { key: 'ToseeSaderat', displayName: 'Tosee Saderat', colorIcon: 'ToseeSaderatColorIcon', monoIcon: 'ToseeSaderatIcon', category: 'banks' },
  { key: 'ToseeTaavon', displayName: 'Tosee Taavon', colorIcon: 'ToseeTaavonColorIcon', monoIcon: 'ToseeTaavonIcon', category: 'banks' },
  { key: 'StandardChartered', displayName: 'Standard Chartered', colorIcon: 'StandardCharteredColorIcon', monoIcon: 'StandardCharteredIcon', category: 'banks' },
  // Digital / Neo Banks
  { key: 'BluBank', displayName: 'BluBank', colorIcon: 'BluBankColorIcon', monoIcon: 'BluBankIcon', category: 'banks' },
  { key: 'Bankino', displayName: 'Bankino', colorIcon: 'BankinoColorIcon', monoIcon: 'BankinoIcon', category: 'banks' },
  { key: 'Futurebank', displayName: 'Future Bank', colorIcon: 'FuturebankColorIcon', monoIcon: 'FuturebankIcon', category: 'banks' },
  // Payment Platforms
  { key: 'Zarrinpal', displayName: 'Zarrinpal', colorIcon: 'ZarrinpalColorIcon', monoIcon: 'ZarrinpalIcon', category: 'payment' },
  { key: 'PayIr', displayName: 'Pay.ir', colorIcon: 'PayIrColorIcon', monoIcon: 'PayIrIcon', category: 'payment' },
  { key: 'Payping', displayName: 'Payping', colorIcon: 'PaypingColorIcon', monoIcon: 'PaypingIcon', category: 'payment' },
  { key: 'NextPay', displayName: 'NextPay', colorIcon: 'NextPayColorIcon', monoIcon: 'NextPayIcon', category: 'payment' },
  { key: 'Idpay', displayName: 'IDPay', colorIcon: 'IdpayColorIcon', monoIcon: 'IdpayIcon', category: 'payment' },
  { key: 'Vandar', displayName: 'Vandar', colorIcon: 'VandarColorIcon', monoIcon: 'VandarIcon', category: 'payment' },
  { key: 'Digipay', displayName: 'Digipay', colorIcon: 'DigipayColorIcon', monoIcon: 'DigipayIcon', category: 'payment' },
  { key: 'Zibal', displayName: 'Zibal', colorIcon: 'ZibalColorIcon', monoIcon: 'ZibalIcon', category: 'payment' },
  { key: 'Hesabit', displayName: 'Hesabit', colorIcon: 'HesabitColorIcon', monoIcon: 'HesabitIcon', category: 'payment' },
  { key: 'AsanPardakht', displayName: 'Asan Pardakht', colorIcon: 'AsanPardakhtColorIcon', monoIcon: 'AsanPardakhtIcon', category: 'payment' },
  { key: 'SnappPay', displayName: 'SnappPay', colorIcon: 'SnappPayColorIcon', category: 'payment' },
  // PSPs
  { key: 'SamanKish', displayName: 'Saman Kish', colorIcon: 'SamanKishColorIcon', monoIcon: 'SamanKishIcon', category: 'psp' },
  { key: 'PasargadPep', displayName: 'Pasargad PEP', colorIcon: 'PasargadPepColorIcon', monoIcon: 'PasargadPepIcon', category: 'psp' },
  { key: 'Sadad', displayName: 'Sadad', colorIcon: 'SadadColorIcon', monoIcon: 'SadadIcon', category: 'psp' },
  // Financial Networks
  { key: 'Shaparak', displayName: 'Shaparak', colorIcon: 'ShaparakColorIcon', monoIcon: 'ShaparakIcon', category: 'network' },
  { key: 'BankMarkazi', displayName: 'Bank Markazi', colorIcon: 'BankMarkaziColorIcon', monoIcon: 'BankMarkaziIcon', category: 'network' },
  // Sepah Merged Banks
  { key: 'SepahMergedAnsar', displayName: 'Ansar (merged)', colorIcon: 'SepahMergedAnsarColorIcon', monoIcon: 'SepahMergedAnsarIcon', category: 'merged' },
  { key: 'SepahMergedGhavamin', displayName: 'Ghavamin (merged)', colorIcon: 'SepahMergedGhavaminColorIcon', monoIcon: 'SepahMergedGhavaminIcon', category: 'merged' },
  { key: 'SepahMergedHekmat', displayName: 'Hekmat (merged)', colorIcon: 'SepahMergedHekmatColorIcon', monoIcon: 'SepahMergedHekmatIcon', category: 'merged' },
  { key: 'SepahMergedKosar', displayName: 'Kosar (merged)', colorIcon: 'SepahMergedKosarColorIcon', monoIcon: 'SepahMergedKosarIcon', category: 'merged' },
  { key: 'SepahMergedMehrEghtesad', displayName: 'Mehr Eghtesad (merged)', colorIcon: 'SepahMergedMehrEghtesadColorIcon', monoIcon: 'SepahMergedMehrEghtesadIcon', category: 'merged' },
];

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'banks', label: 'Banks' },
  { id: 'payment', label: 'Payment' },
  { id: 'psp', label: 'PSPs' },
  { id: 'network', label: 'Networks' },
  { id: 'merged', label: 'Merged' },
];
