function sendMail(contactForm) {
    emailjs.send("the_strawberry","the_strawberry", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed!", error);
        }
    );
    return false;
}