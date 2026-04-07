import { Routes, Route } from 'react-router'
import Navbar from './component/navbar/Navbar'
import Logo from './component/project_work/logo'
import Home from './component/home/Home'
import Poster from './component/project_work/Poster'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/poster" element={<Poster />}/>
      </Routes>
    </>
  )
}
export default App