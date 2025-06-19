import Feedback_Card from "../../Compossant/Feedback_Card";
import PageContainer from "../../Compossant/PageContainer";
import Header from "../../Compossant/Header";
import Dashboard from "../../Compossant/Dashboard";
import * as Sentry from "@sentry/react";
console.log("Sentry initialized");
const feedbacks = [

];

const FeedbackPage = () => {
    return (
        <div className="Dashboard">
            <Header />
            <PageContainer component={<Feedback_Card feedbacks={feedbacks}/>}/>
        </div>
    );
}
Sentry.captureMessage("Test Sentry event from frontend");
export default FeedbackPage;