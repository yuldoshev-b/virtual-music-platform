var music = document.getElementById("myAudio");

function playAudio() {
  music.play();
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";

  document.getElementsByClassName("music-bg")[0].style =
    "animation-play-state:running;";

  document.getElementsByClassName("play-music")[0].style =
    "animation-play-state:running;";
}

function pauseAudio() {
  music.pause();
  document.getElementById("pause").style.display = "none";
  document.getElementById("play").style.display = "block";

  document.getElementsByClassName("music-bg")[0].style =
    "animation-play-state:paused;";

  document.getElementsByClassName("play-music")[0].style =
    "animation-play-state:paused;";
}

//Open - Elements;

//openElements1

function openElements1() {
  document.getElementsByClassName("container-right1")[0].style =
    "display:block;";

  document.getElementsByClassName("btns-1")[0].style =
    "background: linear-gradient(135deg, #ffd963, #ffc947); box-shadow: 0px 0px 10px #b0d8da;";

  document.getElementsByClassName("container-right")[0].style = "display:none;";
  document.getElementsByClassName("container-right2")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right3")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right4")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right5")[0].style =
    "display:none;";

  //buttons

  document.getElementsByClassName("btns-2")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-3")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-4")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-5")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
}

//openElements2

function openElements2() {
  document.getElementsByClassName("container-right2")[0].style =
    "display:block;";

  document.getElementsByClassName("btns-2")[0].style =
    "background: linear-gradient(135deg, #ffd963, #ffc947); box-shadow: 0px 0px 10px #b0d8da;";

  document.getElementsByClassName("container-right")[0].style = "display:none;";
  document.getElementsByClassName("container-right1")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right3")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right4")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right5")[0].style =
    "display:none;";

  //buttons

  document.getElementsByClassName("btns-1	")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-3")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-4")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-5")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
}

//openElements3

function openElements3() {
  document.getElementsByClassName("container-right3")[0].style =
    "display:block;";

  document.getElementsByClassName("btns-3")[0].style =
    "background: linear-gradient(135deg, #ffd963, #ffc947); box-shadow: 0px 0px 10px #b0d8da;";

  document.getElementsByClassName("container-right")[0].style = "display:none;";
  document.getElementsByClassName("container-right1")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right2")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right4")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right5")[0].style =
    "display:none;";

  //buttons

  document.getElementsByClassName("btns-1")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-2")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-4")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-5")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
}

//openElements4

function openElements4() {
  document.getElementsByClassName("container-right4")[0].style =
    "display:block;";

  document.getElementsByClassName("btns-4")[0].style =
    "background: linear-gradient(135deg, #ffd963, #ffc947); box-shadow: 0px 0px 10px #b0d8da;";

  document.getElementsByClassName("container-right")[0].style = "display:none;";
  document.getElementsByClassName("container-right1")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right2")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right3")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right5")[0].style =
    "display:none;";

  //buttons

  document.getElementsByClassName("btns-1")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-2")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-3")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-5")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
}

//openElements5

function openElements5() {
  document.getElementsByClassName("container-right5")[0].style =
    "display:block;";

  document.getElementsByClassName("btns-5")[0].style =
    "background: linear-gradient(135deg, #ffd963, #ffc947); box-shadow: 0px 0px 10px #b0d8da;";

  document.getElementsByClassName("container-right")[0].style = "display:none;";
  document.getElementsByClassName("container-right1")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right2")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right3")[0].style =
    "display:none;";
  document.getElementsByClassName("container-right4")[0].style =
    "display:none;";

  //buttons

  document.getElementsByClassName("btns-1")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-2")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-3")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
  document.getElementsByClassName("btns-4")[0].style =
    "background: linear-gradient(135deg,rgba(255, 255, 255, 0.118),rgba(255, 255, 255, 0.075));";
}

//choose img

// const chooseImgBtn = document.querySelector(".card-6 img"),
//   fileInput = document.querySelector(".inp");

// chooseImgBtn.addEventListener("click", () => fileInput.click());

// const chooseImage = document.getElementById("choose-img");
// const inputFile = document.getElementById("choose-img");

// inputFile.onclick = function(){
//   chooseImage.src = URL.createObjectURL(inputFile.files[0]);
// }


let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");


inputFile.onchange = function(){
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
  profilePic.style = "margin-left: 0; margin-top:0;"
}
