import React, { Component } from 'react'
import ChatBox, { ChatFrame } from 'react-chat-plugin';
import { connect } from 'react-redux'
import { socketService } from '../services/socketService'


export class Chat extends Component {
    state = {
        user: null,
        messages: [],
        // msg,
    };

    componentDidMount() {
        const { user } = this.props
        console.log("componentDidMount , user", user)
        // const {msg} = this.props
        this.setState({ user })
    }


    //from app header : 
    onNewMsg = (newMsg) => {
        // const { user } = this.props
        console.log('MESSAGE', newMsg)
        const user = newMsg.from
        this.setState({ isRecievedMsg: true, user}).then(() => {
            console.log("this.setState , newMsg????", newMsg)
            this.handleOnSendMessage(newMsg.txt)
        })
        socketService.emit('chat newMsg', { to: newMsg.from._id, from: user, txt: 'cannot wait to get it' })
        //To do:
        // isRecievedMsg = true
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
        const { user } = this.state
        console.log("render!!!!!!! , user", user)
        if (!user) return <div>log in you stupid!</div>
        return (
            <ChatBox
                messages={this.state.messages}
                userId={user._id}
                onSendMessage={this.handleOnSendMessage}
                width={'500px'}
                height={'500px'}
            />
        )
    }
}


// const mapStateToProps = (state) => {

//     return {
//         gigs: state.gigModule.gigs,
//         user: state.userModule.user
//     }
// }

// const mapDispatchToProps = {
// }

// export const Chat = connect(mapStateToProps, mapDispatchToProps)(_Chat)