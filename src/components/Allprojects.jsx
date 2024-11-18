import Project from "./Project";
import '../css/Allprojects.css';

const projects = [
    {
        title: "EduBook chatbot",
        description:
            "EduBook chatbot that has the ability to query information, summarize pages, and generate quiz questions from textbooks.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/Teric-Simons/Capstone",
        framework:"Created with Flask",
    },

    {
        title: "Music Mentor",
        description:
            "A website similar to preply where users can upload music sheets,search for music sheets and hire tutors.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/Teric-Simons/Music-Mentor",
        framework:"Created with Flask",
    },

    {
        title: "Personal Website",
        description:
        "A personal website showcasing  GitHub projects, and personal information.",
        logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
        linkText: "View Project",
        link: "https://github.com/Teric-Simons/Personal-Website",
        framework:"Created with React",
    },

    {
        title: "Document Parser",
        description:
            "This project processes .docx files into their Json equivalent",
            logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
        linkText: "View Project",
        link: "https://github.com/Teric-Simons/documentParser",
        framework:"Python, Node js",
    },

    
]

const Allprojects = () => {
	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
			
					<Project
                        key={index}
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
                        framework={project.framework}
					/>
				
			))}
		</div>
	);
};

export default Allprojects;