import './App.css'
import { Header} from './components/Header'
import { Title } from './components/Title'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { AboutMe } from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <Header/>
      <Title title = "About Me"/>
      <AboutMe/>
      <Title title = "Personal Projects"/>
      <Projects/>
      <Title title="Contact Me"/>
      <Contact/>
      <br/><br/>
    </div>
  );
}

export default App;
