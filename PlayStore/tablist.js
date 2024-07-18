import "./playstore.css";

const Tablist = ({ tab, onChangeTab, activeTabId }) => {
    const isActive = activeTabId === tab.tabId;
    return (
        <li className="tab-item-container">
            <button
                type="button"
                className={`tab-button ${isActive ? "active" : "normal"}`}
                onClick={() => onChangeTab(tab.tabId)}
            >
                {tab.displayText}
            </button>
        </li>
    );
};

export default Tablist;
