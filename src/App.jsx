// Import modules
import './App.css'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { useState } from 'react'

// Main app function where components are inserted
function App() {
    const [globalName, setGlobalName] = useState('Default');

    const globalNameChange = () => {
        setGlobalName("GLOBAL NAME");
    }

    return (
        <>
        <Header />

        <button onClick={globalNameChange}>Change All Names</button>

        <Card globalName={globalName}/>
        <Card globalName={globalName}/>
        <Card globalName={globalName}/>

        <Footer />
        </>
    )
}

export default App
