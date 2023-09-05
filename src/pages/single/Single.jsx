import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import profile from "../../assets/profile.jpg";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="single__container">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="edit__button">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src={profile} alt="img" className="item__img" />
                            <div className="details">
                                <h1 className="item__name">Anang Firmansyah</h1>
                                <div className="detail__item">
                                    <span className="item__key">Email:</span>
                                    <span className="item__value">anangfirmansyahp5@gmail.com</span>
                                </div>
                                <div className="detail__item">
                                    <span className="item__key">Phone:</span>
                                    <span className="item__value">081805454667</span>
                                </div>
                                <div className="detail__item">
                                    <span className="item__key">Address:</span>
                                    <span className="item__value">Jl. Raya Sesetan, Gg Lumba lumba selatan 1</span>
                                </div>
                                <div className="detail__item">
                                    <span className="item__key">Country:</span>
                                    <span className="item__value">Indonesia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;
