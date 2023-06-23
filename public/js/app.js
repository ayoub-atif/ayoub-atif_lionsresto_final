function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };


 
  
  function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
  let btn_burger = document.querySelector("#logoBurger");
  function menuBurger() {
      let x = document.querySelector(".linksBurger");
      if (x.style.display === "block") {
          x.style.display = "none";
      } else {
          x.style.display = "block";
      }
  }
  btn_burger.addEventListener("click", menuBurger)
// 


  let btnOpen = document.querySelectorAll(".btnOpen");
let myMod = document.querySelectorAll(".mod");
let btnClose = document.querySelectorAll(".closeMod");

let myBod = document.body;

let yt = document.querySelectorAll(".ytVidFrame");


const openVid = (param, ytvid) => {
    param.classList.remove("d-none");
    myBod.classList.add("body");
    ytvid.src += "?autoplay=1";
}

const closeVid = (param, ytvid) => {
    param.classList.add("d-none");
    myBod.classList.remove("body");
    ytvid.src = ytvid.src.slice(0, -11);
}



for (let index = 0; index < btnOpen.length; index++) {

    let currentbtnOpen = btnOpen[index];


    let idCurrentbtnOpen = currentbtnOpen.getAttribute("id");

    for (let idx = 0; idx < myMod.length; idx++) {

        let currentMod = myMod[idx]


        let idcurrentMod = currentMod.getAttribute("id");


        if (idCurrentbtnOpen == idcurrentMod) {

            for (let i = 0; i < yt.length; i++) {
                let vid = yt[i];
                let idVid = vid.id;
                if (idcurrentMod == idVid) {
                    currentbtnOpen.addEventListener("click", () => {
                        openVid(currentMod, vid);
                    })
                }

                for (let i = 0; i < btnClose.length; i++) {

                    let currentBtnClose = btnClose[i];


                    let idCurrentBtnClose = currentBtnClose.getAttribute("id");

                    if (idCurrentBtnClose == idcurrentMod && idcurrentMod == idVid) {
                        currentBtnClose.addEventListener("click", () => {
                            closeVid(currentMod, vid)
                        })
                    }
                }
            }
        }

    }
}