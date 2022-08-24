import { nanoid } from "nanoid";
import { makeFakeProducts } from "../../utils";
import Product from "../product/product";
import "./list-products.scss";

function ListProducts(): JSX.Element {
  const products = makeFakeProducts();

  return (
    <ul className="list__products">
      {products.map((item) => {
        return <Product key={nanoid(10)} props={item} />;
      })}
    </ul>
  );
}

export default ListProducts;
