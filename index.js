//selecting all required elements
// querySelector uses CSS selectors to identify HTML elements
// const ensures that you cannot reassign the variable to a completely new value, which is helpful for things like DOM elements, where you only need to store the reference to the element, and you don’t want to accidentally change that reference later on.
// For arrays or objects (like the NodeList of images in filterImg), using const is still appropriate because you’re not trying to change the reference to the NodeList, but you can modify its contents
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  //after window loaded
  // In simple terms, when a user clicks on an element inside the filterItem, the click event triggers the function, and the event object gets passed into that function as selectedItem.
  filterItem.onclick = (selectedItem) => {
    //if user click on filterItem div
    if (selectedItem.target.classList.contains("item")) {
      //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if (filterImges == filterName || filterName == "all") {
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        } else {
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  };
