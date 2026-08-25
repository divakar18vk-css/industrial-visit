const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const regno = document.getElementById("regno").value;
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const phone = document.getElementById("phone").value;

    const student = document.createElement("div");

    student.className = "student";

    student.innerHTML = `
        <h3>👨‍🎓 ${name}</h3>
        <p><b>Register Number:</b> ${regno}</p>
        <p><b>Department:</b> ${department}</p>
        <p><b>Year:</b> ${year}</p>
        <p><b>Phone:</b> ${phone}</p>
    `;

    studentList.appendChild(student);

    message.textContent = "Registration successful!";

    form.reset();

});