import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import InfoIcon from '@material-ui/icons/Info';
import { loadGig } from '../store/actions/gigActions';
import { utilService } from '../services/utilService.js'
import DoneIcon from '@material-ui/icons/Done';
import { connect } from 'react-redux'
import { orderGig } from '../store/actions/orderActions'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { socketService } from '../services/socketService.js';



class _Checkout extends Component {

    state = {
        gig: null,
        isShowFeatures: true,
        user: null,
        isHideInfo: true
    }

    async componentDidMount() {
        const gigId = this.props.match.params.gigId
        const gig = await loadGig(gigId)
        console.log("componentDidMount , gig", gig)
        const { user } = this.props
        console.log("componentDidMount , user", user)
        this.setState({ gig, user })
    }

    onTogFetaures = () => {
        console.log('hey');
        let { isShowFeatures } = this.state
        console.log("isShowFeatures", isShowFeatures)
        isShowFeatures = !isShowFeatures
        this.setState({ isShowFeatures })
    }

    onHideInfo = () => {
        const { isAprrovedInfo } = this.state
        this.setState({ isAprrovedInfo: !isAprrovedInfo })
    }


    onGigOrder = async () => {
        const { gig } = this.state
        const { user } = this.props
        console.log("onGigOrder= , gig", gig)
        await this.props.orderGig(gig, user)
        socketService.emit('new order', { from: user, txt: 'NEW ORDER !!!!', gig })
        this.props.history.push(`/gig/${gig._id}`)
    }

    render() {
        //random fee....
        const randomFee = utilService.getRandomInt(2, 5)
        const { gig, isShowFeatures, isAprrovedInfo } = this.state
        console.log('user', this.state.user);
        console.log("render , gig", gig)
        if (!gig) return <div>Loading</div>
        const totalPrice = (randomFee + gig.packages[0].price).toFixed(2)
        const packPrice = gig.packages[0].price.toFixed(2)
        return (
            <section className="chackout-container main-container">
                {!isAprrovedInfo && <div className="requirements flex justify-center">
                    <InfoIcon />
                    <span>Hey! {gig.owner.fullname} is waiting for your requirements right after you complete the order</span>
                    <a onClick={this.onHideInfo}>Ok, got it</a>
                </div>}
                <div className="content-container">
                    <div className="content">
                        <h3><span> Customize Your Package</span></h3>
                        <div className="summery flex">
                            <div className="gig-img-container">
                                <Link to={`/gig/${gig._id}`} ><img src={`${gig.imgUrls[0]}`} alt="" /></Link>
                            </div>
                            <div >
                                <p className="title">{gig.title}</p>
                                <div className="stars-container flex">
                                    <div >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                                    </div>
                                    <span className="rate">5.0</span>
                                    <span className="total-reviews">({gig.reviews.length} reviews)</span>
                                </div>
                                {!isShowFeatures && <a className="included" onClick={() => this.onTogFetaures()} >Show What's included</a>}
                                {isShowFeatures && <a className="included" onClick={() => this.onTogFetaures()} >Hide Features included</a>}
                            </div>
                            <span className="price">${gig.packages[0].price}</span>
                        </div>
                        {isShowFeatures && <div className="features-container flex">
                            <div className="gig-title">
                                {gig.title}
                            </div>
                            {gig.packages[0].features.map(feature => {
                                return <div key={feature} className="package-fuetures-list flex clean-list">
                                    <DoneIcon fontSize="small" className="include" />
                                    <li>{feature}</li>
                                </div>
                            })}
                        </div>}
                    </div>
                    <div className="checkout-bar flex">
                        <h6>Summary</h6>
                        <div className="flex space-between">
                            <span>Check Out</span>
                            <span>${packPrice}</span>
                        </div>
                        <div className="fee flex space-between">
                            <span>Service Fee <InfoIcon className="info" /> </span>
                            <div className="hide">modal open</div>
                            {/* <span>Service Fee <ContactSupportIcon className="info" /> </span> */}
                            <span>${randomFee.toFixed(2)}</span>
                        </div>
                        <div className="border flex align-center"></div>
                        <div className="payment-summery flex space-between">
                            <span>Total</span>
                            <span>${totalPrice}</span>
                        </div>
                        <div className="delivery flex space-between">
                            <span>Delivery Time</span>
                            <span>{gig.packages[0].deliveryDays} Days</span>
                        </div>
                        <div className="buy-btn-container">
                            <button onClick={() => this.onGigOrder()} >Purchase now</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        gigs: state.gigModule.gigs,
        user: state.userModule.user
    }
}

const mapDispatchToProps = {
    orderGig
}

export const Checkout = connect(mapStateToProps, mapDispatchToProps)(withRouter(_Checkout))