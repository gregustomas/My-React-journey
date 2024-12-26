import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { WorkoutContext } from "../Contexts/WorkoutsContext";

export function WorkoutList(){

    const { workouts } = useContext(WorkoutContext);

    return(
        <>
        <div className="workout-menu">
            <h2>Your workouts</h2>
            <ul>
                {workouts.map((workout, index) => 
                <li key={index}>
                    <Link to={`/WorkoutList/${workout}`}>
                        {workout}
                    </Link>
                </li>)}
            </ul>

            <Link to="/CreateWorkout">
                <button>Přidat Workout</button>
            </Link>
        </div>
        </>
    )
}