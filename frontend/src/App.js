//import logo from './logo.svg';
/*import './App.css';
import spareParts from './spareParts';*/
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="banner">
      <header>
        <a href="/">AutoSafe</a>
      </header>
      <main>
      <Routes>
        <Route path="/product/:slug" element={<ProductScreen />}/>
        <Route path="/" element={<HomeScreen />}/>
      </Routes>
      
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
