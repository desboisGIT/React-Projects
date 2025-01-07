import './SidePanel.css';

interface Section {
    category: string;
}

interface SidePanelProps {
    sections: Array<Section>;
}

function SidePanel({ sections }: SidePanelProps) {
    return (
        <div className="side-panel">
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <h3 className="category">{section.category}</h3>
                </div>
            ))}
        </div>
    );
}

export default SidePanel;
