import './mainScreen.css'

interface mainScreenProps {
    text: string;
}

function MainScreen({ text }: mainScreenProps) {
    return (
        <>
            <div className='MainScreen'>
                <p>{text}</p>
            </div>

        </>
    )
}

export default MainScreen