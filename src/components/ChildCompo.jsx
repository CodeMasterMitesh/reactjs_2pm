import { useRef }  from "react";
import React from "react";
import {memo} from "react";

const ChildCompo = memo(() => {
    console.log("ChildCompo rendered");
    const number = useRef(0);
    return (
        <div>
            <h1>ChildCompo Component</h1>
            <p>Number : {number.current++}</p>
        </div>
    )
});
// export default memo(ChildCompo);
export default ChildCompo;