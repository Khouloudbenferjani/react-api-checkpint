import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

 const [users,setUsers]= useState([])

//  uplod users from data base 
 const getUsers = async()=>{
  const response=await axios.get ('http://jsonplaceholder.typicode.com/users')
console.log (response.data)
setUsers(response.data)

 }

useEffect (()=>{
  getUsers()

},[])
return(
  <div className="App">
  {users.map((user,index)=><li key={index}>{user.name}</li>)}

  </div>
);
}



export default App
