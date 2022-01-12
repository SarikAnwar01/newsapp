
import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#03f8fc'
          progress={progress}

        />
        <Routes>


          <Route exact path="/" element={<News setProgress={setprogress} apiKey={apiKey} key="General" pageSize={pageSize} country={"in"} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setprogress} apiKey={apiKey} key="business" pageSize={pageSize} country={"in"} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={"in"} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setprogress} apiKey={apiKey} key="General" pageSize={pageSize} country={"in"} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setprogress} apiKey={apiKey} key="health" pageSize={pageSize} country={"in"} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setprogress} apiKey={apiKey} key="science" pageSize={pageSize} country={"in"} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setprogress} apiKey={apiKey} key="sports" pageSize={pageSize} country={"in"} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setprogress} apiKey={apiKey} key="technology" pageSize={pageSize} country={"in"} category="technology" />} />
        </Routes>
      </BrowserRouter>

    </div>

  )

}
export default App;