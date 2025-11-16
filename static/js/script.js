// Load Navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        // Mobile menu toggle logic
        const toggle = document.getElementById('navbar-toggle');
        const links = document.getElementById('navbar-links');
        if (toggle && links) {
            toggle.onclick = function() {
                links.classList.toggle('show');
            };
        }
    })
    .catch(error => console.error('Error loading navbar:', error));

// Load Sidebar
fetch('sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar').innerHTML = data;
    })
    .catch(error => console.error('Error loading sidebar:', error));

// Load Footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));

// Scramble and display email address
document.addEventListener("DOMContentLoaded", function () {
  const emailUser = "support";
  const emailDomain = "s0tool.nl";
  const emailLink = document.getElementById("email-link");
  if (emailLink) {
    emailLink.href = `mailto:${emailUser}@${emailDomain}`;
    emailLink.textContent = `${emailUser}@${emailDomain}`;
  }
});

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

