import ScheduleIcon from '@material-ui/icons/Schedule';

export function OrderPreview({ order, onOrderStatusChanged }) {

    function getOrderProps() {
        switch (order.status) {
            case 'pending':
                return {
                    statusStyle: { backgroundColor: 'rgb(245, 41, 75)' },
                    statusMsg: 'Buyer is waiting for your response',
                    ctaButtonText: 'Approve Order',
                    nextStatus: 'approved'
                }
            case 'approved':
                return {
                    statusStyle: { backgroundColor: 'rgb(254, 190, 45)' },
                    statusMsg: 'This gig is in progress',
                    ctaButtonText: 'Deliver Now',
                    nextStatus: 'completed'
                }
            case 'completed':
                return {
                    statusStyle: { backgroundColor: 'rgb(43, 190, 118)' },
                    statusMsg: 'Gig is complete - High Six!',
                    ctaButtonText: 'Archive Gig',
                    nextStatus: 'archived'
                }
            case 'archived':
                return {
                    statusStyle: { backgroundColor: 'rgb(200, 200, 200)' },
                    statusMsg: 'Dust... everywhere...',
                    ctaButtonText: 'Start Over',
                    nextStatus: 'pending'
                }


        }
    }

    function setOrderStatus() {
        order.status = getOrderProps().nextStatus
        onOrderStatusChanged(order)
    }

    return (
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
                    <p className="light-grey">$325</p>
                </div>
                <div className="order-date flex">
                    <p className="light-grey">Delivery Time</p>
                    <div className="flex align-center light-grey">
                        <ScheduleIcon className="clock" />
                        <p>3d, 11h</p>
                    </div>
                </div>
            </div>
            <div className="order-bottom flex space-between align-center">
                <div className="order-status flex align-center">
                    <span style={getOrderProps().statusStyle}>{order.status}</span>
                    <p className="light-grey">{getOrderProps().statusMsg}</p>
                </div>
                <button onClick={setOrderStatus}>{getOrderProps().ctaButtonText}</button>
            </div>
        </li >
    )
}
