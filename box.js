// Add Event Listeners to Buttons
document.getElementById('addImageBtn').addEventListener('click', function() {
    alert("You can upload an image here.");
    // You can add image upload logic here.
});

document.getElementById('addVoiceBtn').addEventListener('click', function() {
    alert("You can record a voice note here.");
    // Add voice note recording logic here.
});

document.getElementById('saveCapsuleBtn').addEventListener('click', function() {
    const textContent = document.getElementById('textContent').value;
    const unlockDate = document.getElementById('unlockDate').value;
    const recipientEmail = document.getElementById('recipientEmail').value;

    // Save capsule information (e.g., to a database or localStorage)
    if (textContent && unlockDate && recipientEmail) {
        alert("Your time capsule has been saved!");
        console.log({
            textContent,
            unlockDate,
            recipientEmail
        });

        // Redirect to confirmation page or handle the capsule saving process
        // window.location.href = "confirmation.html";  // Uncomment if needed for redirection
    } else {
        alert("Please fill in all fields.");
    }
});