import './app.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div>
      <section id='Home'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Projects'><Parallax/></section>
      <Portfolio/>
      <section id='Contact'><Contact/></section>
    </div>
  )
}

export default App
