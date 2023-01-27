document.getElementById("btnSignup").onclick = slide;


function slide() {
  document.getElementById("title").innerHTML = "User's Sign-up";
  document.getElementsByTagName("span")[0].style.transform = "translateY(0)";
  document.getElementsByTagName("span")[1].style.transform = "translateY(-50px)";

  document
    .getElementById("imageoverlay")
    .classList.toggle("image-overlay-toggle");
  document.getElementById("image").classList.toggle("image-toggle");
  document.getElementById("signin").classList.toggle("signin-toggle");
  document.getElementById("signup").classList.toggle("signup-toggle");

  document
    .getElementById("signinoverlay")
    .classList.toggle("signinoverlay-toggle");
  document
    .getElementById("signupoverlay")
    .classList.toggle("signupoverlay-toggle");
}

document.getElementById("btnSignin").onclick = unslide;

function unslide() {
  document.getElementById("title").innerHTML = "User's Sign-in";
  document.getElementsByTagName("span")[0].style.transform =
    "translateY(-50px)";
  document.getElementsByTagName("span")[1].style.transform = "translateY(0)";

  document
    .getElementById("imageoverlay")
    .classList.toggle("image-overlay-toggle");
  document.getElementById("image").classList.toggle("image-toggle");
  document.getElementById("signin").classList.toggle("signin-toggle");
  document.getElementById("signup").classList.toggle("signup-toggle");

  document
    .getElementById("signinoverlay")
    .classList.toggle("signinoverlay-toggle");
  document
    .getElementById("signupoverlay")
    .classList.toggle("signupoverlay-toggle");
}

// js media query
var x = window.matchMedia("screen and (max-width:700px)");

burger(x); // run the function explicitly on first run time

x.addEventListener("change", burger); // run the function evrytime on state change

function burger(mq) {
  var a = document.querySelector(".signinoverlay").classList.length;

  if (mq.matches) {
    var div = document.createElement("div");
    div.setAttribute("class", "burger");
    div.innerHTML =
      "<div class= 'l1'></div><div class = 'l2'></div><div class = 'l3'></div>";
    document.getElementById("image").appendChild(div);

    if (a == 2) {
      document
        .querySelector(".image-overlay")
        .classList.toggle("image-overlay-toggle");
      document.querySelector(".image").classList.toggle("image-toggle");
      document.querySelector(".signin").classList.toggle("signin-toggle");
      document.querySelector(".signup").classList.toggle("signup-toggle");
      document
        .querySelector(".signinoverlay")
        .classList.toggle("signinoverlay-toggle");
      document
        .querySelector(".signupoverlay")
        .classList.toggle("signupoverlay-toggle");

      navslide();
      mobslide();
    }

    document.querySelector(".burger").onclick = navslide;

    function navslide() {
      document.querySelector(".l1").classList.toggle("l1-toggle");
      document.querySelector(".l2").classList.toggle("l2-toggle");
      document.querySelector(".l3").classList.toggle("l3-toggle");

      document.querySelector(".burger").classList.toggle("burger-toggle");
      document
        .querySelector(".image-overlay")
        .classList.toggle("image-overlay-mtoggle");
    }

    document.getElementById("mobbtnSignup").onclick = mobslide;

    function mobslide() {
      document.querySelector(".signin").classList.toggle("signin-mtoggle");
      document.querySelector(".signup").classList.toggle("signup-mtoggle");

      document
        .querySelector(".image-overlay .image .signinoverlay")
        .classList.toggle("signinoverlay-mtoggle");
      document
        .querySelector(".image-overlay .image .signupoverlay")
        .classList.toggle("signupoverlay-mtoggle");

      navslide();
    }

    document.getElementById("mobbtnSignin").onclick = mobunslide;

    function mobunslide() {
      document.querySelector(".signin").classList.toggle("signin-mtoggle");
      document.querySelector(".signup").classList.toggle("signup-mtoggle");

      document
        .querySelector(".image-overlay .image .signinoverlay")
        .classList.toggle("signinoverlay-mtoggle");
      document
        .querySelector(".image-overlay .image .signupoverlay")
        .classList.toggle("signupoverlay-mtoggle");

      navslide();
    }
  } else {
    var elm = document.querySelector(".burger");

    if (elm) {
      elm.remove();
    }

    if (document.querySelector(".image-overlay").classList.length == 2) {
      document
        .querySelector(".image-overlay")
        .classList.toggle("image-overlay-mtoggle");
    }

    if (a == 2) {
      console.log("working");
      document.querySelector(".signin").classList.toggle("signin-mtoggle");
      document.querySelector(".signup").classList.toggle("signup-mtoggle");
      document
        .querySelector(".signinoverlay")
        .classList.toggle("signinoverlay-mtoggle");
      document
        .querySelector(".signupoverlay")
        .classList.toggle("signupoverlay-mtoggle");
      slide();
    }
  }
}