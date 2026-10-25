document.addEventListener("DOMContentLoaded", function() {

  // Finds the buttons
  const filterButtons = document.querySelectorAll("#alphabet-filter .filter-btn");
  
  // Now this line will successfully find your list!
  const listSection = document.getElementById("specialty-list");

  // This 'if' block will now run, and your code will work
  if (listSection) {
    const listChildren = listSection.children;

    filterButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        
        const clickedLetter = this.innerText;

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        let showNextList = false;
        const targetText = `[${clickedLetter}]`;

        for (let item of listChildren) {
          
          if (clickedLetter === "All") {
            item.style.display = "";
          
          } else if (item.tagName === 'P') {
            if (item.innerText === targetText) {
              item.style.display = "";    
              showNextList = true;
              
              // This is the line that scrolls to the section
              item.scrollIntoView({ behavior: 'smooth', block: 'start' });

            } else {
              item.style.display = "none";
              showNextList = false;
            }

          } else if (item.tagName === 'UL') {
            if (showNextList) {
              item.style.display = "";
              showNextList = false;
            } else {
              item.style.display = "none";
            }
          }
        }
      });
    });
  } else {
    // This error will no longer appear
    console.error("Error: Could not find the element with id 'specialty-list'");
  }
});