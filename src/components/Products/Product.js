import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/ProductActions";


const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch()

  const deletehandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <>
      <div className="col-md-6 col-sm-6 col-lg-3 mb-5">
        <div className="card card-product-grid shadow-sm">
          <Link to="#" className="img-wrap">
            <img src={product.image} alt="Product" />
          </Link>
          <div className="info-wrap">
            <Link to="#" className="title text-truncate">
              {product.name}
            </Link>
            <div className="price mb-2">${product.price}</div>
            <div className="row">
              <Link to={`/product/${product._id}/edit`} className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6">
                <FontAwesomeIcon className="i" icon={faPen} />
              </Link>
              <Link to="#" onClick={() => deletehandler(product._id)} className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6">
                <FontAwesomeIcon className="i" icon={faTrashCan} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;