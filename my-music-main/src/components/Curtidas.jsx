import { useState } from "react";

function Curtidas() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>{likes} curtidas</p>

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Curtir
      </button>
    </div>
  );
}

export default Curtidas;