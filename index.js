const navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.scrollY > 100) {
    displayNav();
  } else {
    hideNav();
  }
};

function displayNav() {
  navbar.style.visibility = "visible";

  navbar.innerHTML = `"<div>
        <img class="logo" src="logo.png" />
        <div class="row">
          <a class="url-selected" href="#">HOME</a>
          <a class="url" href="#">ABOUT</a>
          <a class="url" href="#">MENU</a>
          <a class="url" href="#">CONTACT</a>
        </div>
      </div>"`;
}

function hideNav() {
  navbar.style.visibility = "hidden"; // Optional: hide the navbar
}

function colorChange() {
  const box1 = document.getElementById("box1");
  box1.style.color = "#fff";
  box1.innerHTML = ` <div class="inneraImageDiv">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="50"
              height="50"
            >
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                fill="#ffa217"
                d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
              />
            </svg>
          </div>
          <p class="innerText">Dine-In</p>
          <p class="innerTextbelow">
            We provide the faster service to the all dine-in
          </p>`;
}
