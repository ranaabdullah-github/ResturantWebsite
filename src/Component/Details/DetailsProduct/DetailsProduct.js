import React,{useState,useEffect} from 'react'
import './DetailsProduct.css'
import {commerce} from "../../../Lib/commerce"
import querystring from 'query-string'
import Url from 'url-parse'
import NavbarShopping from '../../ViewProducts/NavbarShopping/NavbarShopping'
const DetailsProduct = ({idProduct}) => {


	//-------------------Get Data From commerce.js------------------------------------
	const [cart,setCart] = useState({line_items: []})
    const [product,setProduct]=useState()
	const [nameProduct,setNameProduct]=useState()
	const [priceProduct,setPriceProduct]=useState()
	const [imageProduct,setImageProduct]=useState("")
	let urlImage=""

    // ----------Fetch data products----------------------
    commerce.products.retrieve(idProduct).then((xproduct) =>		
		{setNameProduct(xproduct.name)
		setPriceProduct(xproduct.price.formatted)
		var url = new Url(xproduct.image.url);
		let parsedUrl = url.toString(); //would be url.parse(req.url)
		
		console.log("url=="+parsedUrl);
		setImageProduct(parsedUrl)
	
	}
	);
  
    const handleAddToCart = async (productid, quantity) =>{
		const {cart} = await commerce.cart.add(productid, quantity)
		setCart(cart)
  
	  }
	// --------------------------------------------------------------------------------
    const [selected, setSelected] = useState();
    const [active, setActive] = useState("");
    let visible=false;
    useEffect(() => {
        if (!visible) {
            visible=true;
          setActive("disabled tab-link");
        }else
        {
            setActive("tab-link");
            visible=false;
        }
      }, [visible]);
	  
    return (
        <div>
			 <NavbarShopping totalItems={cart.total_items}/>
            <section id="product-1" class="pt-100 single-product division">
				<div class="container">
					<div class="row">


						{/* <!-- PRODUCT IMAGE --> */}
						<div class="col-lg-7">
							<div class="product-preview">

								
							 	{/* <!-- TABS CONTENT --> */}
				 				<div class="tabs-content">
                                    
				 					{/* <!-- TAB-1 CONTENT --> */}
									<div id="tab-1-img" class="tab-content text-center displayed">
										<img class="img-fluid imgzoomIn" id="zoomIn" src={imageProduct} alt="menu-image"/>
									</div>

									{/* <!-- TAB-2 CONTENT --> */}
									<div id="tab-2-img" class="tab-content text-center">
										<img class="img-fluid" src={imageProduct} alt="menu-image"/>
									</div>

									{/* <!-- TAB-3 CONTENT --> */}
									<div id="tab-3-img" class="tab-content text-center">
										<img class="img-fluid" src={imageProduct} alt="menu-image"/>
									</div>

								</div>{/* <!-- END TABS CONTENT --> */}


								{/* <!-- TABS NAVIGATION --> */}
								<div class="tabs-nav">
								 	<div class="row">
										<div class="col-lg-12 text-center">
									 		<ul class="tabs-2 clearfix">

									 			{/* <!-- TAB-1 LINK --> */}
                                                 <li class={visible? {active}: "tab-link"}   data-tab="tab-1-img" onClick={() => setSelected("/images/imageDet/burger-06.png")} disabled={active}>
													<img src={imageProduct} alt="menu-image"/>
												</li>

												{/* <!-- TAB-2 LINK --> */}
												<li class="tab-link displayed" data-tab="tab-2-img" onClick={() => setSelected("/images/imageDet/burger-04.png")} disabled={active}>
													<img src={imageProduct} alt="menu-image"/>
												</li>

												{/* <!-- TAB-2 LINK --> */}
												<li class="tab-link displayed" data-tab="tab-3-img" onClick={() => setSelected("/images/imageDet/burger-07.png")} disabled={active}>
													<img src={imageProduct} alt="menu-image"/>
												</li> 

											</ul>
										</div>
									</div>	
                                    </div>{/*  <!-- END TABS NAVIGATION --> */}


							</div>
                        </div>{/* 	<!-- END PRODUCT IMAGE --> */}


						{/* <!-- PRODUCT DISCRIPTION --> */}
						<div class="col-lg-5">
							<div class="product-description">

								{/* <!-- TITLE --> */}
								<div class="project-title">

									{/* <!-- Title --> */}
									{/* <h2 class="h2-lg">{ProductObj.idProd}</h2> */}
									<h2 class="h2-lg">{nameProduct}</h2>

									{/* <!-- Rating --> */}
									<div class="stars-rating">
										<span>4.38</span>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star"></i>
										<i class="fas fa-star-half-alt"></i>
										<span>(3 Customer Reviews)</span>
									</div>		

									{/* <!-- Price --> */}
									<div class="project-price">
										<h4 class="h4-xl yellow-color"><span class="old-price">$9.95</span>{priceProduct}</h4>
									</div>

								</div>

								{/* <!-- TEXT --> */}
								<div class="product-txt">

									{/* <!-- Text --> */}
									<p class="p-md grey-color">Integer congue magna at pretium purus pretium ligula rutrum risus ultrice luctus
									   ligula congue a vitae auctor sapien gravida enim ipsum congue morbi pretium
									</p>

									{/* <!-- Product Data --> */}
									<div class="product-info">
										<p>Portion Size: <span>390g</span></p>
										<p>Calories: <span>680Kj</span></p>
										<p>Allergies: <span>Lactose, Gluten, Mustard</span></p>
										<p>Tags: <span>Burgers, Fast Food, Testo</span></p>
									</div>

									{/* <input class="qty" type="number" min="1" max="20" value="1"/> */}

									{/* <!-- Add To Cart --> */}
									<div class="add-to-cart-btnDet bg-yellow ico-20 text-center">
										<li href="#" onClick={() => handleAddToCart(idProduct,1)}><span class="flaticon-shopping-bag"></span> Add to Cart</li>
									</div>

									{/* <!-- List -->	 */}
									<ul class="txt-list">
										<li class="list-item"><p class="p-sm">We accept credit cards or cash to a courier</p></li>
										<li class="list-item"><p class="p-sm">Shipping cost is $2 (Free from $35)</p></li>
										<li class="list-item"><p class="p-sm">Order before noon for same day dispatch</p></li>
									</ul>

                                </div>	{/* <!-- END TEXT--> */}

							</div>
                        </div>{/* <!-- END PRODUCT DISCRIPTION --> */}


                    </div>{/* <!-- End row --> */}
				</div>{/* <!-- End container -->  */}
			</section>

        </div>
    )
}

export default DetailsProduct
