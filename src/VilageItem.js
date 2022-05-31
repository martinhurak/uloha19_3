

function VilageItem(props)
{const styleObj = {fontSize:props.size,color:props.color}
if(props.type==='building'){
return ( 
  
   <i className="fa-solid fa-house" style={styleObj}></i>
  
)

}
if(props.type==='car-side'){
    return ( 
    
      <i className="fa-solid fa-car-side"style={styleObj}></i> 
      
    )
}
if(props.type==='home'){
    return ( 
      
      <i className="fa-solid fa-house-chimney-window"style={styleObj}></i> 
        
    )
}
if(props.type==='tree'){
    return ( 
        
      <i className="fa-solid fa-tree"style={styleObj}></i> 
        
    )
}
}
export default VilageItem