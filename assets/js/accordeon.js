const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", function() {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      //faire le changement d'icone chevron en bas avec setAttributes
      this.querySelector("ion-icon").removeAttribute("name", "fa-angle-down");
      this.querySelector("ion-icon").classList.add("fa-angle-right");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.querySelector("i").classList.remove("fa-angle-right");
      this.querySelector("i").classList.add("fa-angle-down");
    }
  });
});

//this.querySelector("i").classList.remove("name","chevron-down-outline");
//this.querySelector("i").setAttribute("name","chevron-up-outline");