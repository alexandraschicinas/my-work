import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./index.css";

const imgUrl = "https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/15250684_1353340791367009_5820004535474663832_o.jpg?_nc_cat=104&_nc_sid=a4a2d7&_nc_ohc=9HC8U4Be8q8AX-SbNWo&_nc_ht=scontent-otp1-1.xx&oh=85cc89cf4f71f5e192201276529e4f9e&oe=5F98C191";
const user = {
  firstName : "Alexandra",
  lastName : "Chicinas",
  ocupation : "Pharmacy Manager",
  school : "UMF CLUJ",
  
 

};
ReactDOM.render(
 <div className = "profile">
    <div>   
      < img src = {imgUrl} alt = "Profile"/>
    </div> 
    <div>
      <h1> {user.firstName+ " " + user.lastName}</h1>
    </div>
    <div>
      <h2 id= "info"> {user.ocupation}</h2>
    </div>
    <div>
      <h3 id = "info1">{user.school}</h3>
    </div>
    <div>
      <button id = "fb"><a href ="https://www.facebook.com/Alexandra.Szuszana/" >FB</a></button><button id = "insta">insta: < a href = "https://www.instagram.com/alexandras.chicinas/?hl=en">Insta</a></button>
    </div>
    <div id = "contact"> 
      <p>Contact</p>
    </div>
</div>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
