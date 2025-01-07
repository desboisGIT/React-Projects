import './SidePanel.css';

function SidePanel() {
    return (
        <div className="sidePanel">
            <h3 className="category">
                <i className="fas fa-tachometer-alt"></i> Dashboard
            </h3>
            <h3 className="category">
                <i className="fas fa-tasks"></i> Tasks
            </h3>
            <h3 className="category">
                <i className="fas fa-calendar-day"></i> Diary
            </h3>
        </div>
    );
}

export default SidePanel;
