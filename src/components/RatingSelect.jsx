import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../Context/FeedbackContext"

function RatingSelect({select}) {
    const [selected, setSelected] = useState(10)
    // NOTE: We don't need local state here as it's a duplicate of parent state
    // also no real need for useEffect or context
    // useEffect(() => {
    //   select(feedbackEdit.item.rating)
    // }, [feedbackEdit])
    const {feedbackEdit1} = useContext(FeedbackContext)
  
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
      select(+e.currentTarget.value)
    }

    // basically displays the rating of the (Feedback-item) in edit mode
    useEffect(() => {
      setSelected(feedbackEdit1.item.rating)
    }, [feedbackEdit1])
  
    // NOTE: simplified with iteration
    return (
      <ul className='rating'>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type='radio'
              id={`num${i + 1}`}
              name='rating'
              value={i + 1}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    )
  }
  
  export default RatingSelect
