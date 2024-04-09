document.addEventListener("DOMContentLoaded", function () {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar').innerHTML = data;
        })
        .catch(error => console.error('Error fetching sidebar content:', error));

    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error fetching footer content:', error));

    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error fetching menu content:', error));
    
});