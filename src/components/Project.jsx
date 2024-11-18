import '../css/Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
const Project = ({key, logo, title, description, linkText,framework, link}) => {
	
	return (
	
			<div className="project" key = {key}> 
				
				
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
                        <div className='framework' style={{fontStyle:"italic"}}>{framework}</div>
						
						<div className="project-link">
							

							<div className="project-link-text">
                                <a href={link} target='_blank'>
                                <FontAwesomeIcon style={{color:"black"}} icon={faLink} />
                                    {linkText}</a></div>
						</div>
						
					</div>
			
		
		
	);
};

export default Project;