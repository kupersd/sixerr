import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';


export class CarouslePreview extends Component {
    state = {
        items: [
        ]
    }

    componentDidMount() {
        // const { imgUrls } = this.props
        // console.log("componentDidMount , imgUrls", imgUrls)
        // this.setState({ items: imgUrls })
        this.createItems()
    }
    createItems = () => {
        const { imgUrls } = this.props
        let items = []
        imgUrls.map((img,idx) => {
            console.log("imgUrls.map , img", img)
            const item = {id:idx,title:img}
            items.push(item)
        })
        this.setState({items})
    }

    render() {
        const { items } = this.state;
        return (
            <Carousel>
                {items.map(item => <div key={item.id}><img src={`${item.title}`}/></div>)}
            </Carousel>
        )
    }
}