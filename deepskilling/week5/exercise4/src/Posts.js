import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    // Step 5: Initialize state
    this.state = {
      posts: [],
      error: null
    };
  }

  // Step 6: Fetch data
  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const postList = data.map(
          (p) => new Post(p.userId, p.id, p.title, p.body)
        );
        this.setState({ posts: postList });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  // Step 7: Lifecycle method
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Error handling
  componentDidCatch(error, info) {
    alert("Error occurred: " + error.message);
  }

  // Step 8: Render UI
  render() {
    return (
      <div>
        <h1>Blog Posts</h1>

        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;