import React , { Component } from 'react';
import './blog.css';
import BlogImage from '../assets/blog.jpeg';
import { connect } from 'react-redux';


class Post extends Component{

    handleClick = () => {
        console.log(this.props.blog.id);
        this.props.deleteBlog(this.props.blog.id);
        this.props.history.push('/blogs');
        
    }

    render(){
        console.log(this.props);
        const blog = this.props.blog ? (
                <div className='card blog'>
                    <img src={BlogImage} alt='blog'></img>
                    <div className='card-content'>
                        <span className='card-title'>{this.props.blog.title}</span>
                        <p>{this.props.blog.body}</p>
                        <div className="center">
                            <button className="btn blue" onClick={this.handleClick}> Delete </button>
                        </div>
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

const mapStateToProps = (state, ownProps) => {
    // console.log('Own props of the Post Component', ownProps);
    console.log('Redux state',state);
    let id = ownProps.match.params.post_id;
    return{
        blog: state.blogs.find( blog => blog.id === id )
    }
}

const mapDispatchToProps = dispatch => {
    // const action = { type: 'DELETE_POST', id: id};
    return{
        deleteBlog: (id) => { dispatch({ type: 'DELETE_POST', id: id})}
    }
}

// store.dispatch({ type: 'delete', payload: ''})

export default connect(mapStateToProps, mapDispatchToProps)(Post);