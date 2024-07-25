document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const latDegrees = parseFloat(document.getElementById('latDegrees').value);
    const latMinutes = parseFloat(document.getElementById('latMinutes').value);
    const latSeconds = parseFloat(document.getElementById('latSeconds').value);
    const lonDegrees = parseFloat(document.getElementById('lonDegrees').value);
    const lonMinutes = parseFloat(document.getElementById('lonMinutes').value);
    const lonSeconds = parseFloat(document.getElementById('lonSeconds').value);

    // Convert to decimal
    const latDecimal = latDegrees + latMinutes / 60 + latSeconds / 3600;
    const lonDecimal = lonDegrees + lonMinutes / 60 + lonSeconds / 3600;

    // Display the result
    document.getElementById('result').innerText = `Decimal Coordinates: (${latDecimal.toFixed(6)}, ${lonDecimal.toFixed(6)})`;
});
