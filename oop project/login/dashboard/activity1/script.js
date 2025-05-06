
const username = localStorage.getItem("user");
const userImage = document.getElementById("userImage");


if (username) {
 
  // document.getElementById("displayName").textContent = username;

  document.querySelectorAll("#displayName").forEach(el => {
    el.textContent = username;
  });
  

  if (username === "mark") {
    userImage.src = "../images/20.png";
  } else if (username === "jay") {
    userImage.src = "../images/skjj.jpg";
  } else {
    userImage.src = "../img/defaultpic.jpg"; // optional default
  }
} else {
  
  window.location.href = "act1.html";
}
