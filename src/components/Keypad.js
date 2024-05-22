// Code Keypad Component Here

function Keypad (){
    function changeHandler(){
        console.log("Entering password...")
    }
    
    return (
        <div>
            <input type="password" onChange={changeHandler}></input>
        </div>
    )
}

export default Keypad;