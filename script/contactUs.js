let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill5 = document.getElementById("hill5");
let hill4 = document.getElementById("hill4");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (window.innerHeight > value) {
    hill1.style.top = value * 1 + "px";
   text.style.marginTop = value * 2.5 + "px";
   leaf.style.top = value * -1.5 + "px";
   leaf.style.left = value * 1.5 + "px";
   hill5.style.left = value * 1.5 + "px";
   hill4.style.left = value * -1.5 + "px";
  }
});


document.querySelector('#contactForm').addEventListener('submit',function(e){
  e.preventDefault();

  let contactInfo = {
    firstName : document.querySelector('#firstName').value,
    lastName : document.querySelector('#lastName').value,
    phone : document.querySelector('#phone').value,
    email : document.querySelector('#email').value,
    description : document.querySelector('#description').value,
  }

  console.log('info' , contactInfo);
})