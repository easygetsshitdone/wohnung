function checkCode() {
    const correctCode = "danke123";
    const enteredCode = document.getElementById('codeInput').value;
    const overlay = document.querySelector('.overlay');
    
    if (enteredCode === correctCode) {
        overlay.classList.add('hidden');
        const contactInfo = document.getElementById('contactInfo');
        contactInfo.style.display = 'block'; 
    } else {
        alert("Falscher Code. Bitte versuchen Sie es erneut.");
    }
}