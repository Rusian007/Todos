
import React,{Fragment} from 'react';
import './topbar.css';

const TopBar = () =>{

  const showdiv =(e)=>{
    var theHiddenDiv = document.getElementById("hiddenDiv")
    theHiddenDiv.classList.remove("hidden");
  }
  const submitLogic=(e)=>{
    var theHiddenDiv = document.getElementById("hiddenDiv")
    theHiddenDiv.classList.add("hidden");

    var thevalue = document.getElementById("theAddListInput")
    if(thevalue.value){
      console.log(thevalue.value);
      //send request with this value
      //Clean the input value
    }
    else{
      alert("You did not Enter anything 😞 ")
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

    <div id="hiddenDiv" className="hidden">
    <div className="darken">
      <div className="addfield">
        <h2>Enter new Task !</h2>
        <input type="text" name="text" id="theAddListInput" />
        <button onClick={submitLogic} className="btn"> Submit +</button>
      </div>
    </div>
    </div>

    </Fragment>
  )
}

export default TopBar;
