import React, { useEffect } from "react";
import OrderDeailProduts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getOrderDetails } from "../../Redux/Actions/OrderActions"
import Loading from "../../components/LoadingError/Loading"
import Message from "../LoadingError/Error"
import moment from "moment";

const OrderDetailmain = (props) => {
  const { orderId } = props
  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successDelivered]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  return (
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-dark text-white">
          Back To Order
        </Link>
      </div>

      {
        loading ? (<Loading />) : error ? (<Message variant="alert-danger">{error}</Message>) :
          (
            <div className="card">
              <header className="card-header p-3 Header-green">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <span>
                      <FontAwesomeIcon className="mx-2" icon={faCalendarDays} />
                      <b className="text-white">{moment(order.createdAt).format("llll")}</b>
                    </span>
                    <br />
                    <small className="text-white mx-3">
                      Order ID: {order._id}
                    </small>
                  </div>
                  <div className="col-lg-6 col-md-6 sm-auto d-flex justify-content-end align-items-center">
                    <select className="form-select d-inline-block" style={{ maxWidth: "200px" }}>
                      <option>Change status</option>
                      <option>Awaiting Payment</option>
                      <option>Confirmed</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                    </select>
                    <Link className="btn btn-success ms-2" to="#">
                      <FontAwesomeIcon icon={faPrint} />
                    </Link>
                  </div>
                </div>
              </header>
              <div className="card-body">
                {/* Order Info */}

                <OrderDetailInfo order={order} />
                <div className="row">
                  <div className="col-lg-9">
                    <div className="table-responsive">
                      <OrderDeailProduts order={order} loading={loading} />
                    </div>
                  </div>
                  {/* Payment Info */}
                  <div className="col-lg-3">
                    <div className="box shadow-sm gb-light">
                      {
                        order.isDelivered ? (
                          <button className="btn btn-success col-12">
                            DELIVERED AT ({""} {moment(order.isDeliveredAt).format("MMM Do YY")})
                          </button>
                        )
                          :
                          (
                            <>
                              {loadingDelivered && <Loading/>}
                              <button onClick={deliverHandler} className="btn btn-dark col-12">
                                MARK AS DELIVERED
                              </button>
                            </>
                          )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </section>
  )
}

export default OrderDetailmain;