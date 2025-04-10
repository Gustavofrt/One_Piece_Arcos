function AlterVisibility(sectionId) {
    var allSections = document.querySelectorAll(".box");
    var allSecrets = document.querySelectorAll(".secret");

    allSecrets.forEach(function(secret) {
        secret.style.visibility = "hidden";
        secret.style.position = "absolute"; 
      });  

    allSections.forEach(function(section) {
      section.style.visibility = "hidden";
      section.style.position = "absolute"; 
    });
  
    var targetSection = document.getElementById('secao'+sectionId);

    if (targetSection) {
      targetSection.style.visibility = "visible";
      targetSection.style.position = "relative";
      secretElement = document.getElementById('secret'+sectionId);
      secretElement.style.visibility = "visible";
      secretElement.style.position = "relative";

    }
  }