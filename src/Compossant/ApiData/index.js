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
  
  export { SortByDate };
  