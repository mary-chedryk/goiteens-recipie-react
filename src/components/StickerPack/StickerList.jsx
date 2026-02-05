import styled from 'styled-components';
import Sticker from './Sticker';

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const StickerList = ({ items, onSelect, selectedLabel }) => (
  <List>
    {items.map(item => (
      <Sticker
        key={item.label}
        img={item.img}
        label={item.label}
        onSelect={onSelect}
        isSelected={selectedLabel === item.label}
      />
    ))}
  </List>
);

export default StickerList;