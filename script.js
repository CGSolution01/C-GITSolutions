document.getElementById('quoteForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const details = document.getElementById('details').value.trim();

    try {
        const response = await fetch('http://localhost:3000/api/quotation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, service, details })
        });
        const data = await response.json();
        document.getElementById('quoteResponse').innerHTML = data.message;
        document.getElementById('quoteForm').reset();
    } catch (err) {
        document.getElementById('quoteResponse').innerHTML = "Succesfully Submitted.";
    }
});