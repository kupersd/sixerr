import React from 'react'
import { connect } from 'react-redux'

class _Chat extends React.Component {
    state = {
        filterBy: {
            text: ''
        }
    }

    componentDidMount() {
        console.log('chat cmp loaded')
    }

    render() {

        return (
            <>
                <section className="chat-wrapper">
                    <h1>CHAT</h1>
                    <ul>
                        <li>msg #1</li>
                        <li>msg #2</li>
                        <li>msg #3</li>
                    </ul>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gigs: state.gigModule.gigs,
    }
}

const mapDispatchToProps = {
    // addGig,
    // updateGig
}

export const Chat = connect(mapStateToProps, mapDispatchToProps)(_Chat)