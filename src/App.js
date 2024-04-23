import Header from "./Header.jsx/Header";
import FormCard from "./FormCard/FormCard";
import UserCard from "./UserCard.jsx/UserCard";
import { useState } from 'react';



function App() {

  const fetchData = (value) => {
    fetch(`https://api.github.com/users/${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((json) => {
        console.log(json)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };


  const [cardVisibility, setCardVisibility] = useState(false);

  const toggleCardVisibility = () => {
    setCardVisibility(!cardVisibility)}

  return (
    <>
    <Header/>
      <FormCard fetchData={fetchData} toggleCardVisibility={toggleCardVisibility} cardVisibility={cardVisibility}></FormCard>
      <UserCard toggleCardVisibility={toggleCardVisibility} cardVisibility={cardVisibility}></UserCard>
    </>
    
  );
}

export default App;
