import styled from 'styled-components';

const StickerCard = styled.li`
  cursor: pointer;
  background: white;
  padding: 15px;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  border: 2px solid ${props => (props.isSelected ? '#4CAF50' : 'transparent')};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  display: block;
`;

const Sticker = ({ img, label, onSelect, isSelected }) => (
  <StickerCard onClick={() => onSelect(label)} isSelected={isSelected}>
    <Image src={img} alt={label} />
  </StickerCard>
);

export default Sticker;