import axios from "axios";
import React,{Component} from "react";
import "./Style-FoodMenu.css";
import { Link } from 'react-router-dom'
class FoodMenu extends Component{
    state={
        menu:[]
    }
    componentDidMount(){
        /////get json file for menu
        axios.get("assets/Data/menudata.json")
        .then(resp=>{
            this.setState({menu: resp.data.menu});
        })
    }
    
    ///When click on li to filter food 
    onButtonClick(name){
        let filterManu=[];
        if (name==="filter-active")
        {
            axios.get("assets/Data/menudata.json")
            .then(resp=>{
            this.setState({menu: resp.data.menu});
        })
        }else{
            axios.get("assets/Data/menudata.json").then(res => {
                res.data.menu.filter(function(food) {
                    if(food.filter === name)
                    {
                    // console.log(food.filter);
                   filterManu.push(food);
    
                    }
                    return (filterManu);
                //   return food.filter === this.state.query;
                });
                this.setState({menu: filterManu});
              });
        }
          
                   
        
       
    }

    render(){
        const params = this.state.menu
        .filter((filter) => filter === "filter-starters")
        .map((food) => <option>{food.title}</option>);


        const {menu}=this.state;
        const menuList=menu.map((food)=>{
            return(
                <div className={"col-lg-6 menu-item "+ food.filter}  key={food.key} >
                    <img src={food.photo} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a href="#">{food.title}</a><span>{food.price}</span>
                    </div>
                    <div className="menu-ingredients">
                    {food.component}
                    </div>
                </div>
               )
            });///end map 
        return (
            <div>
                 {/* ======= Menu Section =======  */}
                <section id="menu" className="menu section-bg">
                   <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Menu</h2>
                    <p>Check Our Tasty Menu</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                        <li data-filter="*" className="filter-active" onClick={this.onButtonClick.bind(this, "filter-active")}>All</li>
                        <li data-filter=".filter-starters" onClick={this.onButtonClick.bind(this, "filter-starters")}>Starters</li>
                        <li data-filter=".filter-salads" onClick={this.onButtonClick.bind(this, "filter-salads")}>Salads</li>
                        <li data-filter=".filter-specialty" onClick={this.onButtonClick.bind(this, "filter-specialty")}>Specialty</li>
                        </ul>
                    </div>
                    </div>

                    <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
                    {/* call map to display menu for food */}
                    {menuList}
                    
                    </div>
                    <div class="text-center">
                        <Link to='/viewproducts'><button type="button" class="main-menu-btn">Main Menu</button></Link>
                    </div>
                </div>
                </section>{/* End Menu Section */} 

            </div>
        )
    }
}
export default FoodMenu;