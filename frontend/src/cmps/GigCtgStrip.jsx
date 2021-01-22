
// const ctgs = [
//     { imgUrl: '../assets/img/ctg/pencils.jpg', title: 'Logo design', cta: 'Build your brand' },
//     { imgUrl: '../assets/img/ctg/guitar1.jpg', title: 'Guitar session', cta: 'Publish your art' },
//     { imgUrl: '../assets/img/ctg/condenser1.jpg', title: 'Voice over', cta: 'Share your message' },
//     { imgUrl: '../assets/img/ctg/coding1.jpg', title: 'Programming', cta: 'Create amazing things' }
// ]

const ctgs2 = [
    { imgUrl: '../assets/img/ctg/pencils.jpg', title: 'Logo design', cta: 'Build your brand' },
    { imgUrl: '../assets/img/ctg/guitar1.jpg', title: 'Guitar session', cta: 'Publish your art' },
    { imgUrl: '../assets/img/ctg/condenser1.jpg', title: 'Voice over', cta: 'Share your message' },
    { imgUrl: '../assets/img/ctg/conding1.jpg', title: 'Programming', cta: 'Create amazing things' }
]
export function GigCtgList({ctgs, title}) {

    return (
        <section className="gig-ctg-list">
            <h2>{title}</h2>
            <ul className="gig-ctg-wrap clean-list">

                {ctgs.map(ctg => <li key={ctg.imgUrl}>
                    <h5>{ctg.cta}</h5>
                    <h3>{ctg.title}</h3>
                    <img src={ctg.imgUrl} alt="" />
                </li>)}
            </ul>
        </section>
    )
}