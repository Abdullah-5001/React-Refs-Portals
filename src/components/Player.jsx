import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState("");
  // const [submit, setSubmit] = useState(false);
  const playerName = useRef();

  const handleNameSubmit = () => {
    // setSubmit((submit) => !submit);
    // setSubmit(true);
    // setSubmit((submit) => !submit);
    if (!playerName.current.value) return;
    setName(playerName.current.value);
    playerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {name || "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleNameChange}
          // value={submit ? "" : name}
          // disabled={submit}
        />
        <button onClick={handleNameSubmit}>Set Name</button>
      </p>
    </section>
  );
}
