import {topmost,navbar,bottom_nav} from "../components/navbar.js";



document.getElementById("topmost").innerHTML = topmost();
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("bottom_nav").innerHTML = bottom_nav();





var cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartData);
// var cartProducts = [{image: "https://ak1.ostkcdn.com/images/products/is/images/direct/46a2619bf7e2515d8d79a4b5e658a5a3f78d02d1/LUCID-Comfort-Collection-10-inch-Luxury-Gel-Memory-Foam-Mattress.jpg?impolicy=mediumlow",
//                      name: "LUCID Comfort Collection 10-inch Luxury Gel Memory Foam Mattress",
//                      price: 99.99,
//                      category: "Chair"}];

if (cartProducts.length === 0)
{
    let h1 = document.createElement("h1");
    h1.innerText = "Your Cart is Empty";
    document.getElementById("showProduct").append(h1)
} else
{
    displayData(cartProducts);
}


document.querySelector(".counter").innerText = `(${cartProducts.length})`;

// Calculating total price of items
var total = cartProducts.reduce(function(sum,elem){
    return sum + Number(elem.price);
}, 0);


console.log(total);
document.getElementById("finalTotal").innerText = `${total}`;
document.getElementById("total").innerText = `₹${total}`;


function displayData(cartProducts) {

    cartProducts.map(function(elem,index) {
        let main_product_box = document.createElement("div");
        main_product_box.setAttribute("id","mainProductBox");
        
        let image_div = document.createElement("div");
        image_div.setAttribute("id","imageDiv");

        let product_image = document.createElement("img");
        product_image.setAttribute("id","productImage");
        product_image.src = elem.image;

        image_div.append(product_image);

        let product_details = document.createElement("div");
        product_details.setAttribute("id","productDetails");

        let product_name = document.createElement("p");
        product_name.setAttribute("id","productName");
        product_name.innerText = elem.title;

        let product_price = document.createElement("p");
        product_price.setAttribute("id","productPrice");
        product_price.innerText = `₹${elem.price}`; 
        
        let selectTag = document.createElement("select");

        let option1 = document.createElement("option");
        option1.innerText = "1";
        option1.value = "1";

        let option2 = document.createElement("option");
        option2.innerText = "2";
        option2.value = "2";

        let option3 = document.createElement("option");
        option3.innerText = "3";
        option3.value = "3";

        let option4 = document.createElement("option");
        option4.innerText = "4";
        option4.value = "4";

        let option5 = document.createElement("option");
        option5.innerText = "5";
        option5.value = "5";

        selectTag.append(option1,option2,option3,option4,option5);

        let remove_div = document.createElement("div");
        remove_div.setAttribute("id","removeDiv");

        let removeBtn = document.createElement("p");
        removeBtn.setAttribute("id","remove");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click",function () {
            removeItem(elem,index);
        });
        
        let saveLaterBtn = document.createElement("p");
        saveLaterBtn.setAttribute("id","saveLater");
        saveLaterBtn.innerText = "Save for later";

        remove_div.append(removeBtn,saveLaterBtn);

        product_details.append(product_name,product_price,selectTag,remove_div);

        main_product_box.append(image_div,product_details);

        document.getElementById("showProduct").append(main_product_box);
        
    });

}

let removeItem = (elem,index) => {
    console.log(elem,index);
    cartProducts.splice(index,1);
    console.log(cartProducts);
    localStorage.setItem("cart",JSON.stringify(cartProducts));
    window.location.reload();
    displayData(cartProducts);
}

document.getElementById("checkoutBtn").addEventListener("click",gotoPayment);
function gotoPayment() {
    window.location.href = "payment.html";
}