var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var resumeOutput = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(nameElement.value, "</p>\n        <p><strong>Email:</strong> ").concat(emailElement.value, "</p>\n        <p><strong>Phone:</strong> ").concat(phoneElement.value, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(educationElement.value, "</p>\n  \n        <h3>Experience</h3>\n        <p>").concat(experienceElement.value, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skillsElement.value, "</p>\n      ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Resume output element is missing");
        }
    }
    else {
        console.error("One or more input elements are missing");
    }
});
