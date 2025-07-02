import {useState} from 'react'
import AnimalShow from './AnimalShow'

//function that returns a random animal

function getRandomAnimal(){
    const animals=['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    const randomIndex=Math.floor(Math.random()*animals.length);
    return animals[randomIndex];
};

console.log(getRandomAnimal());

function App(){

    const[animals,setAnimals]=useState([])

    const handleClick=()=>{
        setAnimals([...animals,getRandomAnimal()]);
    };

    const renderedAnimals=animals.map((animals,index)=>{
        return <AnimalShow type={animals}  key={index} />
    })
    return(
        <div>
            <button onClick={handleClick}>Add Animals</button>
            <div>{renderedAnimals} </div>
        </div>

    );
}

export default App;