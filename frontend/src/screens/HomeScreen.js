import wheels from "../wheel"
function HomeScreen(){
    return <div>
        <h1>Banner</h1>
        <div className="products">
        {wheels.product.map(product => (
          <div className="product" key={product.slug}>
            <img src={product.image} alt={product.name}/> 
            <p>{product.name}</p>
          </div>))}
        </div>
    </div>
}

export default HomeScreen;