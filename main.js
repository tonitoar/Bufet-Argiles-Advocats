const navBarMobile = document.querySelector(".nav-dropdown-toggle"); 
const navBarMobileButtons = document.querySelector(".nav-dropdown-menu"); 

navBarMobile.addEventListener("click", () => {
  navBarMobileButtons.classList.toggle("show"); 
}); 

navBarMobileButtons.addEventListener("click", () => {
  navBarMobileButtons.classList.remove("show"); 
})