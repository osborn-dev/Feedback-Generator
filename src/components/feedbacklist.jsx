import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import Feedbackitem from './feedbackitem'
import FeedbackContext from '../Context/FeedbackContext'
//'FEEDBACK' = PROP PASSED FROM THE APP STATE
function Feedbacklist() {
  // Extracting the "FeedbackContext"
  const {feedback} = useContext(FeedbackContext)
  
   if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
   }
  return (
    // mapping through and creating the 'lists'
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        {/* displaying feedback item & linking to 'ITEM-LIST'
        through the 'ITEM.ID & ITEM '
        'handleDelete' = prop passed into 'FeedbackItem' */}
          <Feedbackitem 
          key={item.id} 
          item={item}/>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
}


export default Feedbacklist
