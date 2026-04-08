import axios from "axios";
import { useEffect, useState } from "react";

function Usera() {

  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(4);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err => console.log(err));


  },[]);

  return (
    
    <div>
        <div className="max-w-6xl mx-auto px-4"> 
      <h1>dinesh Axois Api</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> 
    
      {users.slice(0,loading).map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
    {loading < users.length &&(
        <button onClick={() =>
            setLoading(loading + 4)}
            className="test"> Load More

        </button> )}
     {loading > 4 && (
          <button
            onClick={() => setLoading(loading - 4)}
            className="px-4"
          >
            Load Less
          </button>
        )}

    </div>
    </div>
  );
}

export default Usera;