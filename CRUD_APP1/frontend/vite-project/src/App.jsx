import { useState } from 'react'
import './App.css'
import { Add } from './components/Add'
import { Update } from './components/Update'
import Delete from './components/Delete'
import View from './components/View'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div style ={{ border: '7px solid red', padding: '20px', backgroundColor: 'lightyellow', textAlign: 'center'   }}>
      <div style ={{ color: 'red' }}>
       <h1>CRUD FUNCTION APP</h1>
        <Add />
        <Update />
        <Delete />
        <View />
       </div>
    </div>


  )
}

export default App
