import React from "react";
import './Logo.scss';

const Logo = ({avatar, username}) => {
    return (
        <div className="post">
            <div className="post-header">
                <img className="post-avatar"
                alt="prof"
                src={avatar} />
                <a href="/"><h3>{username}</h3></a>
            </div>
        </div>
    )
}

export default Logo;