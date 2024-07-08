// Load Navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
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


