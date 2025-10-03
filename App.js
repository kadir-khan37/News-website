import logo from './logo.svg';
import './App.css';
import Card from './card'
import React, {useEffect , useState} from 'react';
function Newsapp() {
  const[search , setsearch] =useState("india");
  const[newsdata , setnewsdata] = useState(null);
  async function getData(){
  const apikey = `6732645220cb4dd1990e6f10c60ff6ce`;
  const url = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apikey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  let dt = data.articles.slice(0,10);
  setnewsdata(dt);
  }

 useEffect(()=>{
    getData();
 },[]);
  const handleInput=(e)=>{
   console.log(e.target.value);
   setsearch(e.target.value);
  }
  const userInput=(e)=>{
    console.log(e.target.value);
    setsearch(e.target.value);
  }
  
  return (

    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul style={{display:"flex", gap:"11px"}}>
                <span style={{fontWeight:600, fontSize:"17px"}}>All News</span>
                <span style={{fontWeight:600, fontSize:"17px"}}>Trending</span>

            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput}/>
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
            <p className='head'>stay update with the trendy news </p>
            <div className='categorybtn'>

            <button onClick={userInput} value='sports'>Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>

            </div>
        </div>
        <div>

        {newsdata ? <Card data={newsdata}/> : null}

        </div>
        </div>
        
  )
}



export default Newsapp;
