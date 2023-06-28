import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import buyLaptop from '../redux/actions'
export class  Shop extends Component  {
    //  state=
    // {
    //     numOfLaptps:100
    // }
    // buyLaptop=()=>
    //     {
    //         this.setState({numOfLaptps:this.state.numOfLaptps-1});
    //     }
    render(){
  return (
    <div>
      <center><h1 className='title'>Welcome to Shop</h1></center>
      <div className='item'>
        <p>Dell Inspiron Laptop</p>
        <p>Available:{this.props.numOfLaptops}</p>
        <button onClick={this.props.buyLaptop}>Buy</button>
      </div>
    </div>
  )
}
}
const mapsStateToProps=(state)=>
{
    return{
        numOfLaptops:state.numOfLaptops
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return{
        buyLaptop:()=>dispatch(buyLaptop())
    }
}
export default connect(mapsStateToProps,mapDispatchToProps)(Shop);

