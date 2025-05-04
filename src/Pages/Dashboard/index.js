import Header from "../../Compossant/Header";
import PageContainer from "../../Compossant/PageContainer";

const DashboardPage = () => {
    return (
        <div className="Dashboard">
            <Header />
            <PageContainer component={<p>Test</p>}/>
        </div>
    );
}

export default DashboardPage;