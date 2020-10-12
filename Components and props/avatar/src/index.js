import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './avatar';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Avatar
    author = {{picUrl: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", name: "Whiskas"}}
    text = "Miau Miau..."
    date = "13.06.2020"
    />
    <Avatar 
    author = {{picUrl: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg", name:"Puppy"}}
    text = "Ham Ham..."
    date = " 17.09.2020"
    />
    <Avatar 
    author = {{picUrl: "https://img.fruugo.com/product/0/04/131566040_max.jpg", name: "Nobby"}}
    text = "Chit Chit..."
    date = "20.06.2020"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
