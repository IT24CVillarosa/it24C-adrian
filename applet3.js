let logs = [];

function addLog() {
    const logInput = document.getElementById('logInput');
    const logMessage = logInput.value;

    if (logMessage) {
        const date = new Date().toLocaleString();
        logs.push(`${date}: ${logMessage}`);
        logInput.value = '';
        updateDisplay();
    } else {
        alert("Please enter a log message.");
    }
}

function updateDisplay() {
    const logDisplay = document.getElementById('logDisplay');
    const logCount = document.getElementById('logCount');

    logDisplay.innerHTML = logs.join('<br>');
    logCount.textContent = logs.length;
}