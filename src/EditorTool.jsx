import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CustomUploadAdapter from "./CustomUploadAdapter";


export const EditorTool = ({ data, onChange }) => {

  function CustomUploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new CustomUploadAdapter(loader);
    };
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data || ""}
      onChange={(event, editor) => {
        onChange?.(editor.getData());
      }}
      config={{
        extraPlugins: [CustomUploadPlugin], // ✅ FIX
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "underline",
          "link",
          "blockQuote",
          "imageUpload",
          "bulletedList",
          "numberedList",
          "insertTable",
          "|",
          "undo",
          "redo",
        ],
          height: "400px",
      }}
      
    />
  );
};
