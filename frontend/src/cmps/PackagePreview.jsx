
import React, { Component } from 'react'
import ChatBox, { ChatFrame } from 'react-chat-plugin';
import { connect } from 'react-redux'


class _PackagePreview extends Component {
    state = {
        user: null,
        messages: [
        ],
    };

    componentDidMount() {
        console.log('!!!!!');
        const { user } = this.props
        console.log("componentDidMount , user", user)
        this.setState({ user })
    }


    handleOnSendMessage = (message) => {
        const { user } = this.state;
        const username = user.username
        const avatarUrl = user.imgUrl
        const id = user._id
        this.setState({
            messages: this.state.messages.concat({
                author: {
                    username,
                    id,
                    avatarUrl,
                },
                text: message,
                timestamp: +new Date(),
                type: 'text',
            }),
        });
    };

    render() {
        const {user} = this.state
        console.log("render!!!!!!! , user", user)
        if(!user) return <div>log in you stupid!</div>
        return (
            <ChatBox
                messages={this.state.messages}
                userId={user._id}
                onSendMessage={this.handleOnSendMessage}
                width={'500px'}
                height={'700px'}
            />
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
}

export const PackagePreview = connect(mapStateToProps, mapDispatchToProps)(_PackagePreview)



