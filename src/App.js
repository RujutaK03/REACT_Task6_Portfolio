import './App.css';
import ColorPicker from './Tasks/ColorPicker';

function App() {
  const colors = ['red', 'greenyellow', 'blue', 'yellow', 'hotpink', 'aqua', 'orange', 'purple', 'pink', 'green', 'crimson', 'cornflowerblue', 'brown', 'orangered', 'darkslateblue', 'gold'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
