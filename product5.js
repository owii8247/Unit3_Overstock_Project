import {topmost,navbar,bottom_nav} from '../components/navbar.js';
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('topmost').innerHTML=topmost()
document.getElementById('bottom_nav').innerHTML=bottom_nav()
let productData = [

    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/26acd2aeb45286792083d5e8ae5828a3ced7c5e0/12-Light-46In-Modern-Farmhouse-Wagon-Wheel-Chandelier.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13654.57",
     rating : 4.2,
     title : "Cambridge Casual Alston Outdoor Rocking Chair"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/69beb137e0281ec074f70d5e0cce2e69da9ab120/Solar-LED-Firework-Garden-Stake-Light.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6476.31",
     rating : 4.8,
     title : "Veradek Brixton Series 36' Planter box",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/2b53258638987449ea2c9e1654d7c2cb119125e4/Drusilla-Single-Light-Rattan-Pendant-Light.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 22117.28",
     rating : 4,
     title : "Brookside Iris Rattan Outdoor Seating Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/2b53258638987449ea2c9e1654d7c2cb119125e4/Drusilla-Single-Light-Rattan-Pendant-Light.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 4613.73",
     rating : 4,
     title : "Outsunny 6'L x 7'H Outdoor Walk-in Tunnel Greenhouse with 3-Levels of Shelving,Roll-up Door, & Weather Cover"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/931085e71ac0ddd9077dd16ea5d90becde5e8165/ExBrite-Modern-Rose-Gold-3-4-light-Bathroom-Crystal-Vanity-Lights-Wall-Sconces.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13745.26",
     rating : 4.1,
     title : "3-pc Outdoor Cushioned Wicker Chat Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/0d4562e2d0a6b9f7627488f819ea66df9d0a7b1c/2-Light-Natural-Rattan-Flush-Mount-Ceiling-Light.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 9525.67",
     rating : 4.1,
     title : "Keter Novel 90-gallon Brown Plastic Deck Storage Box"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/4f69844945594432f911253b48d413e21ab8879a/Silver-Orchid-Gotho-Matte-Black--Polished-Nickel-Floor-Lamp.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 10262.51",
     rating : 4.9,
     title : "Metallic Series Long Planter"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/b428e7e683a4ebd67bda49c98410530479a22732/Abalone-Glass-Pendant-Light-by-Hampton-Hill.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 8247.33",
     rating : 4.2,
     title : "SUNCROWN 4-foot Wooden Raised Garden Bed"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/1012a75eb110addbb3c98c30630617e8693b6b5e/Unique-Luxury-Tier-Antique-Brass-Crystal-Chandelier.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 58768.10",
     rating : 4,
     title : "Nuon %-peice Outdoor Wicker Patio Cabopy Daybed Set by Havenside Kome"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/4f51703f1158512f546ce33e3d0e8488b91e5330/Bartlett-Semi-Flush-Mount-Ceiling-Light-with-Clear-Glass.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 589669.53",
     rating : 4.8,
     title : "Laguna Ploy Folding Adirondack Chair (Set of 4)"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/02aded10317e656a54293962ba0f18fe612ec5dd/1-light-7-in.--9.5-in.-Outdoor-Black-Metal-Wall-Sconce-w--Clear-Glass-Shade.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13562.14",
     rating : 4.5,
     title : "Demta Cobalt Blue Creamic Founding with LED Light by Havenside Home"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/0b2d4e9f5a4aada3cfd6df1102c3e0e029ef2d5c/Flamingo-Gold-%26-White-Table-Lamp.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6414.40",
     rating : 5,
     title : "Veradek Briton Tall 28' Planter",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/2bf5a8fe43a9b41686cd653022e55d3083ed79d2/Brink-LED-Bathroom-Vanity-or-Wall-Light.jpg?imwidth=480&impolicy=medium",
     rating : 4.5,
     title : "Homall Patio Zero Gravity Chair Lawn Lounge Chair with Pillow Set of 2"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/b68e7efa92b1279bbab12a410b713934e7080252/Modern-Farmhouse-6-light-Black--Gold-French-Candle-Chandelier-for-Dining-Room.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 2552.33",
     rating : 4.3,
     title : "Alpine Corporation 28' Tall Outside Birdbath with Scrollwork Decoration Yard Statue"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/8693f7c598d0fa6ecf70ecd0952515176e070f51/23.5%22W-Bryar-Brass-and-Crystal-3-Light-Chandelier.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 19997.46",
     rating : 4.5,
     title : "28' Square Glass Metal Table with Rattan Edging and 4 Rattan Atack Chairs"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/69e83a907b53ff0f4e447e97b5b369de0b5a6a2e/Abbyson-Holloway-Mid-Century-Top-Grain-Leather-Sectional.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 114798.14",
     rating : 4.6,
     title : "EROMMY Hardtop Gazebo, Permanent Outdoor Patio Gazebo"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/69beb137e0281ec074f70d5e0cce2e69da9ab120/Solar-LED-Firework-Garden-Stake-Light.jpg?imwidth=480&impolicy=mediumm",
     name : "Sale INR 10680.19",
     rating : 4.7,
     title : "Alpino Corporation 40' Tall Outdoor 3-Tier Barrel Pump Waterfall Fountain, Brown"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/3f25c4171ef29c7807f25806a98da41809a743a3/HomePop-Draper-Large-Decorative-Bench-with-Button-Tufting---Light-Brown-Faux-Leather.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 29886.76",
     rating : 4.6,
     title : "SAFAVIEH Outdoor Living Newport Brown Cart Wheel Adjustment Chaise-27.6' x 14.2'"
 
     },
 
     {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/4f51703f1158512f546ce33e3d0e8488b91e5330/Bartlett-Semi-Flush-Mount-Ceiling-Light-with-Clear-Glass.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 2931.65",
     rating : 5,
     title : "Siscover Fiji Indoor - Outdoor Tropical Throw Pillow"
 
     },
 
     {
 
         image : "https://ak1.ostkcdn.com/images/products/is/images/direct/3630d83ffa23db1e8aa1321b757634d68da86a8a/Modern-Gold-3-light-Bathroom-Vanity-Light-Globe-Glass-Wall-Sconces.jpg?imwidth=480&impolicy=medium",
         name : "Sale INR 7970.91",
         rating : 4,
         title : "Half Wheeled Rating, Stained Wood"
     
     },
     {
 
        image : "https://ak1.ostkcdn.com/images/products/is/images/direct/3630d83ffa23db1e8aa1321b757634d68da86a8a/Modern-Gold-3-light-Bathroom-Vanity-Light-Globe-Glass-Wall-Sconces.jpg?imwidth=480&impolicy=medium",
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