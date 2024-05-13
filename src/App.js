import Menu from './Menu'
import { category, item } from './Data';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  return (
    <div className="App">
      <Menu  category={category}  item={item}/>
    </div>
  );
}

export default App;
