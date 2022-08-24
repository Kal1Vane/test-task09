import { ProductProps } from "../../types";
import PointsIcon from "../points-icon/points-icon";
import './product.scss';

function Product({props} : ProductProps){
  return (
    <li className="item__product">
        <img className="item__product-img" src={props.img} width={100} height={100} alt={props.title} />
        <h3 className="item__product-title">{props.title}</h3>
        <div className="item__product-price">
          {props.price}
          <PointsIcon />
        </div>
    </li>
  )
}
export default Product;