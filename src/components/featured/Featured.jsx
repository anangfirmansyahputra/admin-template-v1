import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertOutlinedIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featured__chart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <div className="desc">Previous transactions processing. Last payments may not be included</div>
                <div className="summary">
                    <div className="item">
                        <div className="item__title">Target</div>
                        <div className="item_result negative">
                            <KeyboardArrowDownOutlinedIcon fontSize="small" />
                            <div className="result__amount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__title">Last Week</div>
                        <div className="item_result positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="result__amount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item__title">Last Month</div>
                        <div className="item_result positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="result__amount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
