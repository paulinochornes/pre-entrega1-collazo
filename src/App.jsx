import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi e-commerce!" />
    </div>
  )
}

export default App
