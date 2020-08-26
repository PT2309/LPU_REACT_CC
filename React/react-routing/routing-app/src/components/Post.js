import React , { Component } from 'react';
import axios from 'axios';
import './blog.css';
import BlogImage from '../assets/blog.jpeg';


class Post extends Component{
    state = {
        blog: null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;
        console.log(id);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) // posts/:id - api /post/{id} fetchPost  
        .then( res => {
            this.setState({
                blog: res.data
            })
        }).catch( error => console.log(error))
    }

    render(){
        const blog = this.state.blog ? (
                <div className='card blog'>
                    <img src={BlogImage} alt='blog'></img>
                    <div className='card-content'>
                        <span className='card-title'>{this.state.blog.title}</span>
                        <p>{this.state.blog.body}</p>
                    </div>
                </div>
        ) : (<div className='center'>Loading blog.....</div>)


        return(
            <div className='container'>
                {blog}
            </div>
         );
    }
}

export default Post;