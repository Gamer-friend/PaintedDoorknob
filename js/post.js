      return;
    }
    const post = {
      id: Date.now(),
      title,
      content,
      username,
      createdAt: new Date().toISOString(),
      image: null // will set below if needed
    };
    // Handle image upload
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (event) {
        post.image = event.target.result; // Set the image data
        savePost(post);
      };
      reader.readAsDataURL(imageInput.files[0]); // Convert to base64
    } else {
      savePost(post); // Save post without image
    }
  });
  function savePost(post) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.unshift(post); // Add the newest post to the top
    localStorage.setItem('posts', JSON.stringify(posts));
    alert("Post created!");
    window.location.href = "index.html"; // Redirect to forum view
  }
});
