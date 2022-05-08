import {topmost,navbar,bottom_nav} from '../components/navbar.js';
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('topmost').innerHTML=topmost()
document.getElementById('bottom_nav').innerHTML=bottom_nav()
let productData = [

    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/8dbac2cc2907a11d8fba3369b00fa2919eed6e7e/Set-of-Two-Jameson-Textured-Ceramic-Table-Lamps.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13654.57",
     rating : 4.2,
     title : "Cambridge Casual Alston Outdoor Rocking Chair"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/8f13954e5ae1017ae0fa28ea904713ed4780cd9b/Daniela-5-light-Antique-Black-Metal-and-Natural-Wood-Glass-Chandelier.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6476.31",
     rating : 4.8,
     title : "Veradek Brixton Series 36' Planter box",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/15958513/Two-Pack-100-LED-String-Light-Warm-White-Outdoor-light-Decorative-Light-10c9c763-9448-480d-b51f-540be6294b21_1000.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 22117.28",
     rating : 4,
     title : "Brookside Iris Rattan Outdoor Seating Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/ce5b40b21833f952e9102b7b0739f868039033da/Nautical-Striped-Blue-with-Rope-Detail-Table-Lamp.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 4613.73",
     rating : 4,
     title : "Outsunny 6'L x 7'H Outdoor Walk-in Tunnel Greenhouse with 3-Levels of Shelving,Roll-up Door, & Weather Cover"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/ca810d569a1d8769a0c9f78b5a3761d0dbd088eb/Harrison-Arc-Blackened-Bronze-Floor-Lamp.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13745.26",
     rating : 4.1,
     title : "3-pc Outdoor Cushioned Wicker Chat Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/ca810d569a1d8769a0c9f78b5a3761d0dbd088eb/Harrison-Arc-Blackened-Bronze-Floor-Lamp.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 9525.67",
     rating : 4.1,
     title : "Keter Novel 90-gallon Brown Plastic Deck Storage Box"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/c658ecd2c17dcec65ccfab1d07a7310fac6dca7b/36%22-Dimmable-Retractable-Ceiling-Fan-with-LED-Light-%26-Remote.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 10262.51",
     rating : 4.9,
     title : "Metallic Series Long Planter"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/c658ecd2c17dcec65ccfab1d07a7310fac6dca7b/36%22-Dimmable-Retractable-Ceiling-Fan-with-LED-Light-%26-Remote.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 8247.33",
     rating : 4.2,
     title : "SUNCROWN 4-foot Wooden Raised Garden Bed"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/39e795b353d62e22c27bb023df016228112c9ae7/Fora-Farmhouse-4-light-Linear-Glass-Vanity-Lights-Faux-Wood-Wall-Sconces.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 58768.10",
     rating : 4,
     title : "Nuon %-peice Outdoor Wicker Patio Cabopy Daybed Set by Havenside Kome"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/73e7ad37b45e3af324d17c08d1d38ec402ea96bf/Porch-%26-Den-Victorine-Floor-Lamp-Etagere-Organizer-Storage-Shelf.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 589669.53",
     rating : 4.8,
     title : "Laguna Ploy Folding Adirondack Chair (Set of 4)"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/73e7ad37b45e3af324d17c08d1d38ec402ea96bf/Porch-%26-Den-Victorine-Floor-Lamp-Etagere-Organizer-Storage-Shelf.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13562.14",
     rating : 4.5,
     title : "Demta Cobalt Blue Creamic Founding with LED Light by Havenside Home"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/d2c6d0a403d27d0374389f6e1a59a9ed8229e7cd/Starlee-Tall-Box-Outdoor-Wall-Fixture-by-Havenside-Home.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6414.40",
     rating : 5,
     title : "Veradek Briton Tall 28' Planter",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/e0c7e4b424f35ea2fde1d80d855be4f29845902a/CO-Z-15-inch-Industrial-3-light-Metal-Cage-Ceiling-Flush-Mount.jpg?imwidth=480&impolicy=medium",
     rating : 4.5,
     title : "Homall Patio Zero Gravity Chair Lawn Lounge Chair with Pillow Set of 2"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/54194561e148d828c50c7ff5d9aa6fb9f99a3662/Sadler-6-Light-Pendant.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 2552.33",
     rating : 4.3,
     title : "Alpine Corporation 28' Tall Outside Birdbath with Scrollwork Decoration Yard Statue"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/c573f9d6a69837872b9dd247f9cb3afab95cea4d/6---Light-Modern-Metal-23.62%27%27-Sputnik-Semi-Flush-Mount-Ceiling-Light.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 19997.46",
     rating : 4.5,
     title : "28' Square Glass Metal Table with Rattan Edging and 4 Rattan Atack Chairs"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/c573f9d6a69837872b9dd247f9cb3afab95cea4d/6---Light-Modern-Metal-23.62%27%27-Sputnik-Semi-Flush-Mount-Ceiling-Light.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 114798.14",
     rating : 4.6,
     title : "EROMMY Hardtop Gazebo, Permanent Outdoor Patio Gazebo"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/580a51dd71afaf624b112263e772c87e16927825/Ramsey-16%27%27-Wide-4-Light-Chandelier---Matte-Black.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 10680.19",
     rating : 4.7,
     title : "Alpino Corporation 40' Tall Outdoor 3-Tier Barrel Pump Waterfall Fountain, Brown"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/54194561e148d828c50c7ff5d9aa6fb9f99a3662/Sadler-6-Light-Pendant.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 29886.76",
     rating : 4.6,
     title : "SAFAVIEH Outdoor Living Newport Brown Cart Wheel Adjustment Chaise-27.6' x 14.2'"
 
     },
 
     {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/39e795b353d62e22c27bb023df016228112c9ae7/Fora-Farmhouse-4-light-Linear-Glass-Vanity-Lights-Faux-Wood-Wall-Sconces.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 2931.65",
     rating : 5,
     title : "Siscover Fiji Indoor - Outdoor Tropical Throw Pillow"
 
     },
 
     {
 
         image : "https://ak1.ostkcdn.com/images/products/is/images/direct/73e7ad37b45e3af324d17c08d1d38ec402ea96bf/Porch-%26-Den-Victorine-Floor-Lamp-Etagere-Organizer-Storage-Shelf.jpg?imwidth=480&impolicy=medium",
         name : "Sale INR 7970.91",
         rating : 4,
         title : "Half Wheeled Rating, Stained Wood"
     
     },
     {
 
        image : "https://ak1.ostkcdn.com/images/products/is/images/direct/d2c6d0a403d27d0374389f6e1a59a9ed8229e7cd/Starlee-Tall-Box-Outdoor-Wall-Fixture-by-Havenside-Home.jpg?imwidth=480&impolicy=medium",
        name : "Sale INR 7970.91",
        rating : 4,
        title : "Half Wheeled Rating, Stained Wood"
    
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