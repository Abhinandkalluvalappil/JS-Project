// Handle form submission
document.getElementById('postForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the form input
    const title = document.getElementById('title').value;
    
    // Get existing posts from localStorage
    let posts = [];
    const savedPosts = localStorage.getItem('postData');
    
    if (savedPosts) {
        posts = JSON.parse(savedPosts);
    }
    
    // Generate a new ID (max ID + 1)
    const newId = posts.length > 0 ? 
        Math.max(...posts.map(post => post.id)) + 1 : 1;
    
    // Add the new post to the array
    posts.push({ id: newId, title: title });
    
    // Save the updated posts back to localStorage
    localStorage.setItem('postData', JSON.stringify(posts));
    
    // Clear the form
    document.getElementById('title').value = '';
    
    // Show a success message
    alert('Post added successfully!');
    
    // Redirect back to the home page
    window.location.href = 'index.html';
});