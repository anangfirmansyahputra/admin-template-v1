import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../utils/dataTable";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionCollumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="cell__action">
                        <Link
                            to="/users/test"
                            style={{
                                textDecoration: "none",
                            }}>
                            <div className="view__button">View</div>
                        </Link>
                        <div className="delete__button" onClick={() => handleDelete(params.row.id)}>
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatable__title">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid className="data__grid" rows={data} columns={userColumns.concat(actionCollumn)} pageSize={9} rowsPerPageOptions={[9]} checkboxSelection />
        </div>
    );
};

export default Datatable;
