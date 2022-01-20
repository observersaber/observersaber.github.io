

const Viewtxtfont = ({ txtData }) => {
      console.log(txtData)

      return (
            // word.map((x) => {

            txtData.map((x) => {
            //       const { word,id } = x;
                  return <span>{x}</span>
            //       // return <Viewtxtfont txtData={word} />
            })

            // })
            // Object.keys(txtData).map((x) => { return <span>{txtData[x].word}</span> })

            // <span>{txtData.word}</span>
      )
}

export default Viewtxtfont