




// Post controller like, comment share
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {

    // Handle the like button   
    if (e.target.innerHTML === "Like") {
        e.target.innerHTML = "Unlike";
        
    // Handle the comment button  
    } else if (e.target.innerHTML === "Comment") {
        const commentInput = document.createElement('input')
        commentInput.type = "text";
        commentInput.setAttribute('placeholder', 'Write a comment...');
        const postBtn = document.createElement('button');
        postBtn.textContent = 'Post';
        postBtn.addEventListener('click', () => {
            //add the comment to list of comments
        })
        e.target.parentElement.parentElement.appendChild(commentInput);
        e.target.parentElement.parentElement.appendChild(postBtn);

    // Handle the share button    
    } else if (e.target.innerHTML === "Share") { 
        alert("The post has been shared!");
    }
});
});

