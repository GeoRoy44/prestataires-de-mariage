export interface StockPhoto { id: string; author: string; alt: string; }

export const stockPhotos: Record<string, StockPhoto> = {
  'f_OHqCqfLR4': { id: 'f_OHqCqfLR4', author: 'Sabesh Photography LTD', alt: 'Un couple de mariés enlacé en extérieur' },
  'ZBu-tVLMBto': { id: 'ZBu-tVLMBto', author: 'Sabesh Photography LTD', alt: 'Un couple de jeunes mariés pose pour une photo' },
  'aQB-lxv0y-Y': { id: 'aQB-lxv0y-Y', author: 'Sabesh Photography LTD', alt: 'Un couple pose pour sa photo de mariage' },
  'SljsxQcjZl0': { id: 'SljsxQcjZl0', author: 'Tom The Photographer', alt: 'Un couple de mariés en noir et blanc avec un bouquet' },
  'IAXH4tMEx_s': { id: 'IAXH4tMEx_s', author: 'Jen Vazquez', alt: 'Une table de mariage décorée de fleurs et de bougies' },
  '3nj-jsGwjVg': { id: '3nj-jsGwjVg', author: 'Bruno Ngarukiye', alt: 'Une table de réception ornée de compositions florales' },
  'slQQXlY-3ww': { id: 'slQQXlY-3ww', author: 'Cody Chan', alt: 'Une mariée tenant un bouquet coloré' },
};

const pools: Record<string, string[]> = {
  'photographie-video': ['ZBu-tVLMBto', 'aQB-lxv0y-Y', 'SljsxQcjZl0', 'f_OHqCqfLR4'],
  'reception-restauration': ['IAXH4tMEx_s', '3nj-jsGwjVg'],
  'ambiance-decoration': ['slQQXlY-3ww', '3nj-jsGwjVg', 'IAXH4tMEx_s'],
  'organisation-accompagnement': ['SljsxQcjZl0', 'ZBu-tVLMBto', 'slQQXlY-3ww'],
};

export function pickPhoto(articleId: string, category: string): StockPhoto {
  const pool = pools[category] ?? pools['photographie-video'];
  let hash = 0;
  for (const char of articleId) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return stockPhotos[pool[hash % pool.length]];
}

export const photoPageUrl = (id: string) => `https://unsplash.com/photos/${id}`;
export const photoImageUrl = (id: string, width = 960) => `https://unsplash.com/photos/${id}/download?force=true&w=${width}`;
