import {useState} from 'react';
import './Project.scss';

const Project = ({ name, desc, src, hoversrc, link, git  }) => {
    const [hover, setHover] = useState(false);
    return (
        <div className="card" onMouseOver={()=> {
            setHover(true);
        }} onMouseOut={() =>{
            setHover(false);
        }}>
            <div className="card-body">
                <img className="card-image" src={hover ? hoversrc : src} alt="project"/>
                <h2>{name}</h2>
                <p><i>{desc}</i></p>
            </div>

           <a href={link} target="_blank" rel="noreferrer"> <button onClick={link} className="card-btn">VIEW PROJECT</button>
           </a>
           <a href={git} target="_blank" rel="noreferrer"> <button onClick={git} className="card-btn">VIEW GITHUB</button>
           </a>
            
            
        </div>
    )
}

export default Project;