document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const audioFile = document.getElementById('audio').files[0];
    const videoFile = document.getElementById('video').files[0];
    const imageFile = document.getElementById('image').files[0];

    const responseDiv = document.getElementById('responses');
    const responseHTML = `
        <h3>Your Response:</h3>
        <p>${question}</p>
        ${audioFile ? `<p>Audio: ${audioFile.name}</p>` : ''}
        ${videoFile ? `<p>Video: ${videoFile.name}</p>` : ''}
        ${imageFile ? `<p>Image: ${imageFile.name}</p>` : ''}
    `;

    responseDiv.innerHTML += responseHTML;

    // Reset form fields
    document.getElementById('questionForm').reset();
});
