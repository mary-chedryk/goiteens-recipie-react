import { TodoItem, Text, Button } from './Styles';

const TodoList = ({ todos, onDelete, onToggle }) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    {todos.map(({ id, text, completed }) => (
      <TodoItem key={id}>
        <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />
        <Text completed={completed}>{text}</Text>
        <Button onClick={() => onDelete(id)} style={{ backgroundColor: '#ff6b6b' }}>Видалити</Button>
      </TodoItem>
    ))}
  </ul>
);
export default TodoList;