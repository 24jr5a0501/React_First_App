
function ProfileCard({ name }) {  // Destructure the prop 'name' here
    return (
      <>
        <div className="card">
          <div className="imageCard"><img src="kshitij.png" alt="" /></div>
          <h2>{name}</h2>  {/* Use the 'name' prop here */}
          <p>Myself Tejaswini, and this is my first React Node mini-project on ProfileCard.</p>
        </div>
      </>
    );
  }
  
  export default ProfileCard;
  