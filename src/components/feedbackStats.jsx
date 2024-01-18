import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

// props requires curly braces'
// 'FEEDBACK' is the prop being passed to display the 'STATS'
function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
    // calculating ratings average using the 'reduce' method
    let average = feedback.reduce((accumulator, current) => {
        return accumulator + current.rating
    }, 0) / feedback.length

   average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
