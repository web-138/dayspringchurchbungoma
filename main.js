

const btnHome = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile');

const toggleMenu = () =>{
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('visible');
}

btnHome.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_kyqnxjs";
    const templateID = "template_tnzxqof";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";

            // Log response and show success message
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.log(err);
            alert("There was an error sending your message. Please try again.");
        });
}
