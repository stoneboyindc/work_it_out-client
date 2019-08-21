import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import STORE from '../STORE';
import PageNav from '../Page Nav/PageNav';
import LandingPage from '../Landing Page/LandingPage';
import AddWorkouts from '../Add Workouts/AddWorkouts';
import ViewWorkouts from '../View Workouts/ViewWorkouts';
import WorkoutsContext from '../WorkoutsContext';

class App extends Component {
constructor(props) {
  super(props);
    this.state = {
      workouts: [],
      date: ''
    }
}




updateDate = date => {
  this.setState({
    date
  })
}

// addWorkout = workout => {
//   this.setState({
//     workouts: [...this.state.workouts, workout]
//   })
// }

// deleteWorkout = workout => {
//   const updatedWorkoutList = this.state.workouts.filter(workout => 
//     workout.id !== workouts.id
// )
// }

  render() {
    const contextValue = {
      workouts: this.state.workouts,
      date: this.state.date,
      addWorkout: this.addWorkout,
      deleteBookmark: this.deleteWorkout,
      updateBookmark: this.updateWorkout
    }

    return (
      <main className='App'>
        <PageNav />
        <Route exact path='/' component={LandingPage}/>
        <WorkoutsContext.Provider value={contextValue}>
          <Route path='/workouts/add' component={AddWorkouts} /> 
          <Route path='/viewworkouts/' component={ViewWorkouts} />
          {/* <Route path='/viewworkouts/:date' component={ViewWorkoutByDate} /> */}
        </WorkoutsContext.Provider> 
      </main>
    )
  }
}

export default App;
