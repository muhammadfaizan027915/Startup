// Clear navigation function
var linkVlaue;
function clearNavigation(){
    var anchors = document.querySelectorAll("#nav-left ul li a");
    for(var i=0; i<anchors.length; i++){
        if(anchors[i].classList.contains("link-click")){
            anchors[i].classList.remove("link-click");
        }
    }
}

// Bold anchor on click function
function boldUnderDot(a){
    clearNavigation();
    if(!a.classList.contains("link-click")){
        a.classList.add("link-click"); 
    }
}

// Bold anchor on Side menu click
function boldNavigation(a){
    clearNavigation();
    var b = a.getAttribute("href");
    var anchors = document.querySelectorAll("#nav-left ul li a");

    for(var i=0; i<anchors.length; i++){
        if(anchors[i].getAttribute("href") == b){
            anchors[i].classList.add("link-click");
            break;
        }
    }
}

// Function to check all fields are empty
function allEmpty(){
    let a = document.getElementsByTagName("input");
    let b = document.getElementById("message");

    let isEmpty = false;

    if(a[0].value == "" && b.value == "" && a[1].value == "")
    { isEmpty = true; }
    else
    {  isEmpty = false; }
    
    return isEmpty;
}

// Name field empty check function
function nameEmpty(){
    let a = document.querySelector("#form form #fullname");
    return a.value == "";
}

// Email field empty function
function emailEmpty(){
    let a = document.querySelector("#form form #email");
    return a.value == "";
}

// Email field validation function
function emailVlaidation(){
    let a = document.querySelector("#form form #email");

    if(!a.value.includes(".")|| !a.value.includes("@")){
        return true;
    }
    return false;
}

// Message field empty function
function messageEmpty(){
    let a = document.querySelector("#form form #message");
    return a.value == "";
}

// Display Message Function
function display(){

    console.log(emailVlaidation());

    if(allEmpty() == true){
        document.querySelector("#alert p").innerHTML = "Please fill all the fields to send message.";
    }

    else if(nameEmpty() == true && messageEmpty() == true){
        document.querySelector("#alert p").innerHTML = "Please write your full name and message to send.";
    }

    else if(emailEmpty() == true && messageEmpty() == true){
        document.querySelector("#alert p").innerHTML = "Please write your email and message to send.";
    }

    else if(nameEmpty() == true){
        document.querySelector("#alert p").innerHTML = "Please write your full name to send message.";
    }

    else if(emailEmpty() == true){
        document.querySelector("#alert p").innerHTML = "Please write an email to send message.";
    }

    else if(emailVlaidation() == true){
        document.querySelector("#alert p").innerHTML = "Please write a valid email to send message.";
    }

    else if(messageEmpty() == true){
        document.querySelector("#alert p").innerHTML = "Please write your message to send.";
    }

    else{
        document.querySelector("#alert p").innerHTML = "Your message has been sent. Thank you!";
        document.querySelector("#form form #message").value = "";
        document.querySelector("#form form #email").value = "";
        document.querySelector("#form form #fullname").value = "";
    }

    var scrollTop = window.pageYOffset;
    var a = document.getElementById("customalert").style.display = "block";
    document.getElementById("customalert").style.top = scrollTop+"px";
    document.body.style.overflow = "hidden";
}

// Close message function
function closeAlert(){
    document.querySelector("#customalert").style.display = "none";
    document.body.style.overflow = "auto";
}


// Removing elements at certain width 
var menu = document.querySelector("#nav-left ul");

if(window.outerWidth <= 620 ){
    document.getElementById("form-container").removeChild(document.getElementById("image"));
    document.getElementById("nav-left").removeChild(menu);
    document.getElementById("nav-right").remove();

    document.getElementById("nav-left").insertAdjacentHTML("beforeend","<i class='fa-solid fa-bars menu-icon' onclick='displayMenu()'></i>");
}

if(window.outerWidth <= 400){
    document.querySelector("#sidemenu").remove();
}

// Display Menu Function
function displayMenu(){

    var navDiv = document.querySelector(".navigation_before");
    if(navDiv.contains(menu)){
        navDiv.removeChild(menu);
        navDiv.classList.toggle("navigation_after");
    }

    else{
        navDiv.classList.toggle("navigation_after");
        navDiv.appendChild(menu);
    }

   var links = document.querySelectorAll(".navigation_before ul li a");
   console.log(links.length);
   for(var i=0; i<links.length; i++){
        links[i].classList.remove('link-click');
        links[i].removeAttribute('onclick');
        links[i].setAttribute('onclick','closeMenu()');
   }
}

function closeMenu(){
    
    document.querySelector('.navigation_before').classList.remove('navigation_after');
    document.querySelector(".navigation_before").removeChild(menu);
}