import "./style.css";

const AvarageFeeling = () => {
    return (
        <div className="AvarageFeelingContainer">
            <h2>Moyenne Sentiment</h2>
            <div className="FeelingsContainer">
                <img src="/assets/happy.svg" alt="feeling" className="FeelingIcon" />
                <p className="FeelingText">Happy</p>
            </div>
        </div>
    );
}

export default AvarageFeeling;