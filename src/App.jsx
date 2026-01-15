import './App.css';
//import {Counter} from './components/Counter/Counter'
import Dropdown from './components/Dropdown/Dropdown';
import { ColorOptions } from './components/ColorPicker/Coloroptions';
import { Container } from './components/Container/Container';
    const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

function App() {
  return (
    <div>
      {/* <Dropdown /> */}
      {/* <Counter initialValue={0}/> */}
      <Container>
        <ColorOptions options={ colorPickerOptions }/>
      </Container>
    </div >
  );
}


export default App;