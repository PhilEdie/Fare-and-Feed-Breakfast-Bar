filterSelection("filterDiv")
function filterSelection(filterString) {

    // first, hide all elements:

    var allDivs = document.getElementsByClassName("filterDiv");
    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.add('d-none');
    }

    // Then, show all elements which match filter string:

    var matchingDivs = document.getElementsByClassName(filterString);
    for (var i = 0; i < matchingDivs.length; i++) {
        matchingDivs[i].classList.remove('d-none');
    }
}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "jobscraperservice@gmail.com",
        Password: "gukfctrdybuytenr",
        To: 'ediephil@gmail.com',
        From: document.getElementById('email').value,
        Subject: "Fare & Feed: Message from " + document.getElementById('name').value,
        Body: document.getElementById('message').value + document.getElementById('phone').value
    })
        .then(function (message) {
            alert("Message has been sent successfully.")
            document.getElementById('email').value = "";
            document.getElementById('name').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('message').value = "";
        });
}