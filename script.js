function checkCode() {
    // Hier kannst du den Geheimcode festlegen
    const correctCode = "f"; 
    
    // Eingabe des Nutzers abrufen
    const enteredCode = document.getElementById('codeInput').value;
    
    const overlay = document.querySelector('.overlay');
    
    // Überprüfen, ob der Code korrekt ist
    if (enteredCode === correctCode) {
        overlay.classList.add('hidden'); // Blendet das Overlay aus
        const contactInfo = document.getElementById('contactInfo');
        contactInfo.style.display = 'block'; // Zeigt Kontaktdaten
    } else {
        // Die Meldung wurde entfernt, es passiert einfach nichts.
    }
}