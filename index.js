document.addEventListener("DOMContentLoaded", function () {
   
    setupAccordion("toggleIconOne", "collapseOne");
    
});

function setupAccordion(iconId, contentId) {
    
    const iconButton = document.getElementById(iconId);
    const content = document.getElementById(contentId);

    
    iconButton.addEventListener("click", function (event) {
        event.preventDefault();  

      
        toggleContent(content);
        toggleIconRotation(iconButton.querySelector(".chevron-icon"));
    });
}

function toggleContent(content) {
    
    content.classList.toggle("show");
}

function toggleIconRotation(icon) {
   
    icon.classList.toggle("rotate");
}

function sendLink() {
    const input = document.getElementById("contactInput");
    const errorMessage = document.getElementById("errorMessage");
  
    if (validateInput(input.value)) {
      errorMessage.classList.add("d-none");
      alert("Link sent to " + input.value);
      input.value = "";
    } else {
      errorMessage.classList.remove("d-none");
    }
  }
  
  function validateInput(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
  
    return emailPattern.test(value) || phonePattern.test(value);
  }

  function showMore() {
    const moreContent = document.querySelector('.more-content');
    moreContent.style.display = 'flex'; 
}

function showLess() {
    const moreContent = document.querySelector('.more-content');
    moreContent.style.display = 'none'; 
}



function sendLink() {
  const input = document.getElementById("contactInput");
  const errorMessage = document.getElementById("errorMessage");

  if (validateInput(input.value)) {
    errorMessage.classList.add("d-none");
    alert("Link sent to " + input.value);
    input.value = "";
  } else {
    errorMessage.classList.remove("d-none");
  }
}

function validateInput(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;

  return emailPattern.test(value) || phonePattern.test(value);
}