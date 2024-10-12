document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const homeScreen = document.getElementById('home-screen');
    const singlePlayerMode = document.getElementById('single-player-mode');
    const twoPlayerMode = document.getElementById('two-player-mode');
    const singlePlayerButton = document.getElementById('single-player');
    const twoPlayerButton = document.getElementById('two-player');
    const sixMonthsButton = document.getElementById('six-months');
    const twelveMonthsButton = document.getElementById('twelve-months');

    let months = 6; // Default to 6 months

    // Show single player mode
    singlePlayerButton.addEventListener('click', function() {
        homeScreen.classList.add('hidden');
        singlePlayerMode.classList.add('active');
        generateMonthInputs('single-player-form', months);
    });

    // Show two player mode
    twoPlayerButton.addEventListener('click', function() {
        homeScreen.classList.add('hidden');
        twoPlayerMode.classList.add('active');
        generateMonthInputs('player-form', months);
        generateMonthInputs('opponent-form', months);
    });

    // Set to 6 months
    sixMonthsButton.addEventListener('click', function() {
        months = 6;
    });

    // Set to 12 months
    twelveMonthsButton.addEventListener('click', function() {
        months = 12;
    });

    // Function to generate month input fields
    function generateMonthInputs(formId, months) {
        const form = document.getElementById(formId);
        form.innerHTML = ''; // Clear previous inputs
        for (let i = 1; i <= months; i++) {
            const label = document.createElement('label');
            label.textContent = `月${i} の点数: `;
            const input = document.createElement('input');
            input.type = 'number';
            input.name = `month-${i}`;
            input.placeholder = '点数を入力';
            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(document.createElement('br'));
        }
    }
});
