window.onload = () => {
    const name = prompt("What's your name?");
    if (name) {
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.id = "welcomeMessage";
        welcomeMessage.textContent = `Hi ${name}, Welcome to Yor Galore!`;
        welcomeMessage.style.textAlign = "center";
        welcomeMessage.style.padding = "20px";
        welcomeMessage.style.color = "#151b54";

        const heroSection = document.getElementById("hero");
        heroSection.insertBefore(welcomeMessage, heroSection.children[1]);
    }
};

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(this);
    const result = `
        <strong>Name:</strong> ${data.get('name')}<br>
        <strong>Email:</strong> ${data.get('Email')}<br>
        <strong>Gender:</strong> ${data.get('gender')}<br>
        <strong>Phone:</strong> ${data.get('phone')}<br>
        <strong>Message:</strong> ${data.get('message')}
    `;
    document.getElementById('formResult').innerHTML = result;
});
