import PropTypes from "prop-types"  
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"
import Card from "./shared/card"
// 'ITEM' passed in as a PROP
// 'HANDLEDELETE' passed in as a prop for the (X) button
function Feedbackitem({item}) {
            //from feedbackcontext 
const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  

    return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Feedbackitem
