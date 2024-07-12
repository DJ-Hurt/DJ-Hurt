
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'pl', includedLanguages: 'en,pl,de,uk'}, 'google_translate_element');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        alert("Numer telefonu został skopiowany do schowka: " + text);
    }, function(err) {
        console.error("Błąd podczas kopiowania: ", err);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const close = document.querySelector(".close");

    document.querySelectorAll(".photo img").forEach(img => {
        img.addEventListener("click", function() {
            overlay.style.display = "flex";
            overlayImg.src = this.src;
        });
    });

    close.addEventListener("click", function() {
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function(event) {
        if (event.target === overlay) {
            overlay.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById('unzla');

    if (image) {
        let clickCount = 0;

        function handleImageClick() {
            clickCount++;
            //console.log("Kliknięcie nr: " + clickCount);
            if (clickCount >= 21) {
                window.location.href = "https://www.youtube.com/watch?v=akt_VkcpPNg&ab_channel=CS%3AGOLIVE";
            }
        }

        image.addEventListener('click', handleImageClick);
    }
});