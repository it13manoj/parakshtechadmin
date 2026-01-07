// src/components/CustomUploadAdapter.js
import axios from "axios";
import API from "./Config/Api";

export default class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          axios
            .post(`${API.BASE_URL}upload-image`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              // Axios already gives parsed JSON
              resolve({
                default: res.data.url, // ✅ CKEditor expects { default: imageUrl }
              });
            })
            .catch((error) => reject(error));
        })
    );
  }

  abort() {
    // optional
  }
}
