import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../assets/blog.jpeg';
import axios from 'axios';

class Blogs extends Component{
    state= {
        blogs: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( res => {
            this.setState({
                blogs: res.data.slice(0, 40)
            })
        });
    }

    render(){
        const { blogs } = this.state;

        const blogList = blogs.length ? (
            blogs.map( blog => {
                return(
                    <div className='card blog' key={blog.id}>
                        <img src={BlogImage} alt='blog'></img>
                        <div className='card-content'>
                            <Link to= {'/' + blog.id}>
                                <span className='card-title'>{blog.title}</span>
                            </Link>
                            <p>{blog.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (<p className='center'> No Blogs yet....</p>)



        return(
            <div className='container center blogs'>
                <h3>Blogs</h3>
                { blogList }
            </div>
        )
    }
}

export default Blogs;