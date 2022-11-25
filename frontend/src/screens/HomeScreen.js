import spareParts from "../spareParts"
function HomeScreen(){
    return <div>
         <h1>Banner</h1>
        <div className="products">
        {spareParts.products.map(products => (
          <div className="product" key={products.slug}>
            <img src={products.image} alt={products.name}/> 
            <p>{products.name}</p>
          </div>))}
        </div>
    </div>
}

export default HomeScreen;