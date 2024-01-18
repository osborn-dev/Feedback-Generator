import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/header"
import Feedbacklist from "./components/feedbacklist"
import FeedbackStats from "./components/feedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './Pages/AboutPage'
import { FeedbackProvider } from './Context/FeedbackContext'
import AboutIconLink from './components/AboutIconLink'


function App() { 
    return(
        // 'FeedbackProvider' giving the wrapped components(Children) access to the 'FeedbackContext' by wrapping them all.
        <FeedbackProvider>

    {/*must store multiple elements inisde a parent '<></>'
    in JSX 'className' is used and not CLASS */}
    <Router>
    {/* reps the header */} 
        <Header />
        <div className="container">
        <Routes>
            <Route exact path='/' element={
                <>
                      {/* 'HandleAdd' creates a new feedback */}
            <FeedbackForm />
               {/* reps the feedback lists/item     */}                        
            <FeedbackStats /> 
                            {/*PROP*/}
                                {/* 'HANDLEDELETE' = prop passed from 'FEEDBACKLIST' */}   
            <Feedbacklist />
                </>
            }>
              
            </Route>
            <Route path='/about' element={<AboutPage />} />
        </Routes>
        </div>
        <AboutIconLink />
    </Router>
    </FeedbackProvider>
    )
}

export default App