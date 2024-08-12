import Button from './button'
 import React,{useState} from 'react'

const btnvalue= ["Ac","⌫","%","+",1,2,3,"-",4,5,6,"*",7,8,9,"/",".",0,"00","="]

function Calcbody(){
    const [value, setValue] = useState('');

    const handleClick = (text) => {
        if (text === "Ac") {
          setValue('');
        } else if (text === "⌫") {
          setValue(value.slice(0, -1));
        } else if (text === "=") {
          try {
            setValue(eval(value).toString());
          } catch {
            setValue("Error");
          }
        } else {
          setValue(value + text);
        }
      };
    return(
        <div className='calc'>
            <h1>CASIO</h1>
          <input className='screen' type="text"  value={value}  />
          {
            btnvalue.map((value,i)=>{
                return(
                    <Button  key={i} text={value} onClick={()=>handleClick(value)}

                    />
                )
            })
          }
           
          
         
        </div>

       
        
    )
}

export default Calcbody