
import { useState } from 'react';

import { Helmet } from "react-helmet";

import "./index.css";

import Viewtxt from './components/Viewtxt.js'
import Edit from './components/Edit.js';

import Input from './components/Input';
const Home = () => {

    const [data, setData] = useState([])
    // const [dataId, setDataId] = useState([])
    const [state, changeState] = useState([])
    // data.map((x) => function () { console.log(x) })

    return <div>
        <Helmet>
            <html lang="en" />
            <title>打字練習</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Tutorial for React Helmet" />
            <meta name="google" value="notranslate" />
        </Helmet>

        <Edit Language={"en"} load={setData} />
        <Viewtxt txtData={data} state={state}/>

        <Input dataId={data.id} wordState={changeState}/>
    </div>
}

export default Home