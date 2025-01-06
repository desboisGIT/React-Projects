import Button from './assets/button/Button';
import './calculator.css';
import MainScreen from './assets/mainScreen/MainScreen';

function Calculator() {
    return (
        <div className="calculatorContainer">
            <div className="calculatorScreen">
                <MainScreen text="ho"></MainScreen>
            </div>

            <div className="calculatorButtonsContainer">
                <Button text="C" buttonId="0" buttonType="light"></Button>
                <Button text="( )" buttonId="1" buttonType="light"></Button>
                <Button text="%" buttonId="2" buttonType="light"></Button>
                <Button text="/" buttonId="3" buttonType="dark"></Button>

                <Button text="7" buttonId="4" buttonType="normal"></Button>
                <Button text="8" buttonId="5" buttonType="normal"></Button>
                <Button text="9" buttonId="6" buttonType="normal"></Button>
                <Button text="x" buttonId="7" buttonType="dark"></Button>

                <Button text="4" buttonId="8" buttonType="normal"></Button>
                <Button text="5" buttonId="9" buttonType="normal"></Button>
                <Button text="6" buttonId="10" buttonType="normal"></Button>
                <Button text="-" buttonId="11" buttonType="dark"></Button>

                <Button text="1" buttonId="12" buttonType="normal"></Button>
                <Button text="2" buttonId="13" buttonType="normal"></Button>
                <Button text="3" buttonId="14" buttonType="normal"></Button>
                <Button text="+" buttonId="15" buttonType="dark"></Button>

                <Button text="+/-" buttonId="16" buttonType="normal"></Button>
                <Button text="0" buttonId="17" buttonType="normal"></Button>
                <Button text="." buttonId="18" buttonType="normal"></Button>
                <Button text="=" buttonId="19" buttonType="dark"></Button>
            </div>
        </div>
    )
}

export default Calculator

/* 

.parent {
display: grid;
grid-template-columns: repeat(4, 60px);
grid-template-rows: repeat(5, 60px);
grid-column-gap: 6px;
grid-row-gap: 6px;
}

*/