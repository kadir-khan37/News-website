import React from 'react';
const Card = ({data})=>{
   console.log(data);

return(
<div className='cardcontainer'>
{data.map((curitem , idx)=>{
if(!curitem.urlToImage){
    return null
}
else{
return(


<div className='card'>

<img src={curitem.urlToImage}></img>
 
 <div className='content'>

<a className='title' onClick={()=>window.open(curitem.url)}>{curitem.title}</a>
<p> {curitem.content}</p>
<button onClick={()=>window.open(curitem.url)}>read more </button>

 </div>


</div>

   






)


}

}

)
}

</div>
)
}
















export default Card ;