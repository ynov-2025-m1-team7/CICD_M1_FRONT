import Header from "../../Compossant/Header";
import PageContainer from "../../Compossant/PageContainer";
import Dashboard from "../../Compossant/Dashboard";

const DashboardPage = () => {
    return (
        <div className="Dashboard">
            <Header />
            <PageContainer component={<Dashboard/>}/>
        </div>
    );
}

export default DashboardPage;