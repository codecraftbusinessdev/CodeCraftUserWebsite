
function submitFeedback(){
const form = document.getElementByName('contact');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const subject = form.elements['subject'].value;
    const message = form.elements['message'].value;

    const data = {
        name,
        email,
        subject,
        message
    };

    fetch('http://localhost:8080/addFeedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Handle successful API call
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle API call error
    });
});

