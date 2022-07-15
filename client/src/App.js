import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage'
import ChatPage from './Pages/ChatPage/ChatPage'


const App = () =>{
  return(
    <div className='body'>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element = {<HomePage/>}/>
          <Route path = '/chat' element = {<ChatPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
