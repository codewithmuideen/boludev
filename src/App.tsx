
import products from './data.json'; // Adjust the import path as necessary
import './App.css'
export default function App() {
  return (
    <div>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
           <button> <p>${product.price.toFixed(2)}</p></button>
          </div>
        ))}
      </div>
    </div>
  );
}
