import FormCard from "./FormCard/FormCard";
import UserCard from "./UserCard.jsx/UserCard";


function App() {
  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <FormCard></FormCard>
      <UserCard></UserCard>
    </div>
    
  );
}

export default App;
