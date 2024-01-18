import { useState, useContext, useEffect } from 'react'
import Card from './shared/card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../Context/FeedbackContext'

// 'HandleAdd' passed as a prop from 'App.js' which is a function that creates a new feedback
function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)
  
  const {addFeedback, feedbackEdit1, updateFeedbackItem} = useContext(FeedbackContext)

  // usually called a side effect from doing/clicking somthing different
  useEffect(() => {
    if (feedbackEdit1.edit === true) {
      // the below are set once the (Feedbackedit1) is into edit mode
      setBtnDisabled(false)
      setText(feedbackEdit1.item.text)
      setRating(feedbackEdit1.item.rating)
    }
  }, [feedbackEdit1])
  // feedbackedit1 changes when the (editfeedback) functon runs, and it runs when the edit icon is cicked
  
    const handleTextChange = (e) => {
      if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
        // validation to know if the text is not  = to empty and less than 10
        // Real time ERROR checking
      } else if(text !== '' && text.trim().length <= 10) {
       setMessage('Text must be above 10 characters or more')
       setBtnDisabled(true)
      } else {
        setMessage(null)
        setBtnDisabled(false)
      } 

        setText(e.target.value)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      // another validation for the text length
      // also creating a new feedback which will have the text and the rating
      if (text.trim().length > 10) {
        const newFeedback = {
          text,
          rating
        }
        // 'HandleAdd' function passed into the 'FeedBackForm' as a prop which creates a new 'feedback' from the 'Feedback' component in the 'App.js'
        if (feedbackEdit1.edit === true) {
          updateFeedbackItem(feedbackEdit1.item.id, newFeedback)
        } else {
          addFeedback(newFeedback)
        }

        setText('')
      }
    }
  return (
    <Card>
      {/* 'HandleSubmit function passed into the form' */}
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div  className="input-group">
            <input onChange={handleTextChange}
            type="text" 
            placeholder='write your review' 
            value={text}
            />
            {/* Button component used/ */}
            {/* 'btnDisabled' has a class that disbles the send button until a number of characters has been typed in the input field */}
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {/* validating if the characters are up to 10 then displaying the 'usestate' message */}
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
