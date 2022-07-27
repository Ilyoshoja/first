import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App