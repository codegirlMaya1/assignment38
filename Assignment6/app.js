document.getElementById('characterName').addEventListener('click', () => {
    // Function to create a promise and resolve delay
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Update after loading
    delay(10000).then(() => {
        document.getElementById('message').textContent = 'Search completed!';
    });
});