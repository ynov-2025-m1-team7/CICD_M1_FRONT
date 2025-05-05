const SortByDate = (rawData) => {
    if (!Array.isArray(rawData)) return [];
  
    // Supprimer les doublons par ID
    const uniqueData = Array.from(new Set(rawData.map(item => item.id)))
      .map(id => rawData.find(item => item.id === id))
      .filter(item => item?.date && !isNaN(new Date(item.date)));
  
    // Regrouper par date
    const groupedByDate = uniqueData.reduce((acc, item) => {
      const date = new Date(item.date).toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + 1;
      return acc;
    }, {});
  
    // Transformer, trier, puis limiter à 7 dates
    const dataByDateArray = Object.entries(groupedByDate)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 7); // ← limite à 7 éléments
  
    return { uniqueData, dataByDateArray };
};

const SortByFeeling = (rawData) => {
    if (!Array.isArray(rawData)) return { low: 0, medium: 0, high: 0 };

    // Filtrer uniquement les items valides avec un score numérique
    const validData = rawData.filter(item => typeof item.score === 'number');

    const total = validData.length;

    if (total === 0) return { low: 0, medium: 0, high: 0 };

    const low = (validData.filter(item => item.score < 0.33).length / total) * 100;
    const medium = (validData.filter(item => item.score >= 0.33 && item.score <= 0.66).length / total) * 100;
    const high = (validData.filter(item => item.score > 0.66).length / total) * 100;

    // Retourner des pourcentages arrondis à 1 décimale
    return {
        low: parseFloat(low.toFixed(1)),
        medium: parseFloat(medium.toFixed(1)),
        high: parseFloat(high.toFixed(1)),
    };
};

  
export { SortByDate, SortByFeeling };
  