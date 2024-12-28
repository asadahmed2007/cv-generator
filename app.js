
const form = document.getElementById("cvForm");

const cvPreview = document.getElementById("cvPreview");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  generateCVPreview();
});


function generateCVPreview() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const skills = document.getElementById("skills").value;


  const previewHtml = `
    <h2>${name}</h2>
    <h3>Email</h3>
    <p>${email}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
  `;


  cvPreview.innerHTML = previewHtml;

}



