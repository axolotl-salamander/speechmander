import React from "react";
import Record from '../components/Record.jsx';

const PlayContainer = () => {
  return (
    <>
      <p>Play Container works!</p>
      <div className="play-container">
        <h2>Ready to start recording?</h2>
        <Record />
      </div>
    </>
  )
  // if (this.state.isPlaying === false) {
  //   return (
  //     <div>
  //       {/* <h2>Ready to Record?</h2> */}
  //       {/* <button>Play Button</button> => from /component/recording.jsx */}
  //     </div>
  //   );
  // } else if (this.state.isPlaying === true) {
  //   return (
  //     <div>
  //       {/* <h3>recording...</h3> */}
  //       {/* <div>timer</div>
  //       <button>stop button</button> */}
  //     </div>
  //   );
  // }
};

export default PlayContainer;
