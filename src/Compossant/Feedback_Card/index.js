import "./style.css";

const Feedback_Card = () => {
    return (
            <div className="cards">
                <article className="card">
                    <div className="flex-container">
                        <div className="flex-items">
                            <img src="/assets/Feedback/HappySmiley.svg" alt="" className={ "smiley"}/>
                        </div>
                        <div className="flex-items">
                            <div className="info">
                                <p className={"info-name"}> Franck </p>
                                <p className={"info-date"}> Just Now </p>
                                <p> Type </p>
                            </div>

                            <div className="content">
                                <p>
                                    The idea of reaching the North Pole by means of balloons appears to have
                                    been entertained many years ago.
                                </p>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
    );
}

export default Feedback_Card;