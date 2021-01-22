import React from 'react'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LoopIcon from '@material-ui/icons/Loop';
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom'

export default function SideBar({ gig, onGigOrder }) {
    return (
        <>
            <div className="sidebar">
                <div className="package-content">
                    <div>
                        <h3 className="flex space-between">
                            {'Package Price'}
                <span>${gig.packages[0].price}</span>
                        </h3>
                        <p>{gig.packages[0].desc}</p>
                    </div>
                    <div >
                        <div className={`icons flex`}>
                            <QueryBuilderIcon className="clock" />
                            <p className="delivery">{gig.packages[0].deliveryDays} Days Delivery</p>
                            <LoopIcon className="loop" />
                            <p className="revisions">{gig.packages[0].revisionsCount} Revisions</p>
                        </div>
                        <ul className="features clean-list ">
                            {gig.packages[0].features.map(feature => {
                                return <div key={feature} className="flex">
                                    <DoneIcon fontSize="small" className="include" />
                                    <li>{feature}</li>
                                </div>
                            })}
                        </ul>
                    </div>
                    <div className="btns-container flex justify-center">
                        <Link to={`/gig/checkout/${gig._id}`}><button className="continue">Continue<span>{' '}</span>(${gig.packages[0].price})</button></Link>
                        {/* <button className="continue" onClick={onGigOrder} >Continue<span>{' '}</span>(${gig.packages[0].price})</button> */}
                    </div>
                </div>
            </div>
            {/* <div>
                    <button>Contact Seller</button>
                </div> */}
        </>
    )
}
               
