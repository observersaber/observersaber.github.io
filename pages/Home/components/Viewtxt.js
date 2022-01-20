// import Viewtxtfont from "./Viewtxtfont";
import { useState } from 'react'
// import { v4 } from 'uuid';

// import Input from './Input';

const Viewtxt = ({ txtData, state }) => {
      // console.log(dataId)
      // console.log(typeof (txtData))
      // console.log(typeof(txtData))
      // txtData.map((x) => console.log(x))

      // state = {
      //       visable: true,
      // };
      // toggle = () => {
      //       this.setState({
      //             visable: !this.state.visable,
      //       });
      // };

      return (
            <div className="main">
                  <div id="demo">
                        {
                              txtData.map((x, index) => {
                                    // dataId[index] = v4()
                                    const { id, word } = x;
                                    return <span key={id} id={id} className={state[index]}>{word}</span>
                                    // return <span key={dataId[index]} id={dataId[index]} className={state[index]}>{x}</span>
                              })
                              
                        }
                  </div>
            </div>
      );
}

export default Viewtxt