import React, { useContext } from "react";
import { DataContext } from "../../../../Context/DataProvider";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const JSONForm = () => {
    const { setJsonText, reqData } = useContext(DataContext);
    const [data, setData] = React.useState(reqData?.details?.body);

    setJsonText(data);
    const handleChange = (newCode) => {
        try {
            newCode = JSON.parse(newCode);
            setJsonText(newCode);
            setData(newCode);
        } catch (error) { }
    };

    return (
        <div className=" mb-2 font-semibold  scrollbar-hide  bg-white  ">
            <CodeMirror
                className=" "
                height="155px"
                value={JSON.stringify(data, 0, 3)}
                extensions={[javascript({ jsx: true })]}
                onChange={handleChange}
            />
        </div>
    );
};

export default JSONForm;
