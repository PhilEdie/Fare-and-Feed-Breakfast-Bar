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

// function makeHTTPPostRequest() {


//     try {
//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () { //Call a function when the state changes.
//             if (xhttp.readyState == 4 && xhttp.status == 200) {
//                 alert(xhttp.responseText);
//             }
//         }
//         xhttp.open("POST", "https://docs.google.com/forms/d/e/1FAIpQLSdRjaNukPHhjTNW29esZuC-NFZ2Sei8oRNB2Uguil5HN9ndgA/formResponse");
//         xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
//         xhttp.setRequestHeader('Access-Control-Allow-Methods', "POST");
//         xhttp.setRequestHeader("Accept", "application/json");
//         xhttp.setRequestHeader("Content-Type", "application/json");


//         var data = {
//             'entry.2005620554': document.getElementById('name').value,
//             'entry.1045781291': document.getElementById('email').value,
//             'entry.1166974658': document.getElementById('phone').value,
//             'entry.839337160': document.getElementById('message').value
//         }


//         // xhttp.setRequestHeader('entry.2005620554', document.getElementById('name').value);
//         // xhttp.setRequestHeader('entry.1045781291', document.getElementById('email').value);
//         // xhttp.setRequestHeader('entry.1166974658', document.getElementById('phone').value);
//         // xhttp.setRequestHeader('entry.839337160', document.getElementById('message').value);
//         // xhttp.setRequestHeader('dlut', '1644716027245');
//         // xhttp.setRequestHeader('fvv', '1');
//         // xhttp.setRequestHeader('partialResponse', [null, null, "-2831515373734197132"]);
//         // xhttp.setRequestHeader('pageHistory', 0);
//         // xhttp.setRequestHeader('fbzx', '-2831515373734197132');
//         //
//         xhttp.send(data);

//     } catch (error) {
//         console.error(error);
//     }

//     // var url = new URL('https://docs.google.com/forms/d/e/1FAIpQLSdRjaNukPHhjTNW29esZuC-NFZ2Sei8oRNB2Uguil5HN9ndgA/formResponse');
//     // url.search = new URLSearchParams({
//     //     'entry.2005620554': document.getElementById('name').value,
//     //     'entry.1045781291': document.getElementById('email').value,
//     //     'entry.1166974658': document.getElementById('phone').value,
//     //     'entry.839337160': document.getElementById('message').value,
//     //     'submit': 'Submit'
//     // });
//     // console.log(url.toString());

//     // const xhttp = new XMLHttpRequest();
//     // xhttp.open("POST", url.toString(), true);
//     // xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
//     // xhttp.send();

// }



// function sendEmail() {
//     console.log('Reached 1');
//     makeHTTPPostRequest()
//     alert("Message has been sent successfully.")

//     // document.getElementById('email').value = "";
//     // document.getElementById('name').value = "";
//     // document.getElementById('phone').value = "";
//     // document.getElementById('message').value = "";
// }

