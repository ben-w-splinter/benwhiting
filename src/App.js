import './App.css'
import { Header} from './components/Header'
import { Title } from './components/Title'
import { Project } from './components/Project'
import { Contact } from './components/Contact'
import { AboutMe } from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <Header/>
      <Title title = {"About Me"}/>
      <AboutMe/>
      <Title title = 'Personal Projects'/>
      <Project title={"Splinter"} content = {
        "Splinter is a mobile messaging application created in python using Kivy and KivyMd for user interface design. " + 
        "It contains a contact based messaging system that supports account control and friend requests. " + 
        "The project was created during the lockdown of 2020 to help understand the process of client-server architecture and front-end mobile app development. " +
        "This was the first full stack application I made and introduced me to the challenges project management."
      } imageURL = {"images/splinter.png"} projectURL={"https://github.com/ben-w-splinter/splinter"}/>
      <Project title={"Hodson Wedding"} content = {
          "Hodson Wedding was the first full website I had independently created using modern programming languages. " +
          "The site was created using React and a Firebase backend system. I used the site to manage food and song choices from wedding guests. " +
          "This was a great project to practice the development of React applications and cs-in-js use."
      } imageURL = {"images/hodsonwedding.png"} projectURL={"https://hodsonwedding.com/"}/>
      <Project title={"Hello Fair"} content = {
          "A site developed for Fair, a stock brokerage and educational platform. This was developed in a team of 30 developers along with a mobile application still "+ 
          "in development. This project taught me a lot about working in a team using Git and how to ensure my code was clean and readable for others."
      } imageURL = {"images/fair.png"} projectURL={"https://hellofair.io"}/>
      <Title title={"Contact Me"}/>
      <Contact/>
      <br/><br/>
    </div>
  );
}

export default App;
