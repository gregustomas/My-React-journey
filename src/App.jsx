import { useState } from 'react';
import { WorkoutList } from './Components/WorkoutList';
import { Routes, Route } from 'react-router-dom';
import { CreateWorkout } from './Components/CreateWorkout';
import { Navbar } from './Components/Navbar';
import { WorkoutContext } from './Contexts/WorkoutsContext';
import { WorkoutDetails } from './Components/WorkoutDetails';

function App() {
  const [name, setName] = useState();
  const [workouts, setWorkouts] = useState([]);
  function HandleAddWorkout() {
    setWorkouts(w => [...w, name]);
  }

  return (
    <>
      <Navbar />
      <WorkoutContext.Provider value={{ name, setName, workouts, setWorkouts, HandleAddWorkout }}>
        <Routes>
          <Route path='/CreateWorkout' element={<CreateWorkout />} />
          <Route path='/WorkoutList' element={<WorkoutList />} />
          <Route path='/WorkoutList/:workoutName' element={<WorkoutDetails />} />
        </Routes>
      </WorkoutContext.Provider>
    </>
  );
}

export default App;

