
const ctgs = [
    {imgUrl: 'https://images.unsplash.com/photo-1589816494510-08265bbbbe48', title: 'Logo design', cta: 'Build your brand'},
    {imgUrl: 'https://images.unsplash.com/photo-1573714933251-c86c2a1f7ea2', title: 'Guitar session', cta: 'Publish your art'},
    // {imgUrl: 'https://images.unsplash.com/photo-1503671420638-0301955fc0d7', title: 'Guitar session', cta: 'Publish your art'},
    {imgUrl: 'https://images.unsplash.com/photo-1601856254555-a9c0ebef8af3', title: 'Voice over', cta: 'Share your message'},
    {imgUrl: 'https://images.unsplash.com/photo-1592170091352-4512e84ad10c?', title: 'Programming', cta: 'Create amazing things'}
]

export function GigCtgList() {

    return (
        <section className="gig-ctg-list">
            <h2>Top categories</h2>
            <ul className="gig-ctg-wrap clean-list">

                {ctgs.map(ctg => <li key={ctg.imgUrl}>
                    <h5>{ctg.cta}</h5>
                    <h3>{ctg.title}</h3>
                    <img src={ctg.imgUrl} alt=""/>
                    </li>)}
            </ul>
        </section>
    )
}