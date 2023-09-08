const itemObj = Array.from(document.querySelectorAll(".item"));

const observer = new IntersectionObserver((items) => {
 items.map((item) => {
 if (item.isIntersecting) {
  item.target.classList.add("visible")
 }else{
  item.target.classList.remove("visible")
 }
 })


})

itemObj.map(item => observer.observe(item))