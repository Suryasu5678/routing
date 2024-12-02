import { useParams } from "react-router-dom";

const Contact = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>CONTACT </h1>
      <p>page id : {id}</p>
    </div>
  );
};

export default Contact;
