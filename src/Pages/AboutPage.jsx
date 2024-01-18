import Card from "../components/shared/card"
import { Link } from "react-router-dom"
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Us</h1>
        <p>This is a react app to leave feedback for a product</p>
      </div>

      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Card>
  )
}

export default AboutPage
