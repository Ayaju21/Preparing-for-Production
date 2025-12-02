const shuffle = (cards) => {
  if (!Array.isArray(cards)) {
    return [];
  }

  let current = cards.length;
  const newCardsArray = [...cards];

  while (current > 0) {
    const randomIndex = Math.floor(Math.random() * current);
    current -= 1;

    const temp = newCardsArray[current];
    newCardsArray[current] = newCardsArray[randomIndex];
    newCardsArray[randomIndex] = temp;
  }

  return newCardsArray;
};

export default shuffle;
