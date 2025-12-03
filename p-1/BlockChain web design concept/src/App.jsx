import './App.css'
import { Button } from "@/components/ui/button"
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Technology from './pages/Technology'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Index/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/technology" element={<Home/>}/>
        <Route path="/contact" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
