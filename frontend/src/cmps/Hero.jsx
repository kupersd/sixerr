import React from 'react';
import { connect } from 'react-redux'
import StarRateIcon from '@material-ui/icons/StarRate';
import { GigStrip } from './GigStrip.jsx';
import { loadGigs } from "../store/actions/gigActions.js";
import { updateUser } from "../store/actions/userActions.js";
import { GigList } from './GigList.jsx';
import { GigCtgList } from './GigCtgStrip.jsx';


class _Hero extends React.Component {

    state = {
        currHeroIdx: 0,
        heros: [
            {
                imgUrl: '/assets/img/hero/woman1.jpg',
                username: 'Paige Rank',
                occupation: 'SEO Expert',
            },
            {
                imgUrl: '/assets/img/hero/man-microphone.jpg',
                whoAmI: 'man',
                username: 'Zach Brater',
                occupation: 'Narrator'
            },
            {
                imgUrl: '/assets/img/hero/woman-editing.jpg',
                username: 'Puka Bat David',
                occupation: 'Mixing Engineer'
            },
            {
                imgUrl: '/assets/img/hero/man-producer.jpg',
                username: '60 cent',
                occupation: 'Producer',
            }
        ],
        ctgs: [
            { imgUrl: '/assets/img/ctg/pencils.jpg', title: 'Logo design', cta: 'Build your brand' },
            { imgUrl: '/assets/img/ctg/guitar1.jpg', title: 'Guitar session', cta: 'Publish your art' },
            { imgUrl: '/assets/img/ctg/condenser1.jpg', title: 'Voice over', cta: 'Share your message' },
            { imgUrl: '/assets/img/ctg/coding1.jpg', title: 'Programming', cta: 'Create amazing things' },
            { imgUrl: '/assets/img/ctg/canvas.jpg', title: 'Drawing', cta: 'Visualize your dream' },
            { imgUrl: '/assets/img/ctg/coach.jpg', title: 'Marketing', cta: 'Spread the word' },
            { imgUrl: '/assets/img/ctg/mixing.jpg', title: 'Mixing', cta: 'Finish your song' },
            { imgUrl: '/assets/img/ctg/piano.jpg', title: 'Piano Lessons', cta: 'Learn to play' }

        ]
    }

    heroInterval

    componentDidMount() {
        this.heroInterval = setInterval(this.nextHero, 5000)
        this.props.loadGigs()
    }

    componentWillUnmount() {
        clearInterval(this.heroInterval)
    }

    onUserViewGig = (gigId) => {
        const user = { ...this.props.user }
        if (user.viewedGigIds) {
            if (!user.viewedGigIds.find(viewedGigId => viewedGigId === gigId)) user.viewedGigIds.push(gigId)
        } else user.viewedGigIds = [gigId]
        this.props.updateUser(user)
    }

    nextHero = () => {
        const herosCount = this.state.heros.length
        const nextHero = (this.state.currHeroIdx === herosCount - 1) ?
            0 : this.state.currHeroIdx + 1
        this.setState({ currHeroIdx: nextHero })
    }

    render() {
        const { heros, currHeroIdx } = this.state
        const hero = heros[currHeroIdx]

        const { ctgs } = this.state

        const jsGigs = [...this.props.gigs.slice(3)]
        const musicGigs = [...this.props.gigs.slice(5)]
        const suggestedGigs = [...this.props.gigs.slice(4)]
        return (
            <>
                <section className="hero">
                    <div className="main-container">
                        <h1>Find the perfect <span>freelance</span> for your business</h1>
                    </div>
                    <img src={hero.imgUrl} alt="" />
                    <div className="hero-snippet">
                        <div className="stars">
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                            <StarRateIcon />
                        </div>
                        <span>{hero.username}</span>, {hero.occupation}
                    </div>
                </section>
                <div className="main-container">

                    {/* <SixerrApp /> */}
                    <GigStrip title={'Design'}
                        gigs={this.props.gigs}
                        onUserViewGig={this.onUserViewGig}
                        onFavoriteToggle={this.onFavoriteToggle}
                        user={this.props.user}
                        onDelete={this.onDelete} />
                    <GigCtgList ctgs={ctgs.slice(0, 4)} title={`For you`}/>
                    <GigStrip title={'Software'}
                        gigs={jsGigs}
                        onUserViewGig={this.onUserViewGig}
                        onFavoriteToggle={this.onFavoriteToggle}
                        user={this.props.user}
                        onDelete={this.onDelete} />
                    <GigCtgList ctgs={ctgs.slice(4, 8)} title={`Editor's Pick`}/>
                    <GigStrip title={'Music'}
                        gigs={musicGigs}
                        onUserViewGig={this.onUserViewGig}
                        onFavoriteToggle={this.onFavoriteToggle}
                        user={this.props.user}
                        onDelete={this.onDelete} />
                    <GigStrip title={'Video'}
                        gigs={this.props.gigs}
                        onUserViewGig={this.onUserViewGig}
                        onFavoriteToggle={this.onFavoriteToggle}
                        user={this.props.user}
                        onDelete={this.onDelete} />
                    <h3>Suggested</h3>
                    <GigList gigs={suggestedGigs} onDelete={this.onDelete} onUserViewGig={() => { }} onFavoriteToggle={this.onFavoriteToggle} isSmallPreview={true} />
                </div>

                {/* </section> */}
            </>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        gigs: state.gigModule.gigs,
        // user: state.userModule.user
    }
}

const mapDispatchToProps = {
    loadGigs,
    updateUser
    // addGig,
    // updateGig
}

export const Hero = connect(mapStateToProps, mapDispatchToProps)(_Hero)