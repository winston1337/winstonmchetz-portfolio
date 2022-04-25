import {useState} from 'react';
import './Project.scss';

const Project = ({ name, desc, src, hoversrc, }) => {
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
            <button className="card-btn">VIEW PROJECT</button>
        </div>
    )
}

export default Project;