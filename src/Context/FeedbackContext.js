import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

// Provider wraps the components in order for them to have access to the'FEEDBACK'
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'This item is from context',
        rating: 10,
    },
    {
        id: 2,
        text: 'This item is from backend',
        rating: 6,
    },
    {
        id: 3,
        text: 'This item is from context',
        rating: 8,
    },
])
    // Setting the default edit to (FALSE)
    const [feedbackEdit1, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //  Add feedback
    const addFeedback = (newFeedback) => {
        // creating an 'Id'
        newFeedback.id = uuidv4()
        // making a copy, adding the new feedback and using the 'Spread-operator' to add the existing feedback items from global state
        setFeedback([newFeedback, ...feedback])
    }

    // Delete Feeback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Update feedback item
    const updateFeedbackItem = (id, updtItem) => {
        // taking in the (id-updatedItem(newfeedback) from the (FORM))
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updtItem} : item))  
    }


    // Editing Feedback
    // The (SETFEEDBACKEDIT) sets the (EDIT) mode to (TRUE) when clicked on
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit1,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedbackItem,
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext