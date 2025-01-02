import { useState } from 'react';
import { useParams } from 'react-router-dom'

export function WorkoutDetails() {

    const { workoutName } = useParams();
    const [ exercises, setExercises ] = useState();
    const sets =document.getElementById("sets");



    return(
        <>
        <h2>Workout deatails - { workoutName }</h2>
        <form id='container'>
            Serie:
            <input type="number" id='sets'/>
            <button type="submit">Add exercise</button>
        </form>
        </>
    )
}