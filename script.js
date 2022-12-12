//match        https://classroom.google.com/u/0/w/{id}/t/all

var result = ""
const sections = document.getElementsByClassName("jHgkif raZwr u0dx8e");
for (var i = 0; i < sections.length; i++) {
    result += "\n" + sections[i].ariaLabel;

    const rows = sections[i].querySelectorAll('[jsname="haAclf"]');
    for (var k = 0; k < rows.length; k++) {
        const expandButton = rows[k].getElementsByClassName("jWCzBe QRiHXd idtp4e u73Apc")[0]
        expandButton.click();

        const titleDiv = rows[k].getElementsByClassName("YVvGBb UzbjTd")[0];
        result += "\n--- " + titleDiv.innerHTML;

        const descriptionDiv = rows[k].getElementsByClassName("bqKF7d pco8Kc j70YMc")[0];
        const descriptionSpan = descriptionDiv.getElementsByTagName('span')[0]
        result += "\n    " + descriptionSpan.innerText;

        const rsDiv = rows[k].getElementsByClassName("VkhHKd e7EEH nQaZq")
        for (var r = 0; r < rsDiv.length; r++) {
            result += "\n    " + rsDiv[r].href;
        }
        result += "\n";

    }
    result += "\n==============================================\n";
}

console.log(result)
