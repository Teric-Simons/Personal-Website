import './css/App.css';
import profilePicture from "./images/me.jpeg";
import Worklisting from "./components/Worklisting";
import Projects from "./components/Allprojects";
function App() {
  return (
    <div className="App">
      <div className="left-side">
        <div className="personal-information">
          <img className='profile-picture' src= {profilePicture} alt='Profile Picutre'/>
          <p className='name'>Teric Simons</p>
          <a href="https://github.com/Teric-Simons" target='_blank'>Github</a>
          <p>Kingston, Jamaica</p>
          <p>Hire Status: <span style={{color:"green"}}>Available</span></p>
          <a href="mailto:tericsimons12@gmail.com">Contact Me</a>
        </div>

        <div className='work-info'>
        <div className='project-heading'>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" class="svg-inline--fa fa-briefcase " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"></path></svg>
          <h3>Work</h3>
        </div>
      
          <Worklisting/>
        

        </div>
      </div>
      <div className="right-side">
        <div className="background-information">
          <h1 className="typing-effect">Full Stack Developer</h1>
          <p>I am a Full Stack Developer with expertise in Java, Python, and JavaScript. I have experience in building scalable, secure, and reliable web applications using frameworks such as Flask, React JS, and Vue JS. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. My toolkit includes HTML, CSS, Git/GitHub, API integration, VSCode, PostgreSQL, and MySQL. I am always looking for new challenges and opportunities to grow as a developer.</p>
        </div>
        <div className="all-projects">
          <div className='project-heading'>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder-open" class="svg-inline--fa fa-folder-open " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M88.7 223.8L0 375.8 0 96C0 60.7 28.7 32 64 32l117.5 0c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7L416 96c35.3 0 64 28.7 64 64l0 32-336 0c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224l400 0c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480L32 480c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"></path></svg>
          <h3>Projects</h3>
          </div>
          <Projects/>
        
        </div>
      </div>
     
   
   </div>
  );
}

export default App;
