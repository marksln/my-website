function updateInfo() {
    let firstName = formatName(document.getElementById("firstName").value);
    let lastName = formatName(document.getElementById("lastName").value);
    let address = document.getElementById("address").value;
    let contact = document.getElementById("contact").value;

    // Ensure contact number is only numbers
    if (!/^\d*$/.test(contact)) {
        alert("Contact number must contain only numbers.");
        return;
    }

    document.getElementById("infoDisplay").innerHTML = `
        <p><strong>First Name:</strong> ${firstName || ""}</p>
        <p><strong>Last Name:</strong> ${lastName || ""}</p>
        <p><strong>Address:</strong> ${address || ""}</p>
        <p><strong>Contact Number:</strong> ${contact || ""}</p>
    `;
}

// Function to format the first letter as uppercase
function formatName(name) {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

function clearFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("infoDisplay").innerHTML = `
        <p><strong>First Name:</strong></p>
        <p><strong>Last Name:</strong></p>
        <p><strong>Address:</strong></p>
        <p><strong>Contact Number:</strong></p>
    `;
}
