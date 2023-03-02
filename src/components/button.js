

function Button() {
    function handleClick(){
         alert('Click the button');
    }
    return (
        <button onClick= {handleClick}>Click me</button>
    )
}


export default Button;