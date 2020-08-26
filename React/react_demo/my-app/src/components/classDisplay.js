import React, { Component } from 'react';
import './display.css';
import Loading from './Loading';

class Display extends Component{

    courseList = () => {
        const courseList = this.props.courseDetails.length ? this.props.courseDetails.map( (element) => {
            const { title, details, instructor, id } = element;
            return (
                <div className='course-card' key={id}> 
                    <h3>Course Name: {title} </h3>
                    <p>Details: {details}</p>
                    <p>Instructor:<i>{instructor}</i></p>
                    <button onClick={() => {this.props.deleteCourse(id)} }>Delete</button>
                    {/* <button onClick={ () => {editCourse(id, instructor, title, details)}}>Edit button</button> */}
               </div>        
            )
        }) : ( <Loading />)
        return courseList;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('updating display component');
        console.log('Props', prevProps, this.props);
        console.log('State', prevState, this.state);
    }
    
    render(){

        return(
            <div className='course-display'>
               {this.courseList()} 
           </div>     
       );
    }
    
}

export default Display;