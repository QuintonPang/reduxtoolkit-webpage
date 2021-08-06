import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/ducks/userSlice.js";

function App() {

	const dispatch = useDispatch();
	useEffect(()=>{

			 dispatch(getUser());



		  },[dispatch]);

	const user = useSelector((state)=>state.user);

	console.log("hi");
	console.log(typeof user,user);
	
	
  return (
    <div className="App">

	 
	  
	
	 	
	  {user&&Object.values(user).map(userData=>{

		const {id,name,username,address,phone,website,company} = userData;

	  return (<div key={id}>
		  <h1> Hello, {name}</h1>
			<h1> Your username is {username}</h1>
		</div>	 
	  ) ;
	  
	  })}
    
	  </div>
	
  );
}

export default App;
