import { Routes, Route } from 'react-router'
import Navbar from './component/navbar/Navbar'
import Logo from './component/project_work/Logo'
import Home from './component/home/Home'
import Poster from './component/project_work/Poster'
// import LanguageProvider  from './Language.jsx'
import LanguageProvider from "./Language.jsx";
const App = () => {
  return (
    <LanguageProvider>   {/* 👈 wrap yaha karo */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/poster" element={<Poster />} />
      </Routes>

    </LanguageProvider>
  )
}
export default App