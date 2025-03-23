import './assets/App.css';
import ProfileCard from './components/ProfileCard.jsx'; 

function App() {
  let name = "Tejaswini";
  let name2 = "Visitor";

  return (
    <>
      {/* Pass the names as props to ProfileCard */}
      <ProfileCard name={name} alternativeName={name2} />
    </>
  );
}

export default App;
