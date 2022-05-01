import './App.css'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Title } from './components/Title'
import { Project } from './components/Project'
import { Contact } from './components/Contact'


function App() {
  return (
    <div className="App">
      <Header/>
      <Card title={"Hello World!"} content = {
        "I am currently a student at Lancaster University studying Computer Science. I have had a passion for application development and software design since the age of 13. " +
        "I have worked on many software programs as part of school, university and personal projects. " + 
        "I find Computer Science fascinating due to its balance of rules and expression of creativity, as well as its enormous impact on our society (both negative and positive). " + 
        "In the future, I hope to work on front-end and applications development to fulfil my 13 year-old dream. "
      } imageURL = "images/uni.jpg"/>
      <Title title = 'Personal Projects'/>
      <Project title={"Splinter"} content = {
        "Splinter is a mobile messaging application created in python using Kivy and KivyMd for user interface design." + 
        "It contains a contact based messaging system that supports account control and friend requests. " + 
        "The project was created during the lock down of 2020 to help understand the process of client, server architecture and front-end mobile app development. " +
        "This was the first full stack application I made and introduced me to the challenges project management."
      } imageURL = {"images/splinter.png"} projectURL={"https://github.com/ben-w-splinter/splinter"}/>
      <Project title={"Hodson Wedding"} content = {
          "Hodson Wedding was the first full website I had independently created using modern programming languages. " +
          "The site was created using React and a Firebase backend system. I used the site to manage food and song choices from wedding guests. " +
          "This was a great project to practice the development of React applications and cs-in-js use."
      } imageURL = {"images/hodsonwedding.png"} projectURL={"https://hodsonwedding.com/"}/>
      <Project title={"Personal Site"} content = {
          "This is the project you are viewing right now! " +
          "The site was also created using React and a Firebase backend system. I use this site to display personal projects and develop my web development skills. " +
          "This was also a great project to practice the development of React applications and have freedom of design choice."
      } imageURL = {"images/football.jpg"} projectURL={"https://github.com/ben-w-splinter/benwhiting"}/>
      <Title title={"Contact Me"}/>
      <Contact/>
      <br/><br/>
    </div>
  );
}

export default App;
