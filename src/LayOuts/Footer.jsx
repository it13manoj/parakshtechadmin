import { useState } from "react";
import { EditorTool } from "../EditorTool";

export const Footers = () => {
    const [features, setFeatures] = useState([
        { icon: "", subheading: "" }
    ]);



    const [isActive, setIsActive] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        heading: "",
        describe: "",
        file: null,
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
        const file = e.target.files[0] || null;
        setFormData((prev) => ({
            ...prev,
            file: file,
        }));
        setFileName(file ? file.name : "Choose file");
    };

    // Handle CKEditor change
    const handleEditorChange = (data) => {
        setFormData((prev) => ({
            ...prev,
            describe: data,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    const InsertHero = () => {
        setIsActive(true)
    }
    const InsertHeroBack = () => {
        setIsActive(false)
    }

    const addFeature = () => {
        setFeatures([...features, { icon: "", subheading: "" }]);
    };
    const removeFeature = (index) => {
        const updated = [...features];
        updated.splice(index, 1);
        setFeatures(updated);
    };
    const handleFeatureChange = (index, e) => {
        const { name, value } = e.target;
        const updated = [...features];
        updated[index][name] = value;
        setFeatures(updated);
    };

    return (
        <>
            <div id="page-wrapper">
                <div className="graphs">
                    <div className="xs">
                        <h3>Footer</h3>
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
                                                    <th>Column heading</th>
                                                    <th>Column heading</th>
                                                    <th>Column heading</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="active">
                                                    <th scope="row">1</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr className="success">
                                                    <th scope="row">3</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr className="info">
                                                    <th scope="row">5</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">6</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr className="warning">
                                                    <th scope="row">7</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">8</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
                                                <tr className="danger">
                                                    <th scope="row">9</th>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                    <td>Column content</td>
                                                </tr>
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
                                                    data={formData.describe}
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
                                        {features.map((item, index) => (
                                            <div key={index} className="box-border p-3 mb-3">

                                                {/* Icon Field */}
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

                                                    {/* Remove Button */}
                                                    <div className="col-sm-2">
                                                        {features.length > 1 && (
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => removeFeature(index)}
                                                            >
                                                                <i class="fa fa-minus"></i>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Sub Heading Field */}
                                                <div className="form-group">
                                                    <label className="col-sm-2 control-label">Sub-heading</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            type="text"
                                                            name="subheading"
                                                            value={item.subheading}
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