import { useParams } from 'react-router-dom'

export function WorkoutDetails() {

    const { workoutName } = useParams();

    return(
        <>
        <h2>Workout deatails - { workoutName }</h2>
        </>
    )
}