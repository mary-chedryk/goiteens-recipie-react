import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  &:focus { border-color: #4dabf7; }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4dabf7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
  &:hover { background-color: #339af0; }
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: white;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
`;

export const Text = styled.p`
  margin: 0;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  color: ${props => (props.completed ? '#adb5bd' : '#212529')};
`;