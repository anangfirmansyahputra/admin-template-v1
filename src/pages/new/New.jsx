import { DriveFolderUploadOutlined } from "@mui/icons-material";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");

    return (
        <div className="new">
            <Sidebar />
            <div className="new__container">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="avatar" className="img" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="input__container">
                                <label htmlFor="file">
                                    Image : <DriveFolderUploadOutlined className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{
                                        display: "none",
                                    }}
                                />
                            </div>
                            {inputs.map((input) => (
                                <div className="input__container" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
