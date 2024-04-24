import Header from "./Header.jsx/Header";
import FormCard from "./FormCard/FormCard";
import UserCard from "./UserCard.jsx/UserCard";
import { useEffect ,useState } from 'react';



function App() {
  const[user, setUser]= useState({});
  const fetchData = (value) => {
        fetch(`https://api.github.com/users/${value}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
      }
 

  const [cardVisibility, setCardVisibility] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisibility(!cardVisibility)}

  return (
    <>
    <Header/>
      <FormCard fetchData={fetchData} toggleCardVisibility={toggleCardVisibility} cardVisibility={cardVisibility}></FormCard>
      <UserCard user={user} toggleCardVisibility={toggleCardVisibility} cardVisibility={cardVisibility}></UserCard>
    </>
    );
}

export default App;
