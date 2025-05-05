import Feedback_Card from "../../Compossant/Feedback_Card";
import PageContainer from "../../Compossant/PageContainer";
import Header from "../../Compossant/Header";
import Dashboard from "../../Compossant/Dashboard";

const feedbacks = [
    {
        id: 1,
        name: "John Doe",
        date: "2023-10-01",
        comment: "Great service!"
    },
    {
        id: 2,
        name: "Jane Smith",
        date: "2023-10-02",

        comment: "Could be better.",
    },
];

const FeedbackPage = () => {
    return (
        <div className="Dashboard">


            <Header />
            <PageContainer component={<Feedback_Card feedbacks={feedbacks}/>}/>

        </div>
    );
}
export default FeedbackPage;