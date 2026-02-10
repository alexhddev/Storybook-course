const SHORT_NAMES = [
  'Alex',
  'Ben',
  'Cal',
  'Dan',
  'Eve'
];

export function getRandomName(): string {
  const randomIndex = Math.floor(Math.random() * SHORT_NAMES.length);
  return SHORT_NAMES[randomIndex];
}
