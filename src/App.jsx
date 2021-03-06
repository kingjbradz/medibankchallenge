import React, {useState, useEffect} from 'react';
import './index.css'

const App = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => setData(data.splice(0,10)));
    (async ()=>{
      const response = await fetch('https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json')
      const data = await response.json();
      setTimeout (() => {
        setData(data);
        setIsLoading(false);
      }, 1500);
    })();
  }, []);



  return (
    <div className="App">
      {isLoading ? 
      <div>Loading...</div> 
      : 
      <>
      <div>
        <h1 id="title">Hi There!</h1>
      </div>
      <div id="male-div" className="section">
      <h2 className="header">Male</h2>
      {data.map((owner) => {
          return (
          (owner.gender === 'Male') ? <div>
          {owner.pets && owner.pets.map((sub) => {
            return (
              (sub.type === 'Cat') ? 
              <div>
               <p className="name">{sub.name}</p>
              </div> 
              : 
              <>
              </>
              )} 
            )
          }
        </div>
        :  
        <>
        </>
        )
      })}
      </div>

      <div id="female-div" className="section">
      <h2 className="header">Female</h2>
      {data.map((owner) => {
          return (
          (owner.gender === 'Female') ? <div>
          {owner.pets && owner.pets.map((sub) => {
            return (
              (sub.type === 'Cat') ? 
              <div>
               <p className="name">{sub.name}</p>
              </div> 
              : 
              <>
              </>
              )} 

            )
          }
        </div>
        :  
        <>
        </>
        )
      })}
      </div>
      <div>
        <h4>Looking forward to chatting soon!</h4>
      </div>
      </>
      }
    </div>
  );
}

export default App;
