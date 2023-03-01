const checkValidJson = (text) => {
    if (typeof text == "object") return true;
    if (
      /^[\],:{}\s]*$/.test(
        text
          .replace(/\\["\\\/bfnrtu]/g, "@")
          .replace(
            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]"
          )
          .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  export const checkParams = (
    data,
    paramsData,
    headersData,
    jsonText,
    setMsg
  ) => {
    if (!data.url) {
      setMsg("Request URL is Missing");
      return false;
    }
    if (!checkValidJson(jsonText)) {
      setMsg("Text is Not Valid Json");
      return false;
    }
    return true;
  };
  
  export const getHeadersAndParams = (objArr) => {
    let obj = {};
    objArr.forEach((data) => {
      if (data.hasOwnProperty("check") && data.check) {
        obj = { ...obj, [data.key]: data.value };
      }
    });
    return obj;
  };
  