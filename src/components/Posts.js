import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div className="ui comment" key={post.id}>
        <div className="content">
          <a className="author">{post.title}</a>
          <div className="text">{post.body}</div>
        </div>
      </div>
    ));

    return (
      <div className="ui section">
        <div className="ui comments">
          <h3 className="ui dividing header">Posts</h3>
          {postItems}
        </div>
      </div>
    );
  }
}

export default Posts;
