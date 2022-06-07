
import React,{Fragment} from 'react';
import './topbar.css';

const TopBar = (props) =>{
  var divShow = false

  const showdiv =(e)=>{

    if (divShow){
      var theHiddenDiv = document.getElementById("hiddenDiv")
      theHiddenDiv.classList.add("hidden");
      divShow = false
    } else{
      var theHiddenDiv = document.getElementById("hiddenDiv")
      theHiddenDiv.classList.remove("hidden");
      divShow = true
    }

  }



  return(

    <Fragment>

    <nav>
      <div></div>
      <div>
        <button onClick={showdiv} className="btn"> Add New +</button>
      </div>

    </nav>

    <div  id="hiddenDiv" className="hidden">
    <div className="darken">
      <div className="addfield">
        <h2>Enter new Task !</h2>
        <input type="text" name="text" id="theAddListInput" />
        <button onClick={()=>{props.valueSubmitCallBack(); divShow = false}} className="btn"> Submit +</button>
      </div>
    </div>
    </div>

    </Fragment>
  )
}

export default TopBar;
