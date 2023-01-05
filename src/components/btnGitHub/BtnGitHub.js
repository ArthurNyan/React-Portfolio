import "./style.css"
import githubicon from "./gitHub-black.svg"
const BtnGitHuB = ({link}) => {
    return (
        <a href={link}  target="_blank" rel="noopener" className="btn-outline">
            <img src={githubicon}  alt=""/>
            GitHub repo
        </a>);
}
 
export default BtnGitHuB;