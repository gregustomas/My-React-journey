import { Link } from 'react-router-dom'

export function Navbar() {

    return(
        <>
        <div className="nav">
            <Link to="/WorkoutList">
                Workout list
            </Link>
            
            <Link to="/CreateWorkout">
                Create workout
            </Link>
        </div>
        </>
    )
}