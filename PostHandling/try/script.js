const addPosts = () => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let tableBody = document.getElementById('tblBody');
    tableBody.innerHTML=''; 
    posts.forEach(post => {
        let row=document.createElement('tr');
        row.innerHTML=`<td>${post.id}</td>
                        <td>${post.title}</td>`;
        tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    addPosts();
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
});


const addPost = (post) => {

    post.preventDefault();
    id=document.getElementById('id').value;
    title=document.getElementById('title').value;
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({'id':id,'title':title});
    localStorage.setItem("posts", JSON.stringify(posts));


    window.location = "/show.html";
}
