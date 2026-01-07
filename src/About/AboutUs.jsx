import { useEffect, useState } from "react";
import { EditorTool } from "../EditorTool";
import axios from "axios";
import API from "../Config/Api";

export const AboutUs = () => {
    const [isActive, setIsActive] = useState(false)
    const [fileName, setFileName] = useState("Choose file");
    const [token] = useState(localStorage.getItem('token'))
    const [template, temmplateContent] = useState()
    const [assets, setAssets] = useState([
        { icon: "", sub_heading: "" }
    ]);

    const [formData, setFormData] = useState({
        title: "",
        heading: "",
        contents: "",
        images: null,
        pages: "AboutUs"
    });





    // Handle input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle file input separately
    const handleFileChange = (e) => {
        const images = e.target.files[0] || null;
        setFormData((prev) => ({
            ...prev,
            images: images,
        }));
        setFileName(images ? images.name : "Choose file");
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
        const payload = {
            ...formData,
            assets, // array of icons & sub headings
        };
        try {
            axios.post(`${API.BASE_URL}home-hero`, payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                find()
                setFormData({
                    title: "",
                    heading: "",
                    images: null,
                    pages: "AboutUs"
                })
                setIsActive(false)
            })
        } catch (e) {
            console.log(e);

        }
    };


    const find = () => {
        axios.get(`${API.BASE_URL}home-hero/AboutUs`, {
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

    const addFeature = () => {
        setAssets((prev) => [
            ...prev,
            { icon: "", sub_heading: "" }
        ]);
    };

    const removeFeature = (index) => {
        setAssets((prev) => prev.filter((_, i) => i !== index));
    };


    const handleFeatureChange = (index, e) => {
        const { name, value } = e.target;

        setAssets((prev) => {
            const updated = [...prev];          // copy array
            updated[index] = {
                ...updated[index],               // copy object
                [name]: value                    // dynamic update
            };
            return updated;
        });
    };

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
                        <h3>About Us</h3>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-offset-11 col-md-1">
                                    {isActive == false &&
                                        <button type="submit" className="btn-success btn" onClick={InsertHero}>
                                            <i class="fa fa-plus" aria-hidden="true"></i> About Us
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
                                                    <th>Heading</th>
                                                    <th>Assets</th>
                                                    <th>Image</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {template && template.map(row => (
                                                    <tr className="active">
                                                        <th scope="row">1</th>
                                                        <td>{row.title}</td>
                                                        <td>{row.heading}</td>
                                                        <td>{row?.assets.map(rows => (
                                                            <table>
                                                                <tr>
                                                                    <td>{rows.icon}</td>
                                                                    <td>{rows.sub_heading}</td>
                                                                </tr>
                                                            </table>
                                                        ))}</td>
                                                        <td>
                                                            <img
                                                                src={`${API.BASE_URL_IMAGES}${row.images}`}
                                                                alt="image"
                                                                width="80"
                                                            />
                                                        </td>
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
                                                    placeholder="Default heading"
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
                                            <label className="col-sm-2 control-label"></label>
                                            <div className="col-sm-8">
                                                <button
                                                    type="button"
                                                    className="btn btn-success"
                                                    onClick={addFeature}
                                                >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {assets.map((item, index) => (
                                            <div key={index} className="box-border p-3 mb-3">

                                                {/* Icon */}
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">Icon</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            name="icon"
                                                            value={item.icon}
                                                            onChange={(e) => handleFeatureChange(index, e)}
                                                            className="form-control1"
                                                            placeholder="Enter icon class"
                                                        />
                                                    </div>

                                                    <div className="col-sm-2">
                                                        {assets.length > 1 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => removeFeature(index)}
                                                            >
                                                                <i className="fa fa-minus"></i>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Sub Heading */}
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">Sub-heading</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            name="sub_heading"
                                                            value={item.sub_heading}
                                                            onChange={(e) => handleFeatureChange(index, e)}
                                                            className="form-control1"
                                                            placeholder="Enter sub heading"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        ))}



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
                                                    <button
                                                        type="reset"
                                                        className="btn-inverse btn"
                                                        onClick={() => {
                                                            setFormData({
                                                                focusedInput: "",
                                                                disabledInput: "",
                                                                password: "",
                                                                describe: "",
                                                                file: null,
                                                            });
                                                            setFileName("Choose file");
                                                        }}
                                                    >
                                                        Reset
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