import React, {Component} from 'react';

export default class Posts extends Component {

    state = {
        posts: [],
    };

    async componentWillMount(){
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        this.setState({
            posts: json
        });
    }

    render() {
        return (
            <ul>
                {
                    this.state.posts.map((post) => (
                        <a href={`/post/${post.id}`}><li>{post.title}</li></a>
                    ))
                }
            </ul>
        )
    }
}

