import {topmost,navbar,bottom_nav} from '../components/navbar.js';
document.getElementById('navbar').innerHTML=navbar()
document.getElementById('topmost').innerHTML=topmost()
document.getElementById('bottom_nav').innerHTML=bottom_nav()
let productData = [

    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/59933e0f48697a87c85dcf166036177dede15f2d/SAFAVIEH-Kids-Jayshree-Polka-Dot-Wool-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13654.57",
     rating : 4.2,
     title : "Cambridge Casual Alston Outdoor Rocking Chair"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/2b80645c0cfc95b341c6dab851ea4f0dde770aa4/SAFAVIEH-Cabana-Indoor--Outdoor-Laila-Floral-Patio-Backyard-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6476.31",
     rating : 4.8,
     title : "Veradek Brixton Series 36' Planter box",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/af0a6dd2a09968765c78851a85c2d5e43b434191/SAFAVIEH-Veranda-Eyvor-Indoor--Outdoor-Patio-Backyard-Rug.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 22117.28",
     rating : 4,
     title : "Brookside Iris Rattan Outdoor Seating Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/d87a15db83e97745c6b440f45bebf40816f02ec1/Left-Facing-Ginger-3-piece-Sectional-Sofa-Set.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 4613.73",
     rating : 4,
     title : "Outsunny 6'L x 7'H Outdoor Walk-in Tunnel Greenhouse with 3-Levels of Shelving,Roll-up Door, & Weather Cover"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/29123275/Copper-Grove-Mdina-Large-Faux-Leather-Storage-Ottoman-4ab58a7e-a7df-45de-9751-32b16fae9dd0_1000.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13745.26",
     rating : 4.1,
     title : "3-pc Outdoor Cushioned Wicker Chat Set"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/fb0c80fd9771efbf2c5ad3d891d1bf200dc6e2f7/Bessie-Fabric-Cow-Patterned-Ottoman-by-Christopher-Knight-Home.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 9525.67",
     rating : 4.1,
     title : "Keter Novel 90-gallon Brown Plastic Deck Storage Box"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/45806adeea095c29220f46b9134f7bc1095d68c1/Brookside-Vertical-Bar-Traditional-Metal-Headboard.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 10262.51",
     rating : 4.9,
     title : "Metallic Series Long Planter"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/45806adeea095c29220f46b9134f7bc1095d68c1/Brookside-Vertical-Bar-Traditional-Metal-Headboard.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 8247.33",
     rating : 4.2,
     title : "SUNCROWN 4-foot Wooden Raised Garden Bed"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/890f71f27fd80380cf0b5a1ca7445cffb3253b5d/Luxe-Combo-Console-Table.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 58768.10",
     rating : 4,
     title : "Nuon %-peice Outdoor Wicker Patio Cabopy Daybed Set by Havenside Kome"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/77c4a9fa2f51d59423bdac3b50425c21d4581722/Velvet-Upholstered-L-Shape-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 589669.53",
     rating : 4.8,
     title : "Laguna Ploy Folding Adirondack Chair (Set of 4)"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/77c4a9fa2f51d59423bdac3b50425c21d4581722/Velvet-Upholstered-L-Shape-Sectional-Sofa.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 13562.14",
     rating : 4.5,
     title : "Demta Cobalt Blue Creamic Founding with LED Light by Havenside Home"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/07fc0be5d751536f90fd8a97a32c5cddfc7d78eb/Ergonomic-Office-Chair-with-Lumbar-Support-Back%2C-Adjustable-Headrest.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 6414.40",
     rating : 5,
     title : "Veradek Briton Tall 28' Planter",
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/17362041/Christopher-Knight-Home-Calliope-Buttoned-Fabric-2-Seat-Recliner-Club-Chair-33b87de2-c8b5-4df5-80a5-a299ead9e715_1000.jpg?imwidth=480&impolicy=medium",
     rating : 4.5,
     title : "Homall Patio Zero Gravity Chair Lawn Lounge Chair with Pillow Set of 2"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/17362041/Christopher-Knight-Home-Calliope-Buttoned-Fabric-2-Seat-Recliner-Club-Chair-33b87de2-c8b5-4df5-80a5-a299ead9e715_1000.jpg?imwidth=480&impolicy=medium",
     name : "Sale INR 2552.33",
     rating : 4.3,
     title : "Alpine Corporation 28' Tall Outside Birdbath with Scrollwork Decoration Yard Statue"
 
    },
 
    {
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/bf98fab33f7471f84c5795eb2bb67dab3b00eb4d/3-Pieces-Sectional-Sofa-Set%2CRight-Facing-Denim%2809518B%29.jpg?imwidth=480&impolicy=medium",
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
 
     image : "https://ak1.ostkcdn.com/images/products/20306592/Lotusville-24.5-inch-Vintage-PU-Leather-Counter-Height-Stools-Set-of-2-7cffe0b7-7653-4f15-8279-65ce9a00c9d1_1000.jpg?imwidth=480&impolicy=medium",
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
 
     image : "https://ak1.ostkcdn.com/images/products/is/images/direct/04eac4c2b0c48977c9224438ce12f7fc869b5063/Copper-Grove-Willamette-Black-Backless-Counter-Stool.jpg?imwidth=480&impolicy=medium",
     name : "Sale Start at INR 2931.65",
     rating : 5,
     title : "Siscover Fiji Indoor - Outdoor Tropical Throw Pillow"
 
     },
 
     {
 
         image : "https://ak1.ostkcdn.com/images/products/is/images/direct/b8592d7ebfd5e457a9be4b2a48f85fbe5f164fc8/Porch-%26-Den-Zuni-Arm-Chair-with-Removable-Slip-Cover.jpg?imwidth=480&impolicy=medium",
         name : "Sale INR 7970.91",
         rating : 4,
         title : "Half Wheeled Rating, Stained Wood"
     
     },
     {
 
        image : "https://ak1.ostkcdn.com/images/products/is/images/direct/b8592d7ebfd5e457a9be4b2a48f85fbe5f164fc8/Porch-%26-Den-Zuni-Arm-Chair-with-Removable-Slip-Cover.jpg?imwidth=480&impolicy=medium",
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