import { useParams } from "react-router-dom"

const About = () => {
  const {id }=useParams()
  return (
    <div>
    <h1>ABOUT</h1>
    <p>page id : {id}</p>
    </div>
  );
}

export default About