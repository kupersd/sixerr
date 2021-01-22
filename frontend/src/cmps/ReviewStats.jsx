import StarRateIcon from '@material-ui/icons/StarRate';
import StarHalfIcon from '@material-ui/icons/StarHalf';


export function ReviewStats({ htmlStars, gig }) {

    const getStars = () => {
        const { reviews } = gig
        let totalStarsRate = 0, fiveStarCount = 0, fourStarCount = 0, threeStarCount = 0, twoStarCount = 0, oneStarCount = 0
        reviews.map((review) => {
            var rating = parseFloat(review.rating)
            if (!rating) rating = 0
            // console.log("reviews.map , rating", rating)
            if (rating > 4 && rating <= 5) fiveStarCount++
            if (rating <= 4 && rating > 3) fourStarCount++
            if (rating <= 3 && rating > 2) threeStarCount++
            if (rating <= 2 && rating > 1) twoStarCount++
            if (rating <= 1 && rating >= 0) oneStarCount++
            totalStarsRate += rating
        })
        totalStarsRate = totalStarsRate / gig.reviews.length
        const avgRate = { oneStarCount, twoStarCount, threeStarCount, fourStarCount, fiveStarCount, totalStarsRate }
        return avgRate
    }

    const calculateAvgHalfRating = () => {
        const avgRate = getStars()
        let totalStarsRate = avgRate.totalStarsRate
        if (totalStarsRate <= 5 && totalStarsRate >= 4.5) totalStarsRate = 5
        if (totalStarsRate < 4.5 && totalStarsRate >= 4) totalStarsRate = 4.5
        if (totalStarsRate < 4 && totalStarsRate >= 3.5) totalStarsRate = 4
        if (totalStarsRate < 3.5 && totalStarsRate >= 3) totalStarsRate = 3.5
        if (totalStarsRate < 3 && totalStarsRate >= 2.5) totalStarsRate = 3
        if (totalStarsRate < 2.5 && totalStarsRate >= 2) totalStarsRate = 2.5
        if (totalStarsRate < 2 && totalStarsRate >= 1.5) totalStarsRate = 2
        if (totalStarsRate < 1.5 && totalStarsRate >= 1) totalStarsRate = 1.5
        if (totalStarsRate < 1 && totalStarsRate >= 0.5) totalStarsRate = 1
        if (totalStarsRate < 0.5 && totalStarsRate >= 0) totalStarsRate = 0.5
        if(totalStarsRate<0) return ''
        return totalStarsRate
    }

    const avgRate = getStars()
    // console.log("ReviewStats , avgRate", avgRate)
    const oneStarPercentage = avgRate.oneStarCount / avgRate.totalStarsRate
    const twoStarPercentage = avgRate.twoStarCount / avgRate.totalStarsRate
    const threeStarPercentage = avgRate.threeStarCount / avgRate.totalStarsRate
    const fourStarPercentage = avgRate.fourStarCount / avgRate.totalStarsRate
    const fiveStarPercentage = avgRate.fiveStarCount / avgRate.totalStarsRate
    return (
        <>
            <div className="review-stats-header flex">
                <h2>{gig.reviews.length} Reviews</h2>
                <div className="stars-container">
                    {htmlStars.map((star) => {
                        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                    })}
                    {/* <span>{htmlStars.length}</span> */}
                    {/* {!Number.isInteger(avgRate.totalStarsRate) && <div className="flex"><StarHalfIcon /></div>  } */}
                    <span>{htmlStars.length}</span>
                </div>
            </div>
            <section className="review-stats-container " >
                <div className="left-side-stats">
                    <div className="progressses-ctonainer">
                        <span className={`${avgRate.fiveStarCount === 0 ? ' less-visability' : ''}`}>5 Stars</span>
                        <div className="progress-bar-container">
                            <div className="fit-progressbar-background" style={{ backgroundColor: 'orange', width: `${fiveStarPercentage}%` }} >
                            </div>
                        </div>
                        <p className={`${avgRate.fiveStarCount === 0 ? ' less-visability' : ''}`}>{avgRate.fiveStarCount}</p>
                    </div>
                    <div className="progressses-ctonainer">
                        <span className={`${avgRate.fourStarCount === 0 ? ' less-visability' : ''}`}>4 Stars</span>
                        <div className="progress-bar-container">
                            <div className="fit-progressbar-background" style={{ backgroundColor: 'orange', width: `${fourStarPercentage}%` }} >
                            </div>
                        </div>
                        <p className={`${avgRate.fourStarCount === 0 ? ' less-visability' : ''}`}>{avgRate.fourStarCount}</p>
                    </div>
                    <div className="progressses-ctonainer">
                        <span className={`${avgRate.threeStarCount === 0 ? ' less-visability' : ''}`}>3 Stars</span>
                        <div className={`progress-bar-container ${avgRate.threeStarCount === 0 ? ' less-visability' : ''}`}>
                            <div className="fit-progressbar-background" style={{ backgroundColor: 'orange', width: `${threeStarPercentage}%` }} >
                            </div>
                        </div>
                        <p className={`${avgRate.threeStarCount === 0 ? ' less-visability' : ''}`}>{avgRate.threeStarCount}</p>
                    </div>
                    <div className="progressses-ctonainer">
                        <span className={`${avgRate.twoStarCount === 0 ? ' less-visability' : ''}`}>2 Stars</span>
                        <div className={`progress-bar-container ${avgRate.twoStarCount === 0 ? ' less-visability' : ''}`}>
                            <div className="fit-progressbar-background" style={{ backgroundColor: 'orange', width: `${twoStarPercentage}%` }} >
                            </div>
                        </div>
                        <p className={`${avgRate.twoStarCount === 0 ? ' less-visability' : ''}`}>{avgRate.twoStarCount}</p>
                    </div>
                    <div className="progressses-ctonainer">
                        <span className={`${avgRate.oneStarCount === 0 ? ' less-visability' : ''}`}>1 Stars</span>
                        <div className="progress-bar-container">
                            <div className="fit-progressbar-background" style={{ backgroundColor: 'orange', width: `${oneStarPercentage}%` }} >
                            </div>
                        </div>
                        <p className={`${avgRate.oneStarCount === 0 ? ' less-visability' : ''}`}>{avgRate.oneStarCount}</p>
                    </div>
                </div>
                {/* <div className="x"> */}
                <div className="right-side-stats">
                    <div>
                        <h6>Rating Breakdown</h6>
                    </div>
                    <div className="overview-content">
                        <span>Seller communication level</span>
                    </div>
                    <div className="overview-content">
                        <span>Recommend to a friend</span>
                    </div  >
                    <div className=" overview-content flex space-between">
                        <span>Service as described</span>
                    </div>
                </div>
                <div className="stars flex column">
                    <div>
                        <span>{calculateAvgHalfRating()}</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </div>
                    </div>
                    <div>
                        <span>{calculateAvgHalfRating()}</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </div>
                    </div>
                    <div >
                        <span >{calculateAvgHalfRating()}</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>

        </>
    )
}