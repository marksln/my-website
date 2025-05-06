const username = localStorage.getItem("user");
const userImage = document.getElementById("userImage");

if (username) {
  document.querySelectorAll("#displayName").forEach(el => {
    el.textContent = username;
  });

  if (username === "mark") {
    userImage.src = "../../images/20.png";
  } else if (username === "jay") {
    userImage.src = "../../images/skjj.jpg";
  } else {
    userImage.src = "../img/defaultpic.jpg"; // fallback image
  }
} else {
  window.location.href = "../../login.html"; // or adjust based on your path
}
