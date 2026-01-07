import { useEffect, useState } from "react";
import { EditorTool } from "./EditorTool";
import axios from "axios";
import API from "./Config/Api";

export const ServiceDetails = () => {
    const [token] = useState(localStorage.getItem('token'))
    const [template, temmplateContent] = useState()
    const [fileName, setFileName] = useState("Choose file");
    const [services, setServices] = useState([
        { name: "Web Development" },
        { name: "Software Development" },
        { name: "App Development" },
        { name: "Web Designing" },
        { name: "Digital Marketing" },
        { name: "Ecommerce Solutions" },
    ])
    const [isActive, setIsActive] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        contents: "",
        sub_content: "",
        heading: "",
        assets: "",
        images: null,
        pages: "ServiceDetails"

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

    const handleEditorChange1 = (data) => {
        setFormData((prev) => ({
            ...prev,
            assets: data,
        }));
    };
    const handleEditorChange2 = (data) => {
        setFormData((prev) => ({
            ...prev,
            sub_content: data,
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
                    heading: "",
                    contents: "",
                    sub_content: "",
                    assets: "",
                    pages: "ServiceDetails"
                })
                setIsActive(false)
            })
        } catch (e) {
            console.log(e);

        }
    };


    const find = () => {
        axios.get(`${API.BASE_URL}services/findServices`, {
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

    const handleFileChange = (e) => {
        const images = e.target.files[0] || null;
        setFormData((prev) => ({
            ...prev,
            images: images,
        }));
        setFileName(images ? images.name : "Choose file");
    };



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
                        <h3>Service Details</h3>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-offset-11 col-md-1">
                                    {isActive == false &&
                                        <button type="submit" className="btn-success btn" onClick={InsertHero}>
                                            <i class="fa fa-plus" aria-hidden="true"></i> Details
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
                                                    <th>Title</th>
                                                    <th>Details</th>
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
                                                Types of Services
                                            </label>
                                            <div className="col-sm-8">
                                                <select

                                                    name="pages"
                                                    value={formData.pages}
                                                    onChange={handleChange}
                                                    className="form-control1"
                                                    id="focusedinput"
                                                    placeholder="Default title"
                                                >
                                                    <option value={""}>Select Services</option>
                                                    {services.map(row => (
                                                        <option value={row.name}>{row.name}</option>
                                                    ))}

                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="focusedinput" className="col-sm-2 control-label">
                                                Heading
                                            </label>
                                            <div className="col-sm-8">
                                                <input
                                                    type="text"
                                                    name="heading"
                                                    value={formData.heading}
                                                    onChange={handleChange}
                                                    className="form-control1"
                                                    id="focusedinput"
                                                    placeholder="Default title"
                                                />
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <label htmlFor="describe" className="col-sm-2 control-label">
                                                Top Description
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
                                            <label htmlFor="describe" className="col-sm-2 control-label">
                                                Right Side
                                            </label>
                                            <div className="col-sm-8">
                                                <EditorTool
                                                    className="form-control1"
                                                    data={formData.assets}
                                                    onChange={handleEditorChange1}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="describe" className="col-sm-2 control-label">
                                                Bottom
                                            </label>
                                            <div className="col-sm-8">
                                                <EditorTool
                                                    className="form-control1"
                                                    data={formData.sub_content}
                                                    onChange={handleEditorChange2}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputFile" className="col-sm-2 control-label">
                                                Choose File
                                            </label>
                                            <div className="col-sm-8">
                                                <div className="custom-file">
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        id="exampleInputFile"
                                                        onChange={handleFileChange}
                                                    />
                                                    <label className="custom-file-label" htmlFor="exampleInputFile">
                                                        {fileName}
                                                    </label>
                                                </div>
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