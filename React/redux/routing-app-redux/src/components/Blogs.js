import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import BlogImage from '../assets/blog.jpeg';
import { connect } from 'react-redux';

class Blogs extends Component{

    render(){
        console.log(this.props);
        const { blogs } = this.props;

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

const mapStateToProps = (state) => {
    return{
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(Blogs);