// Write your Character component here
import "./Character.css";

function Character(props) {
  return (
    // props.users.map(user => (
    //     <Character user = {user} key = {}
    // ))
    <div className="character-list">
      <div className="character-list__name">
        <h2>characterName</h2>
        <div className="character-list__number">characterNumber</div>
      </div>
    </div>
  );
}

export default Character;
