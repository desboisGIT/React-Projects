import './button.css'

interface ButtonProps {
    text: string;
    buttonId: string;
    buttonType: string;
}

function Button({ text, buttonId, buttonType }: ButtonProps) {
    return (
        <div>
            <button id={buttonId} className={`calculatorButton ${buttonType}`}>
                <p>{text}</p>
            </button>
        </div>
    )
}

export default Button