//import logo from './logo.svg';
import './App.css';
import spareParts from './spareParts';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="banner">
      <header>
        <a href="/">AutoSafe</a>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
      </Routes>
        <h1>Banner</h1>
        <div className="products">
        {spareParts.products.map(products => (
          <div className="product" key={products.slug}>
            <img src={products.image} alt={products.name}/> 
            <p>{products.name}</p>
          </div>))}
        </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
