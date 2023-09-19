import './Skills.css';

function Skills(){
    return(
        <div id="skills">
    <div className="slider">
        <h1>Skills</h1>
        <figure>
        <div className="slide">
            <div className="outer" id="outer1">
            <div className="inner"><h1>HTML5</h1><h2>90%</h2></div>
            </div>
        </div>
        <div className="slide">
        <div className="outer" id="outer2">
            <div className="inner"><h1>CSS3</h1><h2>90%</h2></div>
            </div>
        </div>
        <div className="slide">
        <div className="outer" id="outer3">
            <div className="inner"><h1>JavaScript</h1><h2>80%</h2></div>
            </div>
        </div>
        <div className="slide">
        <div className="outer" id="outer4">
            <div className="inner"><h1>React js</h1><h2>70%</h2></div>
            </div>
        </div>
        </figure>
        
    </div>
    </div>
    )
}
export default Skills;