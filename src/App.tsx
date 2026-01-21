import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
// import Art from './pages/Art'
// import Design from './pages/Design'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          {/* <Route path="art" element={<Art />} /> */}
          {/* <Route path="design" element={<Design />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
