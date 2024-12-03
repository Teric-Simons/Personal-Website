import Project from "./Project";
import '../css/Allprojects.css';

const projects = [
    {
        title: "Netflix Clone",
        description:
        "Netflix Clone created using React, Express JS and firebase.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        linkText: "View Project",
        link: "https://netflix-3fc8c.web.app/",
        framework:"Created with React,Express JS and firebase",
    },

    {
        title: "Invoice Generator",
        description:
        "A website that generates an PDF invoice based on user information.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        linkText: "View Project",
        link: "https://github.com/Teric-Simons/Invoice-Generator",
        framework:"Created with React",
    },
    {
        title: "EduBook chatbot",
        description:
            "EduBook chatbot that has the ability to query information, summarize pages, and generate quiz questions from textbooks using Open-Ai technology and BM-25 Algorithm.",
        logo: "https://media.licdn.com/dms/image/D4D12AQFWFLeRgjzEdA/article-cover_image-shrink_600_2000/0/1674452473282?e=2147483647&v=beta&t=CTX82s8PK-F_rq_u0U5-qx_Pavm7l6y0WolsperM6N0",
        linkText: "View Project",
        link: "https://github.com/Teric-Simons/Capstone",
        framework:"Created with Flask, Vue.js, PostgreSQL",
    },

    {
        title: "Music Mentor",
        description:
            "A website similar to preply where users can upload music sheets,search for music sheets and hire tutors.",
            logo: "https://media.licdn.com/dms/image/D4D12AQFWFLeRgjzEdA/article-cover_image-shrink_600_2000/0/1674452473282?e=2147483647&v=beta&t=CTX82s8PK-F_rq_u0U5-qx_Pavm7l6y0WolsperM6N0",
        linkText: "View Project",
        link: "https://github.com/Teric-Simons/Music-Mentor",
        framework:"Created with Flask, Vue.js",
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