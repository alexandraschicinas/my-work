import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./index.css";

const imgUrl = "https://scontent.fclj3-1.fna.fbcdn.net/v/t1.0-9/39270816_2070634866304261_5069344642428829696_n.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=_eI8Xa7ULHMAX8qtHer&_nc_ht=scontent.fclj3-1.fna&oh=b2cab665ecc1c1712ba5fd17a4124499&oe=6021EDFF";
const user = {
  firstName : "Alexandra",
  lastName : "Chicinas",
  ocupation : "Junior Web Developer",
  school : "FastTrackIT",
  fb : <a href ="https://www.facebook.com/Alexandra.Szuszana/" >FB</a>,
  insta: < a href = "https://www.instagram.com/alexandras.chicinas/?hl=en">Insta</a>
 

};
ReactDOM.render(
 <div className = "profile">
    <div>   
      < img src = {imgUrl} alt = "ProfilePicture"/>
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
      <button id = "fb"> {user.fb} </button><button id = "insta">{user.insta}</button>
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
