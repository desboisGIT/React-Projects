import { useState } from "react";
import Button from "./assets/button/Button";
import "./calculator.css";
import MainScreen from "./assets/mainScreen/MainScreen";
import SecondScreen from "./assets/secondScreen/SecondScreen";

const evaluateExpression = (expr: string): string => {
  try {
    const modifiedExpr = expr.replace(/x/g, "*");
    return eval(modifiedExpr).toString();
  } catch (error) {
    return "Error";
  }
};

const Calculator = () => {
  const [expression, setExpression] = useState<string>("0");
  const [previousExpression, setPreviousExpression] = useState<string>("");
  const [eraseTextStatus, setEraseStatus] = useState<string>("C");
  const handleButtonClick = (text: string) => {
    setEraseStatus("C");
    if (text === "=") {
      const result = evaluateExpression(expression);
      setPreviousExpression(expression);
      setExpression(result);
    } else if (text === "C" || text === "CE") {
      setEraseStatus("CE");
      setExpression("0");
      if (expression === "0") {
        setPreviousExpression("");
      }
    } else if (text === "+" || text === "-" || text === "x" || text === "/") {
      if (["+", "-", "x", "/"].includes(expression[expression.length - 1])) {
        console.log("Invalid Syntax");
      } else {
        setExpression((prev) => prev + text);
      }
    } else if (text === "+/-") {
      if (expression.startsWith("-")) {
        setExpression(expression.slice(1));
      } else {
        setExpression("-" + expression);
      }
    } else {
      setExpression((prev) => prev + text);
    }
  };

  return (
    <div className="calculatorContainer">
      <div className="calculatorScreen">
        <SecondScreen text={previousExpression} />
        <MainScreen text={expression} />
      </div>

      <div className="calculatorButtonsContainer">
        <Button
          text={eraseTextStatus}
          buttonId="0"
          buttonType="light"
          onClick={handleButtonClick}
        />
        <Button
          text="( )"
          buttonId="1"
          buttonType="light"
          onClick={handleButtonClick}
        />
        <Button
          text="%"
          buttonId="2"
          buttonType="light"
          onClick={handleButtonClick}
        />
        <Button
          text="/"
          buttonId="3"
          buttonType="dark"
          onClick={handleButtonClick}
        />

        <Button
          text="7"
          buttonId="4"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="8"
          buttonId="5"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="9"
          buttonId="6"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="x"
          buttonId="7"
          buttonType="dark"
          onClick={handleButtonClick}
        />

        <Button
          text="4"
          buttonId="8"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="5"
          buttonId="9"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="6"
          buttonId="10"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="-"
          buttonId="11"
          buttonType="dark"
          onClick={handleButtonClick}
        />

        <Button
          text="1"
          buttonId="12"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="2"
          buttonId="13"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="3"
          buttonId="14"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="+"
          buttonId="15"
          buttonType="dark"
          onClick={handleButtonClick}
        />

        <Button
          text="+/-"
          buttonId="16"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="0"
          buttonId="17"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="."
          buttonId="18"
          buttonType="normal"
          onClick={handleButtonClick}
        />
        <Button
          text="="
          buttonId="19"
          buttonType="dark"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Calculator;
