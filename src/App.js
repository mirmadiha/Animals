import {useState} from 'react'

function App(){

    function makeArray(){
        return[1,2,3,4];
    }

    const myArray=makeArray();
    const firstElement=myArray[0];
    const secondElement=myArray[1];

    console.log(firstElement, secondElement);
    // const [count , setCount]=useState(0);

    // const handleClick=()=>{
    //     setCount(count+1);
    // };

    // return(
    //     <div>
    //         <button onClick={handleClick}>Add Animals</button>
    //         <h1>The count of animals is = {count}</h1>
    //     </div>
    // );
}

export default App;