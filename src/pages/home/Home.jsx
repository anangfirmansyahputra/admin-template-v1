import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home__container">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
                </div>
                <div className="list__container">
                    <div className="list_title">Latest Transactions</div>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Home;
