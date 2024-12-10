// Typing Script JS
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "E-Commerce Bussiness", "Super cool Bikers","Engineer"],
    typeSpeed: 100,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Student", "Department of CSE","Batch : D-64", "Dhaka International University"],
    typeSpeed: 100,
    backSpeed: 60,
});

//contact From
const contactForm = document.getElementById('contactForm');
  const responseMessage = document.getElementById('responseMessage');

  // Add event listener to handle form submission
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Display the success message
    responseMessage.style.display = 'block';

    // Optionally clear the form fields
    contactForm.reset();

    // Hide the success message after 3 seconds
    setTimeout(() => {
      responseMessage.style.display = 'none';
    }, 3000);
  });

 function toggleFAQ(faqCard) {
        const answer = faqCard.querySelector('.faq-answer');
        const icon = faqCard.querySelector('i');

        // Toggle visibility of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.classList.replace("fa-minus", "fa-plus");
        } else {
            answer.style.display = "block";
            icon.classList.replace("fa-plus", "fa-minus");
        }
}
    
// web design button
function webdesign() {
    alert("Do you want?")
}
function psdhtml() {
    let result = confirm("What do you want to learn!!");
    document.write(result);
}
function webdeveloper() {
    let result = confirm("Can I confirm your order?!");
    document.write(result);
}