document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
  
    if (
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${nameElement.value}</p>
        <p><strong>Email:</strong> ${emailElement.value}</p>
        <p><strong>Phone:</strong> ${phoneElement.value}</p>
        
        <h3>Education</h3>
        <p>${educationElement.value}</p>
  
        <h3>Experience</h3>
        <p>${experienceElement.value}</p>
  
        <h3>Skills</h3>
        <p>${skillsElement.value}</p>
      `;
  
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
      } else {
        console.error("Resume output element is missing");
      }
    } else {
      console.error("One or more input elements are missing");
    }
  });
  