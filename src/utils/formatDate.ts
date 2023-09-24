const formatDate = (date: string): string => {
  if (!date || date.length < 10 || !date.includes('T')) {
    return date;
  }
  return date.slice(0, 10).split('-').join('.');
};

export default formatDate;
