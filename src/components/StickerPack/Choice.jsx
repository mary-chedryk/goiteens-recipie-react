import styled from 'styled-components';

const ChoiceText = styled.h1`
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  margin-bottom: 20px;
`;

const Choice = ({ label }) => (
  <ChoiceText>
    Selected: {label || "None yet!"}
  </ChoiceText>
);

export default Choice;