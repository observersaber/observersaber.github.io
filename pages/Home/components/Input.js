
import { useState, useEffect } from 'react'


const Input = ({ dataId, wordState }) => {

      // const [target, setTarget] = useState()
      // console.log(dataId)
      // const arrState = []
      // arrState[0] = "foc"
      let arrState = ["foc"];



      const [txt, setTxt] = useState("")

      const txtChange = e => {

            setTxt(e.target.value)
      }

      const judge = e => {

            console.log(e.key)
            wordState(arrState)
      }


      return (
            <input type="text" value={txt} onChange={txtChange} onKeyDown={judge} />
      );

}
export default Input