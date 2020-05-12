const MONTHS_MAP = {
  januar: 'january',
  februar: 'february',
  mars: 'march',
  april: 'april',
  mai: 'may',
  juni: 'june',
  juli: 'july',
  august: 'august',
  september: 'september',
  oktober: 'october',
  november: 'november',
  desember: 'december',
};

const formatDate = date => {
  const month = date.split(' ')[1];
  const enDate = date.replace(month, MONTHS_MAP[month]);
  return new Date(enDate);
};

export const fetchArticles = (urls, setData, setError) => {
  Promise.all(
    urls.map(url =>
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => data.articles)
    )
  )
    .then(data => {
      const flatData = data.flat();
      setData(flatData.map(({ date, ...rest }) => ({ ...rest, date, enDate: formatDate(date) })));
      setError(false);
    })
    .catch(() => {
      setError(true);
    });
};
