function showRights() {
    let category = document.getElementById("rights-category").value;
    let info = {
        "domestic": "You have rights under the Domestic Violence Act, 2005.",
        "workplace": "Under the Sexual Harassment Act, 2013, you can report harassment.",
        "divorce": "Under Hindu Marriage Act, women have alimony and custody rights.",
        "property": "The Hindu Succession Act, 1956 provides equal inheritance rights.",
        "sexual": "Sexual offenses are punishable under IPC 354 & 376.",
        "dowry": "Dowry is illegal under the Dowry Prohibition Act, 1961."
    };
    document.getElementById("rights-info").innerText = info[category] || "";
}

document.getElementById("legal-aid-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response").innerText = "Your request has been submitted. A legal expert will contact you soon.";
});

function requestCall() {
    alert("A legal advisor will call you shortly.");
}
