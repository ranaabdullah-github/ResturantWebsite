import React,{useState,useEffect} from 'react';
import "./AllProducts.css";
import Product from "../Product/Product"
const AllProducts = ({ products,categoriesData, onAddToCart }) => {
//  ----------------------------------------------
// useState for filter Categories for Food
//  ----------------------------------------------

// const [products, setProducts] = useState([]);
const [xproducts, setProducts] = useState([]);
const [newArr, setNewArr] = useState([]);


  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  // ---------------------------------------------------------------------------------------------------------
  // const [sortBy, setSortBy] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");


const [selected, setSelected] = useState([]);

const handleChange = event => {
    const { checked, value } = event.currentTarget;

    setSelected(
      prev => checked
        ? [...prev, value]
        : prev.filter(val => val !== value)
    );
};
// --------------------------------------------------------------------------------------------------

useEffect(() => {
    setProducts(products);
    console.log(products)
    setFilteredProducts(products);
});


 
//  ----------------------------------------------
//  ----------------------------------------------    

// const [selectedProducts, setSelectedProducts] = useState([]);
const [newProducts, setNewProducts] = useState([]);

   




  console.log("Inside Mutamahiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
  console.log(products);
  console.log(categoriesData);
  return (
    <>
     
      <div className="filter">
        
        <button
          className="btn btn-default"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-filter"
          aria-expanded="true"
          aria-controls="mobile-filter"
        >
          Filters<span className="fa fa-filter pl-1"></span>
        </button>
      </div>
      <div className="container-fluid">
        {/* <!-- Sidebar filter section --> */}
        <div className="row">
          {/* --------------------------------------------------------------------------- */}
          {/* ---------------------Side Filter Categories-------------------------------- */}
          {/* --------------------------------------------------------------------------- */}
          <div className="col-md-3">
            <section id="sidebar">
              <p>
                Home | <b>All Meals</b>
              </p>
            
              <div className="border-bottom pb-2 ml-2">
                <h4 id="burgundy">Filters</h4>
              </div>
              <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Categories</h6>
                <div id="orange">
                  <span className="fa fa-minus"></span>
                </div>
                <form>
                  <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="All" checked/>
                      <label class="form-check-label" for="All">
                      All
                      </label>
                    </div>
                    {categoriesData.map((categories) => (
                     < div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id={categories.name} checked/>
                      <label class="form-check-label" for={categories.name}>
                      {categories.name}
                      </label>
                    </div>
                    
                 ))}
                 {/* {selected.map((cate) =>(
                   <p>{cate}</p>
                 ))} */}
                </form>
              </div>
              <div className="py-2 border-bottom ml-3">
                <h6 className="font-weight-bold">Accompainments</h6>
                <div id="orange">
                  <span className="fa fa-minus"></span>
                </div>
                <form>
                  <div className="form-group">
                    
                    <input type="checkbox" id="tea" />
                    <label for="tea">Tea Cakes</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="cookies" />
                    <label for="cookies">Cookies</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="pastries" />
                    <label for="pastries">Pastries</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="dough" />
                    <label for="dough">Cookie Dough</label>
                  </div>
                  <div className="form-group">
                    
                    <input type="checkbox" id="choco" />
                    <label for="choco">Chocolates</label>
                  </div>
                </form>
              </div>
              <div className="py-2 ml-3">
                <h6 className="font-weight-bold">Top Offers</h6>
                <div id="orange">
                  <span className="fa fa-minus"></span>
                </div>
                <form>
                  <div className="form-group">
                  
                    <input type="checkbox" id="25off" />
                    <label for="25">25% off</label>
                  </div>
                  <div className="form-group">
                   
                    <input type="checkbox" id="5off" />
                    <label for="5off" id="off">
                      5% off on artisan breads
                    </label>
                  </div>
                </form>
              </div>
            </section>
          </div>
          {/* --------------------------------------------------------------------------- */}
          {/* ------------------------------------Side Food Products -------------------- */}
          {/* --------------------------------------------------------------------------- */}
          <div className="col-md-9">
            {/* <!-- products section --> */}
            <section id="productss">
              <div className="container-product">
                <div className="d-flex flex-row">
                  <div className="text-muted m-2" id="res">
                    Showing 44 results
                  </div>
                  <div className="ml-auto mr-lg-4">
                    <div id="sorting" className="border rounded p-1 m-1">
                     
                      <span className="text-muted">Sort by</span>
                      <select name="sort" id="sort">
                        <option value="popularity">
                          <b>Popularity</b>
                        </option>
                        <option value="prcie">
                          <b>Price</b>
                        </option>
                        <option value="rating">
                          <b>Rating</b>
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
               {products.map((prod)=>
               
               <div key={prod.id} className="col-md-3 col-sm-12 mb-2 mr-5">
                      <Product product={prod}  onAddToCart={onAddToCart} />
                    </div>
               
               )}
                {/* (products.filter((prod)=>prod.categories[0].name==={xcate}).map((value)=> (
                    <div key={value.id} className="col-md-3 col-sm-12 mb-2 mr-5">
                      <Product product={value}  onAddToCart={onAddToCart} />
                    </div>
                ))) */}
                {/* {selected.map((xcate)=>
                (products.filter((prod)=>prod.categories[0].name==={xcate}).map((value)=> (
                    <div key={value.id} className="col-md-3 col-sm-12 mb-2 mr-5">
                      <Product product={value}  onAddToCart={onAddToCart} />
                    </div>
                ))))} */}
                
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllProducts;





// const [theArray, setTheArray] = useState([]);
// const [isChecked, setIsChecked] = useState(false);
// const handleOnChange = (event) => {
  //   const checkValue=event.target.checked;
  //   setIsChecked(checkValue);
  //   console.log("checkValue== "+checkValue)
  //   if (checkValue){
  //     setTheArray([...theArray, event.target.id]);
  //     console.log("isChecked==="+event.target.checked+ "    id=  "+ event.target.id)}
  //   else{
  //     const index=theArray.indexOf(event.target.id)
  //     theArray.splice(index,1);
  //     console.log("in else isChecked==="+event.target.checked+ "    id=  "+ event.target.id)}
  //     setTheArray(theArray);
  //   };
  
// const addEntryClick = (id) => {
//     setTheArray([...theArray, `${id}`]);
//   };


 {/* xproducts.filter((item) => item.categories[0].name===sel) */}
                 {/* {selected.map((cate)=>(console.log(cate)

                      {filteredProducts.map((product) => (
                        <div key={product.id} className="col-md-3 col-sm-12 mb-2">
                        <Product product={product}  onAddToCart={onAddToCart} />
                        </div>
                      ))}

                      {selected.map((category) => {
                        // filter out the products of the current category
                        const fliterProducts = products.filter(prod => prod.categories[0].name === category);
                        // now render only those filtered out products
                        // and display them in the CatSection component
                 }
                 ))} */}
                  {/* { selected?

                    selected.map((category) => {
                      <p>yyyyyyyyyyyyyyyyyyyyyyyyyyyyy</p>
                        // filter out the products of the current category
                        const fliterProducts = products.filter(prod => prod.categories[0].name === category);
                        fliterProducts.map((product) => (
                          <div key={product.id} className="col-md-3 col-sm-12 mb-2">
                          <Product product={product}  onAddToCart={onAddToCart} />
                          </div>
                       ))})
                :
                
                       products.map((product) => (
                         
                        <div key={product.id} className="col-md-3 col-sm-12 mb-2">
                        <Product product={product}  onAddToCart={onAddToCart} />
                        <p>noooooooooooooooooooooooooooooo</p>
                        </div>
                       ))} */}
                      // useEffect(()=>{
                        //   // const fliterProducts=[]
                        //   if (selected){
                        //   selected.map((cate)=>{
                        //     const myFliterProducts = products.filter(prod => prod.categories[0].name === cate);
                        //     // allFilterProd=[...xproducts,fliterProducts]
                        //     setFilteredProducts(myFliterProducts)
                            
                        //   })
                          
                        //   console.log("filteredProducts")
                        //   console.log(filteredProducts)}else{
                        //     setFilteredProducts(products)
                        //   }
                        // }, [selected])
                        // --------------------------------------------------------------
                        // useEffect(() => {
                        //   console.log("effeccccct")
                        //   const sel="Burger"
                        //   const filtered = true
                        //     ? xproducts.filter((item) => item.categories[0].name===sel)
                        //     : xproducts;
                        //     setFilteredProducts(filtered)
                        //     console.log("filtered");
                        //   console.log(filtered);
                        // }, [selectedTag, xproducts]);
                        