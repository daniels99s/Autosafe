//import logo from './logo.svg';
import './App.css';
import spareParts from './spareParts';

function App() {
  return (
    <div>
      <header>
        <a href="/">AutoSafe</a>
      </header>
      <main>
        <h1>Banner</h1>
        {
          spareParts.products.map(products => (
          <div className="product" key={products.slug}>
            <img src={products.image} alt={products.name}/> 
            <p>{products.name}</p>
          </div>))
        }
      </main>
    </div>
  );
}

export default App;
