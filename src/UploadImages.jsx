import { useEffect, useState } from "react";
import axios from "axios";
import API from "./Config/Api";

export const UploadImages = () => {
    const [token] = useState(localStorage.getItem('token'))
    const [template, temmplateContent] = useState()



    const [isActive, setIsActive] = useState(false)
    const [formData, setFormData] = useState({
        images: null,
        pages: "UploadImages"
    });

    const [fileName, setFileName] = useState("Choose file");

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
                    images: null,
                    pages: "UploadImages"
                })
                setIsActive(false)
            })
        } catch (e) {
            console.log(e);

        }

    };

    const find = () => {
        axios.get(`${API.BASE_URL}home-hero/UploadImages`, {
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

       const copyLink = (link) => {
        navigator.clipboard.writeText(link)
            .then(() => alert("Link copied!"))
            .catch(() => alert("Copy failed"));
    };
    return (
        <>
            <div id="page-wrapper">
                <div className="graphs">
                    <div className="xs">
                        <h3>Images</h3>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-offset-11 col-md-1">
                                    {isActive == false &&
                                        <button type="submit" className="btn-success btn" onClick={InsertHero}>
                                            <i class="fa fa-plus" aria-hidden="true"></i> Images
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
                                                    <th>Image</th>
                                                    <th colSpan={2}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {template && template.map(row => (
                                                    <tr className="active">
                                                        <th scope="row">1</th>
                                           
                                                        <td>
                                                            <img
                                                                src={`${API.BASE_URL_IMAGES}${row.images}`}
                                                                alt="image"
                                                                width="80"
                                                            />
                                                        </td>
                                                        <td><i
                                                            className="fa fa-copy"
                                                            style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
                                                           onClick={() => copyLink(API.BASE_URL_IMAGES+row?.images)}
                                                         title="Copy link"></i></td>
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