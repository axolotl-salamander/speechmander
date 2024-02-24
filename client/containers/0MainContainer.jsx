//houses the actual render containers

import React from "react";
import WelcomeContainer from "./1welcome";
import PlayContainer from "./2.3playContainer";
import DataContainer from "./4dataContainer";

const MainContainer = () => {

if (this.state.render===1){
    return (
    <div>
        {WelcomeContainer}
    </div>
)
}
else if (this.state.render===2){
    return (
    <div>
        {PlayContainer}
    </div>
)
} else {
    return (
        <div>
            {DataContainer}
        </div>
    )
}
}

export default MainContainer