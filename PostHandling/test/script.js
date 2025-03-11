// Initial posts data
var initialPosts = [
    { id: 1, title: 'daily js news'},
    { id: 2, title: 'daily python news'},
    { id: 3, title: 'daily java news'},
    { id: 4, title: 'daily .net news'},
];

// Initialize posts from localStorage or use initial posts if nothing is stored yet
function initializePosts() {
    const savedPosts = localStorage.getItem('postData');
    if (savedPosts) {
        return JSON.parse(savedPosts);
    } else {
        // Save initial posts to localStorage
        localStorage.setItem('postData', JSON.stringify(initialPosts));
        return initialPosts;
    }
}

// Function to display posts in the table
function displayPosts() {
    const posts = initializePosts();
    const tableBody = document.getElementById('tableBody');
    
    // Clear existing table rows
    tableBody.innerHTML = '';
    
    // Add each post to the table
    posts.forEach(post => {
        const row = document.createElement('tr');
        
        const idCell = document.createElement('td');
        idCell.textContent = post.id;
        row.appendChild(idCell);
        
        const titleCell = document.createElement('td');
        titleCell.textContent = post.title;
        row.appendChild(titleCell);
        
        tableBody.appendChild(row);
    });
}

// Load the posts when the page loads
window.addEventListener('load', displayPosts);