var posts = [
    { id: 1, title: 'daily js news'},
    { id: 2, title: 'daily python news'},
    { id: 3, title: 'daily java news'},
    { id: 4, title: 'daily .net news'},
];

var rowContent = document.querySelector('.tb .tableContent');
var addData ="";
posts.forEach(post=>{
    addData += `<tr>
                <td> ${post.id}</td>
                <td> ${post.title}</td>
                </tr>`;
});
rowContent.innerHTML = addData;