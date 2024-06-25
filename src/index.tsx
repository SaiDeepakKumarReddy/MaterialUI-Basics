import React from 'react';
import ReactDOM from 'react-dom';
import textElem from './components/myTypography';
import button from './components/button';
import inputType from './components/textField';
import selectType from './components/select';
import selectRadioButton from './components/radioButton';
import checkBox from './components/checkBox';
import switchh from './components/switch';
import MuiNavbar from './components/navbar';
import MuiLink from './components/link';
import MuiResponsiveness from './components/responsiveness';
import MuiTimeline from './components/timeline';
import MuiImageList from './components/imageList';
const App =()=>{
    return(
        <>
        <MuiNavbar/>
        <br/>
        <MuiLink />
        <br/>
        <MuiResponsiveness/>
        <br/>
        <MuiTimeline/>
        <br/>
        <MuiImageList/>
        </>
    );
};
ReactDOM.render( <App/>,document.getElementById("root"));


