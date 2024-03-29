
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Register from './Pages/Register'
import Announcement from './Components/Announcement'
import Navbar from './Components/Navbar'
import SignIn from './Pages/SignIn'
import CreateJob from './Pages/CreateJob'
import { JobsProvider } from './Helpers/JobContext';




const App = () => {
  return (
    <div>

      <Router>
        
        <JobsProvider>

          <Announcement />
          <Navbar />

          <Routes>


            <Route path="/" exact element={<Home />} />
            <Route path='/jobs' exact element={<Jobs />} />
            <Route path='/createJob' exact element={<CreateJob />} />

            <Route path='/register' exact element={<Register />} />
            <Route path='/login' exact element={<SignIn />} />


          </Routes>

        </JobsProvider>
      </Router>



    </div>
  )
}

export default App
