function ProductCard(props) {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Status: {props.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
export default ProductCard;
