let dropdown = document.getElementById("dropdown");
let dropmenu = document.getElementById("dropmenu");
let logo = document.getElementById("img");
let bookmark = document.getElementById("bookmark");
let bookmarkWord = document.getElementById("bookmarkWord");
let bookmarkLogo = document.getElementById("bookmarkLogo");
let bgMenu = document.getElementById("bgDropMenu");
let btn = document.getElementById("project");
let span = document.getElementsByClassName("close")[0];
let modal = document.getElementById("myModal");
let radiobtn = document.getElementsByClassName("radiobtn");
let modalStand = document.getElementsByClassName("model__stand");
let pledge = document.getElementsByClassName("pledge");
let success = document.getElementById("mySuccess");
let purchase = document.getElementsByClassName("btnp btn--project");
let btnSuccess = document.getElementById("btnSuccess");
let btnReward = document.getElementsByClassName("btnc btn--project");

dropdown.addEventListener("click", () => {
  if (dropmenu.classList.contains("menu--transition")) {
    dropmenu.classList.remove("menu--transition");
    logo.src = "../images/icon-hamburger.svg";
    bgMenu.style.display = "none";
  } else {
    logo.src = "../images/icon-close-menu.svg";
    dropmenu.classList.add("menu--transition");
    bgMenu.style.display = "block";
  }
});

dropmenu.addEventListener("click", () => {
  dropmenu.classList.remove("menu--transition");
  logo.src = "../images/icon-hamburger.svg";
  bgMenu.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == bgMenu) {
    dropmenu.classList.remove("menu--transition");
    logo.src = "../images/icon-hamburger.svg";
    bgMenu.style.display = "none";
  }
};

bookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("bookmark--transition")) {
    bookmark.classList.remove("bookmark--transition");
    bookmarkWord.innerHTML = "Bookmark";
    bookmarkLogo.src = "../images/icon-bookmark.svg";
  } else {
    bookmark.classList.add("bookmark--transition");
    bookmarkWord.innerHTML = "Bookmarked";
    bookmarkLogo.src = "../images/icon-bookmark-active.svg";
  }
});
for (let index = 0; index < 2; index++) {
  btnReward[index].onclick = () => {
    modal.style.display = "block";
  };
}
// When the user clicks the button, open the modal
btn.onclick = () => {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  modal.style.display = "none";
};

for (let index = 0; index < 3; index++) {
  radiobtn[index].addEventListener("click", () => {
    if (radiobtn[index].name === "radio-button-off-outline") {
      radiobtn[index].name = "radio-button-on-outline";
      modalStand[index].style.cssText = "border: 2px solid hsl(176, 50%, 47%);";
      pledge[index].classList.add("pledge--transition");
    } else {
      radiobtn[index].name = "radio-button-off-outline";
      modalStand[index].style.cssText = "1px solid hsl(0, 0%, 82%);";
      pledge[index].classList.remove("pledge--transition");
    }
  });
}
purchase[0].addEventListener("click", () => {
  let value = document.getElementsByClassName("input__text")[0].value;
  if (value >= 1) {
    success.style.display = "block";
  }
});
purchase[1].addEventListener("click", () => {
  let value = document.getElementsByClassName("input__text")[1].value;
  if (value >= 25) {
    success.style.display = "block";
  }
});

purchase[2].addEventListener("click", () => {
  let value = document.getElementsByClassName("input__text")[2].value;
  if (value >= 75) {
    success.style.display = "block";
  }
});

btnSuccess.onclick = () => {
  success.style.display = "none";
};

/* radiobtn.addEventListener("click", (event) => {
  if (radiobtn.name === "radio-button-off-outline")
    radiobtn.name = "radio-button-on-outline";
  else {
    radiobtn.name = "radio-button-off-outline";
  }
  console.log(event);
}); */
