import { useEffect, useState } from "react";
import { EditorTool } from "../EditorTool";
import axios from "axios";
import API from "../Config/Api";

export const Career = () => {
    const [token] = useState(localStorage.getItem('token'))
    const [template, temmplateContent] = useState()
    const [isActive, setIsActive] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        contents: "",
        pages: "Jobs"

    });


    // Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    // Handle CKEditor change
    const handleEditorChange = (data) => {
        setFormData((prev) => ({
            ...prev,
            contents: data,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post(`${API.BASE_URL}home-hero`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                find()
                setFormData({
                    title: "",
                    contents: "",
                    pages: "Jobs"
                })
                setIsActive(false)
            })
        } catch (e) {
            console.log(e);

        }
    };


    const find = () => {
        axios.get(`${API.BASE_URL}home-hero/Jobs`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            temmplateContent(res?.data?.data)

        })
    }

    useEffect(() => {
        find()
    }, [0])




    const InsertHero = () => {
        setIsActive(true)
    }
    const InsertHeroBack = () => {
        setIsActive(false)
    }

    const deleteTrash = (id) => {
        const params = {
            id: id
        }
        axios.post(`${API.BASE_URL}deleteRecords`, params, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            find()
        })
    }

    return (
        <>
            <div id="page-wrapper">
                <div className="graphs">
                    <div className="xs">
                        <h3>Career</h3>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-offset-11 col-md-1">
                                    {isActive == false &&
                                        <button type="submit" className="btn-success btn" onClick={InsertHero}>
                                            <i class="fa fa-plus" aria-hidden="true"></i> Career
                                        </button>
                                    }
                                    {isActive == true &&
                                        <button type="submit" className="btn-success btn" onClick={InsertHeroBack}>
                                            <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                        {isActive == false &&
                            <div className="content_bottom">
                                <div className="col-md-12 span_3">
                                    <div className="bs-example1" data-example-id="contextual-table">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Jobs</th>
                                                    <th>Description</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {template && template.map(row => (
                                                    <tr className="active">
                                                        <th scope="row">1</th>
                                                        <td>{row.title}</td>
                                                        <td
                                                            dangerouslySetInnerHTML={{
                                                                __html: row.contents?.split("</p>")[0] + "</p>",
                                                            }}
                                                        ></td>
                                                        <td><i
                                                            className="fa fa-trash-o"
                                                            style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
                                                            onClick={() => {
                                                                if (window.confirm("Are you sure you want to delete?")) {
                                                                    deleteTrash(row.id);
                                                                }
                                                            }}
                                                        ></i></td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="clearfix"> </div>
                            </div>
                        }
                        {isActive == true &&
                            <div className="tab-content">
                                <div className="tab-pane active" id="horizontal-form">
                                    <form className="form-horizontal" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="focusedinput" className="col-sm-2 control-label">
                                                Title
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleChange}
                                                    className="form-control1"
                                                    id="focusedinput"
                                                    placeholder="Default title"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="describe" className="col-sm-2 control-label">
                                                Describe
                                            </label>
                                            <div className="col-sm-8">
                                                <EditorTool
                                                    className="form-control1"
                                                    data={formData.contents}
                                                    onChange={handleEditorChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-8 col-sm-offset-2">
                                                    <button type="submit" className="btn-success btn">
                                                        Submit
                                                    </button>
                                                    <button type="button" className="btn-default btn">
                                                        Cancel
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}