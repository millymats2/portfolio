import resume from "../../images/resume.jpg";
import './index.scss';

const Resume = () => {
    return(
        <div className="resume-page">
            <img
            className="resume-img"
          src={resume}
          height={800}
          width={600}
          alt="Resume"
        />
        </div>
    )
}

export default Resume;