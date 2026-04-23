import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default AppRouter