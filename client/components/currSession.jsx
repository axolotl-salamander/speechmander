import React , { useState,useEffect } from "react";

const currSession = () => {
    const [state, setState] = useState (initialState);
    useEffect (() => {
        return () => {

        }
    }, [state]);
return (
    <div>
        {/* {currSessionInfo} */}
    </div>
);
};

export default currSession;