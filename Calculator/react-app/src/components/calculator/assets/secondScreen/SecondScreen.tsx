import "./secondScreen.css";

interface SecondScreenProps {
  text: string;
}

function SecondScreen({ text }: SecondScreenProps) {
  return (
    <div className="SecondScreen">
      <p>{text}</p>
    </div>
  );
}

export default SecondScreen;
