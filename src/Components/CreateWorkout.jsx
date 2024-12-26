import { useContext } from "react"
import { Link } from 'react-router-dom'
import { WorkoutContext } from "../Contexts/WorkoutsContext";

export function CreateWorkout(){

    const { name, setName, HandleAddWorkout } = useContext(WorkoutContext);

    function HandleName(event) {
        setName(event.target.value);
    }

    function AddExercise(){
        const exerciseCard = document.createElement('div');
        exerciseCard.className = "exerciseCard";
        document.body.appendChild(exerciseCard);
    }

    return(
        <>
        <h2>Create Workout</h2>

        Název workoutu
        <input type="text" 
        id='createInput'
        value={name}
        onChange={HandleName}
        />
        <br />
        <button onClick={AddExercise}>Přidat cvik</button>

        <Link to={"/WorkoutList"}>
            <button id="saveWorkout" onClick={HandleAddWorkout}>Save</button>
        </Link>
        </>
    )
    
}