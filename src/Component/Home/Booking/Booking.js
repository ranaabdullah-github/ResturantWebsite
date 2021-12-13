import axios from 'axios';
import React, { Component } from 'react'
import './Booking.css'

export class Booking extends Component {
    state={
        notable:'',
        noperson:'',
        noseat:'',
        price:'',
        reserved:'',
        color:''
    }
    changeHandler = (xx) => {
        this.setState({[xx.target.name]: xx.target.value});
    } 
    submitHandler = (xx) =>{
        xx.preventDefault();
        // console.log(this.state);
        //  axios.get("assets/Data/menudata.json")
        axios.post("assets/Data/menudata.json",this.state)
        .then(res => {
            console.log(res);
        })
    }
    render() {
        const {notable, noperson,noseat,price,reserved,color}=this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="notable" onChange={this.changeHandler}/>
                    <input type="password" name="noperson" onChange={this.changeHandler}/>
                    <input type="text" name="noseat" onChange={this.changeHandler}/>
                    <input type="text" name="price" onChange={this.changeHandler}/>
                    <input type="text" name="reserved" onChange={this.changeHandler}/>
                    <input type="text" name="color" onChange={this.changeHandler}/>
                    <button type="submit">Add</button>

                </form>
            </div>
        )
    }
}
export default Booking
