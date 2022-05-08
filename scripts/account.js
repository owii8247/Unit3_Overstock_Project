import { topmost, navbar, bottom_nav } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
document.getElementById("topmost").innerHTML = topmost()
document.getElementById("bottom_nav").innerHTML =bottom_nav()




//  SignUP Part Starts From Here

// document.querySelector("#form").getElementById("submit", signUp);
document.querySelector("#form1").addEventListener("submit", signUp);
var userDataBase = JSON.parse(localStorage.getItem("userDataBase")) || [];
var flag = false;
let username = JSON.parse(localStorage.getItem("username")) || [];


function signUp(event) {

    event.preventDefault();
    console.log(1)
    let email = document.querySelector("#email").value;
    let c_password = document.querySelector("#create-pass").value;
    let password = document.querySelector("#confirm-pass").value;

    let userData = {
        userEmail: email,
        user_c_password: c_password,
        userPassword: password,
    };
    if (userDataBase.length != 0) {
        let arr = JSON.parse(localStorage.getItem("userDataBase")) || [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].userEmail === email) {
                flag = true;
                break;
            }
        }
        if (flag) {
            alert("Use Already Exists!!");
        } else {
            userDataBase.push(userData);
            localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
            alert("Signup Successful !! Enter LogIn Credentials");
            window.location.href = "#";
            document.querySelector("#email").value = "";
            document.querySelector("#create-pass").value = "";
            document.querySelector("#confirm-pass").value = "";
        }
    } else {
        userDataBase.push(userData);
        localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
        alert("Signup Successful!! Enter LogIn Credentials");
        window.location.href = "#";
        document.querySelector("#email").value = "";
        document.querySelector("#create-pass").value = "";
        document.querySelector("#confirm-pass").value = "";
    }

}

//  SigIn part start
document.querySelector("#form2").addEventListener("submit", logIn);

function logIn(event) {
    event.preventDefault();
    let email = document.querySelector("#sign-in-email").value;
    let password = document.querySelector("#password").value;

    let arr = JSON.parse(localStorage.getItem("userDataBase"));

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i].userEmail === email &&
            arr[i].userPassword === password
        ) {
            var name = email[0] + email[1] + email[2] + email[3] + email[4] + email[5] + email[6] + email[7] + email[8]

            username.push(name)
            localStorage.setItem("username", JSON.stringify(username));


            flag = true;

            alert("LogIn Successfull !!");
            setTimeout(() => {
                window.location.href = "index.html"
            }, 800)

            break;
        }
    }
    if (flag == false) {
        alert("Wrong Credentials !!");


    }


}
document.querySelector("#guest").addEventListener("click",GUEST);
function GUEST(){
    window.location.href="index.html";
};