// import React from 'react'
// import { connect } from 'react-redux'
// import Avatar from '@material-ui/core/Avatar';
// import ChatBox, { ChatFrame } from 'react-chat-plugin';


// class _Chat extends React.Component {
//     state = {
//         user: null,
//         chats: [],
//         txt: '',
//         currIdx: 0,
//         messages: [
//             {
//                 text: 'user2 has joined the conversation',
//                 timestamp: 1578366389250,
//                 type: 'notification',
//             },
//             {
//                 author: {
//                     username: 'user1',
//                     id: 1,
//                     avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
//                 },
//                 text: 'Hi',
//                 type: 'text',
//                 timestamp: 1578366393250,
//             },
//             {
//                 author: { username: 'user2', id: 2, avatarUrl: null },
//                 text: 'Show two buttons',
//                 type: 'text',
//                 timestamp: 1578366425250,
//                 buttons: [
//                     {
//                         type: 'URL',
//                         title: 'Yahoo',
//                         payload: 'http://www.yahoo.com',
//                     },
//                     {
//                         type: 'URL',
//                         title: 'Example',
//                         payload: 'http://www.example.com',
//                     },
//                 ],
//             },
//             {
//                 author: {
//                     username: 'user1',
//                     id: 1,
//                     avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
//                 },
//                 text: "What's up?",
//                 type: 'text',
//                 timestamp: 1578366425250,
//                 hasError: true,
//             },
//         ],
//     };




//     componentDidMount() {
//         console.log('hey');
//         console.log('chat cmp loaded')
//         const { user } = this.props
//         console.log("componentDidMount , user", user)
//         this.setState({ user })
//     }

//     handleInput = ({ target }) => {
//         const field = target.name
//         let value = target.value
//         let { txt } = this.state
//         txt = value
//         this.setState({ txt })
//     }
//     onSendChat = () => {
//         let { txt } = this.state
//         if (txt === '') this.setState({ txt: '' })
//         console.log('saved');
//         let chats = [...this.state.chats]
//         const msg = this.state.txt
//         chats.push(msg)
//         txt = ''
//         let { currIdx } = this.state
//         currIdx++;
//         this.setState({ chats, txt, currIdx })
//     }


//     handleOnSendMessage = (message) => {
//         this.setState({
//             messages: this.state.messages.concat({
//                 author: {
//                     username: 'user1',
//                     id: 1,
//                     avatarUrl: `${this.state.user.imgUrl}`,
//                 },
//                 text: message,
//                 timestamp: +new Date(),
//                 type: 'text',
//             }),
//         });
//     };

//     render() {
//         const { user, txt, chats, currIdx } = this.state
//         if (user) console.log("mapStateToProps , user", user)
//         if (!user) return <div>Fuck this</div>
//         return (
//             <>
//                 <div>asdssd</div>
//             </>
//         )
//     }
// }
// //     

// const mapStateToProps = (state) => {

//     return {
//         gigs: state.gigModule.gigs,
//         user: state.userModule.user
//     }
// }

// const mapDispatchToProps = {
// }

// export const Chat = connect(mapStateToProps, mapDispatchToProps)(_Chat)
// {/* <h1>CHAT</h1>
//     <ul>
//         <li>msg #1</li>
//         <li>msg #2</li>
//         <li>msg #3</li>
//     </ul> */}




// //     <>
// //     <section className="chat-wrapper main-container">

// //         <div className="contact-info flex align-center ">
// //             <h3>Tomer Maruani</h3>
// //             <div>
// //                 <span className="dot">.</span>
// //             </div>
// //         </div>
// //         <div>
// //             <div style={{ transform: `translateY(${-43 * currIdx}px)` }}>
// //                 {chats.map((msg) => {
// //                 return <div className="chat-container flex">
// //                     <Avatar src={`${user.imgUrl}`} />
// //                     <div className="logged-user">{msg}</div>
// //                 </div>
// //                 {chats.map((msg) => {
// //                     return <div className="chat-container flex">
// //                         <Avatar src={`${user.imgUrl}`} />
// //                         <div className="logged-user">{msg}</div>
// //                     </div>
// //                 }
// //                 )}
// //             </div>
// //             <div className="chat-container flex">
// //                 <Avatar src={`${user.imgUrl}`} />
// //                 <div className="logged-user">  Hey Im tomer i would like to buy from you</div>
// //             </div>
// //             <div className="contact-user-chat">
// //                 <div className="contact-user">Hey  tomer i send you link to buy</div>
// //                 <Avatar src={`${user.imgUrl}`} />
// //             </div>
// //         </div>
// //     </section>
// //     <div className="flex justify-center">
// //         <form onSubmit={this.onSendChat} >
// //             <input autoFocus value={txt} type="text" placeholder="type here..." onChange={this.handleInput} name="txt" required autoComplete="off" />
// //             <button ><span>Save</span></button>
// //         </form>
// //     </div>
// // </>