export function GigCtgList({ ctgs, title, setFilter }) {

    return (
        <section className="gig-ctg-list">
            <h2>{title}</h2>
            <ul className="gig-ctg-wrap clean-list">

                {ctgs.map(ctg =>
                    <li key={ctg.imgUrl} onClick={() => setFilter({ tags: [ctg.tag] })}>
                        <h5>{ctg.cta}</h5>
                        <h3>{ctg.title}</h3>
                        <img src={ctg.imgUrl} alt="category" />
                    </li>)}
            </ul>
        </section>
    )
}