export function OrderPreview({ order, onOrderStatusChanged }) {

    const isSeller = !!onOrderStatusChanged

    return (
        <>
            {isSeller &&
                <li className="order-item">
                    <div className="order-top">
                        <div className="order-img">
                            <img src={order.gig.imgUrl} alt="" />
                        </div>
                        <div className="order-buyer flex">
                            {/* <h4>{order.gig.title}</h4> */}
                            <p><span>{order.buyer.fullname}</span></p>
                            <p className="green">View Order</p>
                        </div>
                        <div className="order-price flex">
                            <p className="light-grey">Price</p>
                            <p>$325</p>
                        </div>
                        <div className="order-date flex">
                            <p className="light-grey">Delivery Time</p>
                            <p>3d, 11h</p>
                        </div>
                    </div>
                    <div className="order-bottom flex space-between align-center">
                        <div className="order-status flex align-center">
                            <span>{order.status}</span>
                            <p className="light-grey">You are running late on this one</p>
                        </div>
                        <button>Deliver Now</button>
                    </div>

                    {/* {(onOrderStatusChanged && order.status !== 'completed') && <button onClick={() => { onOrderStatusChanged(order) }}>{order.status === 'pending' ? 'APPROVE' : 'COMPLETED'}</button>} */}
                </li >
            }

            {!isSeller &&
                <li className="order-item flex">
                    <div className="order-inner">
                        <div className="order-img">
                            <img src={order.gig.imgUrl} alt="" />
                        </div>
                        <div className="order-info">
                            <h4>{order.gig.title}</h4>
                            <p>By: <span>{order.gig.sellerFullname}</span></p>
                            <p className="status">Status: <span>{order.status}</span></p>
                        </div>
                        {(onOrderStatusChanged && order.status !== 'completed') && <button onClick={() => { onOrderStatusChanged(order) }}>{order.status === 'pending' ? 'APPROVE' : 'COMPLETED'}</button>}
                    </div>
                </li >
            }
        </>
    )
}
