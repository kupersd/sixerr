// FRONTEND INITAL CONNECTION - APP HEADER COMPONENT
const { user } = this.props
socketService.on('chat addMsg', this.onNewMsg)
if (user) socketService.emit('chat topic', user._id)


// FRONTEND - ORDER INITIATION 
onGigOrder = async () => {
    const { gig } = this.state
    const { user } = this.props
    await this.props.orderGig(gig, user)
    socketService.emit('new order', { from: user, txt: 'NEW ORDER !!!!', gig })
}

// BACKEND
function connectSockets() {
    gIo.on('connection', socket => {
        gSocketBySessionIdMap[socket.handshake.sessionID] = socket
        socket.on('disconnect', socket => {
            if (socket.handshake) {
                gSocketBySessionIdMap[socket.handshake.sessionID] = null
            }
        })
        socket.on('chat topic', topic => {
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic
        })
        socket.on('chat newMsg', msg => {
            gIo.to(msg.to).emit('chat addMsg', msg)
        })
        socket.on('new order', msg => {
            gIo.to(msg.gig.owner._id).emit('order received', msg)
        })

    })
}

// FRONTEND

// LISTENING ON ORDERS
socketService.on('order received', this.onNewOrder)

// ACTION ON NEW ORDER
onNewOrder = async (newMsg) => {
    const { user } = this.props
    await this.props.loadOrders()
    socketService.emit('chat newMsg', { to: newMsg.from._id, from: user.fullname, txt: msg })
}


