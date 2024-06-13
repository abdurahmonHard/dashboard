import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const OrderDetailInfo = (props) => {
  const {order} = props
  return (
    <div className="row mb-5 order-info-wrap">
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <FontAwesomeIcon className="text-success" icon={faUser} style={{color: "#63E6BE",}} />
          </span>
          <div className="text">
            <h6 className="mb-1">Customer</h6>
            <p className="mb-1">
              {order.user.name} <br />
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <FontAwesomeIcon className="text-success" icon={faTruckMoving} style={{color: "#63E6BE",}} />
          </span>
          <div className="text">
            <h6 className="mb-1">Order Info</h6>
            <p className="mb-1">
              Shopping: {order.shippingAddress.country}<br /> Pay method:{} {order.paymentMethod}
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <FontAwesomeIcon className="text-success" icon={faLocationDot} style={{color: "#63E6BE",}} />
          </span>
          <div className="text">
            <h6 className="mb-1">Deliver to</h6>
            <p className="mb-1">
              Address: {order.shippingAddress.city}<br />  {order.shippingAddress.address}<br />{order.shippingAddress.postalCode}
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}


export default OrderDetailInfo;