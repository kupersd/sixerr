// import React, { Component } from 'react'
import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Login } from '../pages/Login'
import { logout } from '../store/actions/userActions'
import { socketService } from '../services/socketService'
import ChatBox, { ChatFrame } from 'react-chat-plugin';


class _AppHeader extends React.Component {

    state = {
        isLoginOpen: false,
        user: null,
    }

    componentDidMount() {
        socketService.on('chat addMsg', this.onNewMsg)
    }


    componentWillUnmount() {
        socketService.off('chat addMsg', this.onNewMsg)
    }

    onToggleLogin = () => {
        const { user } = this.props
        this.setState({ isLoginOpen: !this.state.isLoginOpen })
        if (user) socketService.emit('chat topic', user._id)

    }

    onNewMsg = (newMsg) => {
        const { user } = this.props
        console.log('MESSAGE', newMsg)
        socketService.emit('chat newMsg', { to: newMsg.from._id, from: user, txt: 'cannot wait to get it' })
    }

    onLogout = async () => {
        await this.props.logout()
        this.props.history.push('/gig')
    }

    render() {
        const { user } = this.props
        const { openChat, isRecievedMsg } = this.state
        console.log("render , openChat", openChat)
        const { isLoginOpen } = this.state
        return (
            <>
                <div className="site-header main-container">
                    <section className="app-header flex space-between align-center">
                        <NavLink to="/">
                            <h1>Sixerr<span>.</span></h1>
                        </NavLink>
                        {isRecievedMsg && <div>1!!!</div>}
                        <ul className="header-nav clean-list flex align-center bold">
                            <NavLink className="fast-trans" to="/"><li>Home</li></NavLink>
                            <NavLink className="fast-trans" to="/gig"><li>Explore</li></NavLink>
                            <NavLink onClick={this.onOpenChat} className="fast-trans" to="/chat"><li>Messages</li></NavLink>
                            {user && <NavLink className="fast-trans" to="#" onClick={this.onLogout}>
                                <li>Logout</li>
                            </NavLink>}
                            {!user &&
                                <NavLink className="" to="#" onClick={this.onToggleLogin}>
                                    <li>Login</li>
                                </NavLink>}
                            <NavLink to="/profile">
                                {/* {user && <h3>{user.username}</h3>} */}
                                {user && <li className="profile-img"><img src={user.imgUrl} alt="user" /></li>}
                            </NavLink>
                        </ul>

                    </section>
                </div>
                {isLoginOpen && !user && <Login toggleLogin={this.onToggleLogin} />}
            </>
        )
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        user: state.userModule.user
    }
}

const mapDispatchToProps = {
    logout
}

export const AppHeader = connect(mapGlobalStateToProps, mapDispatchToProps)(withRouter(_AppHeader))