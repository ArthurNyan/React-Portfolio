
import BtnGitHuB from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectList";
import { useParams } from "react-router-dom";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    return (
        
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgbig} alt="" className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>
                    {project.gitHunLink && <BtnGitHuB link={project.gitHunLink}/>} 
                    

                </div>
            </div>
        </main>

    );
}
 
export default Project;