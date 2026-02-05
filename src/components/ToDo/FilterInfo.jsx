import { Input } from './Styles';

export const Filter = ({ value, onChange }) => (
  <div style={{ marginBottom: '20px' }}>
    <p>Пошук за текстом:</p>
    <Input type="text" value={value} onChange={onChange} style={{ width: '100%', boxSizing: 'border-box' }} />
  </div>
);

export const Info = ({ total, completed }) => (
  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', fontWeight: 'bold' }}>
    <p>Загалом: {total}</p>
    <p>Виконано: {completed}</p>
  </div>
);