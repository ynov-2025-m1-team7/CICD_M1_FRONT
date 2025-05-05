import Feedback_Card from "../../Compossant/Feedback_Card";
import Header from "../../Compossant/Header";

const feedbacks = [
    {
        id: 1,
        name: "John Doe",
        date: "2023-10-01",
        feedback: "Great service!",
    },
    {
        id: 2,
        name: "Jane Smith",
        date: "2023-10-02",
        feedback: "Could be better.",
    },
];

const FeedbackPage = () => {
    return (
        <div className="Dashboard">
            <Header />
            <Feedback_Card feedbacks={feedbacks}/>
            <h1>test</h1>
        </div>
    );
}

export default FeedbackPage;