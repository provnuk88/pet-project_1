import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id:1,
          title:'Vodka Absolute',
          img:'Absolut.jpeg',
          desc:'Better vodka for frinds',
          category:'vodka',
          price:'10$'
        },
        {
          id:2,
          title:'Capitan Morgan',
          img:'Capitan morgan.jpg',
          desc:'Be piret like Jack Viribey',
          category:'Rom',
          price:'15$'
        },
        {
          id:3,
          title:'Jameson',
          img:'jameson.jpg',
          desc:'Drink Rum, fight with MacGregor',
          category:'Whiskey',
          price:'20$'
        },
        {
          id:4,
          title:'Sharidans',
          img:'Sharidans.jpg',
          desc:'Drink more, be like my exGF',
          category:'Liquor',
          price:'9$'
        },
        {
          id:5,
          title:'olmeca blanco',
          img:'Olmeca.jpg',
          desc:'Salt as a gift sweet',
          category:'tequila',
          price:'16$'
        },

      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    )
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
