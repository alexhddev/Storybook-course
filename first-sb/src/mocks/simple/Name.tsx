import { getRandomName } from './Utils';

export const Name = () => {
  const name = getRandomName();

  return (
    <span style={{ 
      fontWeight: 'bold', 
      fontSize: '16px',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      {name}
    </span>
  );
};