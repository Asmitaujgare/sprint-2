// Adding new Item

let postForm = document.querySelector('div.post');
let newPost = document.createElement('div');

newPost.innerHTML = 
`<div class="header">
    <img src="photo7.png" alt="Profile Picture">
    <h2>Kelly</h2>
</div>
<div class="content">
    <p>Spending quality time together is the most important thing you can do as a family. Nothing else really matters. We like to watch a movie every week and family game night is every Saturday night.</p>
    <img src="feed-image-3.png" alt="Post Image">
    <div class="actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
    </div>
</div>
<div class="comments">
<div class="new-comment">
    <img src="photo1.png" alt="Profile Picture">
    <input type="text" placeholder="Write a comment...">
    <button>Post</button>
</div>`;

postForm.appendChild(newPost);