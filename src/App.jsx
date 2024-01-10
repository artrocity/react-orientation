// Import modules
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'

// Main app function where components are inserted
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>

        <h1>Vite + React</h1>
        <Card />
        <Footer />
        </>
    )
}

export default App
