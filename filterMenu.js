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
