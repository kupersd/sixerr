import React from 'react';
import { connect } from 'react-redux'
import StarRateIcon from '@material-ui/icons/StarRate';
import { GigStrip } from '../cmps/GigStrip.jsx';
import { GigList } from '../cmps/GigList.jsx';
import { GigCtgList } from '../cmps/GigCtgStrip.jsx';
import { Hero } from '../cmps/Hero.jsx';

import { loadGigs, setFilter } from "../store/actions/gigActions.js";
import { updateUser } from "../store/actions/userActions.js";

class _GigHome extends React.Component {

    state = {
        ctgs: [
            { imgUrl: '/assets/img/ctg/pencils.jpg', title: 'Logo design', cta: 'Build your brand', tag:'Logo' },
            { imgUrl: '/assets/img/ctg/guitar1.jpg', title: 'Guitar session', cta: 'Publish your art', tag:'Guitar' },
            { imgUrl: '/assets/img/ctg/condenser1.jpg', title: 'Voice over', cta: 'Share your message', tag:'Voice' },
            { imgUrl: '/assets/img/ctg/coding1.jpg', title: 'Programming', cta: 'Create amazing things', tag:'Programming' },
            { imgUrl: '/assets/img/ctg/canvas.jpg', title: 'Drawing', cta: 'Visualize your dream', tag:'Drawing' },
            { imgUrl: '/assets/img/ctg/coach.jpg', title: 'Marketing', cta: 'Spread the word', tag:'Marketing' },
            { imgUrl: '/assets/img/ctg/mixing.jpg', title: 'Mixing', cta: 'Finish your song', tag:'Mixing' },
            { imgUrl: '/assets/img/ctg/piano.jpg', title: 'Piano Lessons', cta: 'Learn to play', tag:'Piano' }
        ]
    }


    componentDidMount() {
        this.props.loadGigs()
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
        const { ctgs } = this.state
        const { gigs } = this.props

        const jsGigs = [...gigs.slice(3)]
        const musicGigs = [...gigs.slice(5)]
        const suggestedGigs = [...gigs.slice(8, 16)]
        return (
            <>
                <Hero />
                <div className="main-container">

                    <GigStrip title={'Design'}
                        gigs={this.props.gigs}
                        onUserViewGig={this.onUserViewGig}
                        onFavoriteToggle={this.onFavoriteToggle}
                        user={this.props.user}
                        onDelete={this.onDelete} />
                    <GigCtgList ctgs={ctgs.slice(0, 4)} title={`For you`} setFilter={this.props.setFilter}/>
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
    updateUser,
    setFilter
    // addGig,
    // updateGig
}

export const GigHome = connect(mapStateToProps, mapDispatchToProps)(_GigHome)