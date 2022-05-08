import { topmost, navbar, bottom_nav } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("topmost").innerHTML = topmost();
document.getElementById("bottom_nav").innerHTML = bottom_nav();


var counter = 0;

let listData = JSON.parse(localStorage.getItem("list")) || []
console.log(listData);

// listData.map

displayData(listData)
function displayData(listData) {
    listData.map(function (elem,index) {

        counter++;
        let box = document.createElement("div");
        box.setAttribute("id", "match");

        let img = document.createElement("img")
        img.src = elem.image;

        let name = document.createElement("h4")
        name.innerText = elem.name;
        name.setAttribute("class", "nam")

        let rating = document.createElement("p")
        rating.innerText = elem.rating;
        rating.setAttribute("class", "rat")

        let title = document.createElement("p")
        title.innerText = elem.title;
        title.setAttribute("class", "tit");

        let btn = document.createElement("button")
        btn.innerText = "REMOVE"
        btn.addEventListener("click", function () {
            removeItem(elem,index);
        });
        // btn.setAttribute("class","button");
        btn.style.backgroundColor = "teal";
        btn.style.border = "none";
        btn.style.width = "100px";
        btn.style.padding = "5px";
        btn.style.fontfamily = "poppins";
        btn.style.fontWeight = "bold";
        btn.style.color = "white";
        // btn.style.marginLeft = "35%";


        box.append(img, name, rating, title, btn);
        document.querySelector("#products").append(box);

    })
}




let removeItem = (elem, index) => {
    counter--;
    console.log(elem, index);
    listData.splice(index,1);
    console.log(listData);
    localStorage.setItem("list", JSON.stringify(listData));
    displayData(listData);
    window.location.reload();

}


let addbio = document.getElementById("addbio");
if (document.getElementById("bio").value === '') {
    addbio.innerHTML = "Add your bio";
}

let screen = document.getElementById("screen");
// sname = document.getElementById("sname");
if (document.getElementById("sname").value === '') {
    screen.innerHTML = "Masai";
}



document.getElementById("edit").addEventListener("click", userDeatail);

function userDeatail() {
    console.log("working")
    var products = document.getElementById("products");
    var userForm = document.getElementById("userForm");
    //     console.log("working !");
    if (userForm.style.display = "none") {
        userForm.style.display = "block";
        products.style.display = "none";

    }
}

let saveButton = document.getElementById("save");
let bioInput = document.getElementById("bio").value;

saveButton.addEventListener("click", function () {
    event.preventDefault();
    console.log("save button");
    event.preventDefault();
    console.log("save button");
    console.log(document.getElementById("bio").value);
    if (document.getElementById("bio").value === '') {
        addbio.innerHTML = "Add your bio";
    } else {
        addbio.innerHTML = '';
        addbio.innerHTML = document.getElementById("bio").value;
    }

    if(document.getElementById("sname").value === ''){
        screen.innerHTML = "Masai";
    }else{
        screen.innerHTML = '';
        screen.innerHTML =  document.getElementById("sname").value;
    }
    // window.location.reload();

});
console.log(counter);
document.getElementById("faves").innerHTML = counter;
document.getElementById("listcount").innerHTML = counter;