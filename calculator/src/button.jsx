

function Button({text,onClick}){
    return(
      
        //  <input type="button" className="btn" value={text} onClick={onClick} />

         <button className="btn" onClick={onClick} >
            {text}
            </button>
    )
}

export default Button