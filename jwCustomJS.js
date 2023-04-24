function cataHideTillClicked(event) {
    const ulElement = event.target.nextElementSibling;
    ulElement.style.display = ulElement.style.display === "none" ? "block" : "none";
  }
  
  export default cataHideTillClicked;
  
  