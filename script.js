function moveButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    
    // Generate random position within the container
    let newX = Math.random() * (containerRect.width - noButton.offsetWidth);
    let newY = Math.random() * (containerRect.height - noButton.offsetHeight);
    
    // Apply the new position
    noButton.style.position = "absolute";
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}
