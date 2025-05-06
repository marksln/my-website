
const username = localStorage.getItem("user");
const userImage = document.getElementById("userImage");


if (username) {
 
  // document.getElementById("displayName").textContent = username;

  document.querySelectorAll("#displayName").forEach(el => {
    el.textContent = username;
  });

  // document.querySelectorAll(".userImage").forEach(img => {
  //   img.src = imagePath;
  // });
  
  

  if (username === "mark") {
    userImage.src = "../images/20.png";
  } else if (username === "jay") {
    userImage.src = "../images/skjj.jpg";
  } else {
    userImage.src = "../img/defaultpic.jpg"; // optional default
  }
} else {
  
  window.location.href = "login.html";
}




const users = {
  mark: {
    fullName: "Mark Rainier S. Mendoza",
    section: "ACT 2A",
    studentId: "MA20250123",
    email: "markrainiermendoza4@gmail.com",
    contact: "09123456789",
    course: "ACT",
    image: "../images/20.png"
  },
  jay: {
    fullName: "John Jay Angeles",
    section: "ACT 2A",
    studentId: "MA20250124",
    email: "jjangeles@gmail.com",
    contact: "09987654321",
    course: "ACT",
    image: "../images/skjj.jpg"
  }
};

const infoImage = document.getElementById("infoImage");


if (username && users[username]) {
  const user = users[username];

  userImage.src = user.image;
  infoImage.src = user.image;


  document.querySelectorAll("#displayName").forEach(el => {
    el.textContent = username;
  });
  document.getElementById("fullName").textContent = user.fullName;
  document.getElementById("section").textContent = user.section;
  document.getElementById("studentId").textContent = user.studentId;
  document.getElementById("email").textContent = user.email;
  document.getElementById("contact").textContent = user.contact;
  document.getElementById("course").textContent = user.course;

  document.getElementById("fullName").textContent = user.fullName;
  document.getElementById("section").textContent = user.section;
  document.getElementById("studentId").textContent = user.studentId;
  document.getElementById("email").textContent = user.email;
  document.getElementById("contact").textContent = user.contact;
  document.getElementById("course").textContent = user.course;
}




