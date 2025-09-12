import ProductCard from "./product-card";

const productsData = [
  { id: 1, name: "Wireless Mouse", price: 100, inStock: true },
  { id: 2, name: "Keyboard", price: 200, inStock: true },
  { id: 3, name: "Monitor", price: 300, inStock: false },
];

function Products() {
  return (
    <div>
      <h1>Products List</h1>
      <div className="products">
        {productsData.map((value) => {
          return (
            <ProductCard
              key={value.id}
              name={value.name}
              price={value.price}
              inStock={value.inStock}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
