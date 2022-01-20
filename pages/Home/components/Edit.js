import { v4 } from 'uuid';

const Edit = ({ Language, load }) => {

      const data = require('../../../txt.json');

      var text = (Language === "en") ? data.English : data.chinese;

      var control = {
            article: 250
      }


      // let word = [], id = [];
      // var w = {}

      function dataLoad() {
            load([])
            for (var j = 0; j < control.article; j++) {
                  let x = Math.floor(Math.random() * text.length);


                  // w.word = text[x]

                  // word[j] = text[x];
                  // id[j] = v4()

                  let word = text[x], id = v4()

                  load(function (prevData) {
                        return [...prevData,
                        {
                              id: v4(),
                              word,
                        }];
                  });
                  // load({ ses, id })
            }


            // load(w)
            // load({ word, id })
            // console.log(w)

      }

      return (
            <div id="reload" className="btn" type="button" onClick={dataLoad}>
                  <i className="icon-loop2"></i>
            </div>
      )
}

export default Edit


