import {topmost,navbar,bottom_nav} from '../components/navbar.js';
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('topmost').innerHTML=topmost()
document.getElementById('bottom_nav').innerHTML=bottom_nav()
let productData = [

    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/c0575fe147699ef97dbe81815d738e773590a39a/Safavieh-Madison-Gemma-Moroccan-Boho-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13654.57",
     rating : 4.2,
     title : "Cambridge Casual Alston Outdoor Rocking Chair"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/0679f2714c355399193896f19d966941d98fbbca/SAFAVIEH-Adirondack-Vera-Modern-Ombre-Distressed-Stripe-Area-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6476.31",
     rating : 4.8,
     title : "Veradek Brixton Series 36' Planter box",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/a86bf8ddf0956295f258accacd45fac4b3764e3e/SAFAVIEH-Vision-Tanasa-Modern-Ombre-Tonal-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 22117.28",
     rating : 4,
     title : "Brookside Iris Rattan Outdoor Seating Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/455f19f0bb35e35fc156a7dbe256d287a9069271/SAFAVIEH-August-Shag-Solid-1.2-inch-Thick-Area-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 4613.73",
     rating : 4,
     title : "Outsunny 6'L x 7'H Outdoor Walk-in Tunnel Greenhouse with 3-Levels of Shelving,Roll-up Door, & Weather Cover"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/9822fb5768ba8e66cb1fe4e6f3330139a8989cd3/SAFAVIEH-Madison-Liboria-Modern-Abstract-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13745.26",
     rating : 4.1,
     title : "3-pc Outdoor Cushioned Wicker Chat Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/9822fb5768ba8e66cb1fe4e6f3330139a8989cd3/SAFAVIEH-Madison-Liboria-Modern-Abstract-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 9525.67",
     rating : 4.1,
     title : "Keter Novel 90-gallon Brown Plastic Deck Storage Box"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/973cc91819b153456931ef3960966a0ea64155f1/SAFAVIEH-Veranda-Eyvor-Indoor--Outdoor-Patio-Backyard-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 10262.51",
     rating : 4.9,
     title : "Metallic Series Long Planter"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/08690190d85de6949be9d1f557ec6f1d07505826/SAFAVIEH-Madison-Gudlin-Modern-Abstract-Watercolor-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 8247.33",
     rating : 4.2,
     title : "SUNCROWN 4-foot Wooden Raised Garden Bed"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/6bee83d7926c0684edc3a7b6dbbdabca8eb4c4bf/SAFAVIEH-Madison-Memnuna-Modern-Abstract-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 58768.10",
     rating : 4,
     title : "Nuon %-peice Outdoor Wicker Patio Cabopy Daybed Set by Havenside Kome"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/6bee83d7926c0684edc3a7b6dbbdabca8eb4c4bf/SAFAVIEH-Madison-Memnuna-Modern-Abstract-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 589669.53",
     rating : 4.8,
     title : "Laguna Ploy Folding Adirondack Chair (Set of 4)"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/ecd9c6bc556fea128eb8dd6ccab216981fb696b4/SAFAVIEH-Courtyard-Carolann-Indoor--Outdoor-Patio-Backyard-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13562.14",
     rating : 4.5,
     title : "Demta Cobalt Blue Creamic Founding with LED Light by Havenside Home"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/801dad5c0dacb1f86d71584009a77f97fe8729ae/Martha-Stewart-Handmade-Severiana-Farmhouse-Solid-Jute-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6414.40",
     rating : 5,
     title : "Veradek Briton Tall 28' Planter",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/ecd9c6bc556fea128eb8dd6ccab216981fb696b4/SAFAVIEH-Courtyard-Carolann-Indoor--Outdoor-Patio-Backyard-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 11175.49",
     rating : 4.5,
     title : "Homall Patio Zero Gravity Chair Lawn Lounge Chair with Pillow Set of 2"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/1488aff3d011ed3575ff869dc3b1a15d0611c8b7/SAFAVIEH-Handmade-Cambridge-Myrtis-Moroccan-Wool-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 2552.33",
     rating : 4.3,
     title : "Alpine Corporation 28' Tall Outside Birdbath with Scrollwork Decoration Yard Statue"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/801dad5c0dacb1f86d71584009a77f97fe8729ae/Martha-Stewart-Handmade-Severiana-Farmhouse-Solid-Jute-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 19997.46",
     rating : 4.5,
     title : "28' Square Glass Metal Table with Rattan Edging and 4 Rattan Atack Chairs"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/a9d30fefa2456a7769afea4d72ad129e2c787be0/SAFAVIEH-Handmade-Himalaya-Kaley-Solid-Wool-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 114798.14",
     rating : 4.6,
     title : "EROMMY Hardtop Gazebo, Permanent Outdoor Patio Gazebo"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/bc65f1d220e693b701ceb3a26d33098bb994e62b/SAFAVIEH-Handmade-Natura-Fanette-Wool-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 10680.19",
     rating : 4.7,
     title : "Alpino Corporation 40' Tall Outdoor 3-Tier Barrel Pump Waterfall Fountain, Brown"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/bc65f1d220e693b701ceb3a26d33098bb994e62b/SAFAVIEH-Handmade-Natura-Fanette-Wool-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 29886.76",
     rating : 4.6,
     title : "SAFAVIEH Outdoor Living Newport Brown Cart Wheel Adjustment Chaise-27.6' x 14.2'"
 
     },
 
     {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/a9d30fefa2456a7769afea4d72ad129e2c787be0/SAFAVIEH-Handmade-Himalaya-Kaley-Solid-Wool-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 2931.65",
     rating : 5,
     title : "Siscover Fiji Indoor - Outdoor Tropical Throw Pillow"
 
     },
 
     {
 
         image : "https://ak1.ostkcdn.com/images/products/is/images/direct/a5c98d73d4dca630a1e59aaadfd642a4f9a7c713/SAFAVIEH-Reflection-Nedelja-Charming-Oriental-Rug.jpg?imwidth=480&impolicy=medium",
         name : "Sale INR 7970.91",
         rating : 4,
         title : "Half Wheeled Rating, Stained Wood"
     
     },
     {
 
        image : "https://ak1.ostkcdn.com/images/products/is/images/direct/a9d30fefa2456a7769afea4d72ad129e2c787be0/SAFAVIEH-Handmade-Himalaya-Kaley-Solid-Wool-Rug.jpg?imwidth=480&impolicy=medium",
        name : "Sale Start at INR 114798.14",
        rating : 4.6,
        title : "EROMMY Hardtop Gazebo, Permanent Outdoor Patio Gazebo"
    
       },
 
 
 ]
 
 let cartData = JSON.parse(localStorage.getItem("cart")) || []
 let listData = JSON.parse(localStorage.getItem("list")) || []
 
 displayData(productData)
 function displayData(productData){
 
     productData.map(function(elem){
 
         let box = document.createElement("div")
     
         let img = document.createElement("img")
         img.src = elem.image;
     
         let name = document.createElement("h4")
         name.innerText = elem.name;
         name.setAttribute("class","nam")
     
         let rating = document.createElement("p")
         rating.innerText = elem.rating;
 
         rating.setAttribute("class","rat")
     
     
         let title = document.createElement("p")
         title.innerText = elem.title;
         title.setAttribute("class","tit")
     
         let box2 = document.createElement("div")
         box2.setAttribute("class","boxer")
     
         let btn = document.createElement("button")
         btn.innerText = "ADD TO CART"
         btn.addEventListener("click",function(){
             addToCart(elem);
         });
         btn.setAttribute("class","bt")
     
         let btn2 = document.createElement("button")
         btn2.innerText = "ADD TO WISHLIST"
         btn2.addEventListener("click",function(){
             wishlist(elem);
         });
         btn2.setAttribute("class","button")

         box2.append(btn,btn2)
     
         box.append(img, name, rating,title,box2);

         document.querySelector("#container").append(box)
     });
 
 }
 
 
 function addToCart(elem){
     console.log(elem);
     cartData.push(elem)
     localStorage.setItem("cart",JSON.stringify(cartData))
     alert("Added To Cart")
 }
 
 function wishlist(elem){
     console.log(elem);
     listData.push(elem)
     localStorage.setItem("list",JSON.stringify(listData))
     alert("Added To Wishlist")
 }
 
 function handlerating() {
     document.querySelector("#container").innerHTML = ""
     let selected = document.querySelector("#sort").value
     
 
     if(selected == "lth")
     {
         productData.sort(function(a,b){
             return a.rating - b.rating
         });
         console.log(productData)
         displayData(productData)
     }
     if(selected == "htl")
     {
         productData.sort(function(a,b){  
             return b.rating - a.rating
         });
         console.log(productData);
         displayData(productData)
     }
 }