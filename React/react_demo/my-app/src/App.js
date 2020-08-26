import React from 'react';
import Display from './components/classDisplay';
import Navbar from './components/Navbar';
import AddCourse from './components/AddCourse';
import './App.css';

class App extends React.Component {
  state = { 
    heading: 'React App',
    courseDetails: []
   }

   addCourse = (course) => {
     console.log('Inside App.js', course);
     course.id = Math.ceil(Math.random() * 100);  
     let courseDetails = [...this.state.courseDetails, course];
     console.log('New Course Details Array', courseDetails);
     // re render happens
     this.setState({
      //  courseDetails: newCourseDetails
        courseDetails
     })
   }

   deleteCourse = (id) => {
      let newCourse = this.state.courseDetails.filter( course => {
        return course.id !== id;
      })

      this.setState({
        courseDetails: newCourse
      })
   }

   componentDidMount(){
      const courseDetails = [
        { id: 1, title: 'React', details: 'Best UI Library ', instructor: 'Jack' },
        { id: 2, title: 'Node', details: 'I/O, event driven environment', instructor: 'Jack' }
      ]
    //  console.log('Mounting Complete! Inside Component Did Mount...')
     setTimeout( () => {
      this.setState({courseDetails})
     }, 2000);
     
   }


  render(){
    // console.log('Rendering after constructor');
    return (
      <div className="App">
        <Navbar heading={this.state.heading}></Navbar>
        <Display courseDetails={this.state.courseDetails} deleteCourse={this.deleteCourse}></Display>
        <AddCourse addCourse ={this.addCourse}></AddCourse>
      </div>
    );
  }  
}

export default App;
