document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/testdb')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the data from the backend
            const container = document.getElementById('data-container');
            data.forEach(item => {
                const div = document.createElement('div');
                div.textContent = JSON.stringify(item);
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
