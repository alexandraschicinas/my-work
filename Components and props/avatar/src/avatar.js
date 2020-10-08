import React from 'react';

const Avatar = (props) => {
    return (
        <div className = "Comm">
            <div className = "Infos">
                <img className = "Pic" src = {props.author.picUrl} />
                <div className = "Infos-name">
                    {props.author.name}
                </div>
            </div>
            <div className = "Comm-text">
                    {props.text}
            </div>
            <div className = "date">
                {props.date}
            </div>
        </div>
    );
}

 export default Avatar;
