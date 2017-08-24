/*
  SurveyNew shows SurveyForm and SurveyFormReview
*/
import React, { Component } from "react";
import { reduxForm } from 'redux-form';  
//
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };
 
  renderContent(){
    if(this.state.showFormReview === true){
      return <SurveyFormReview onCancel={()=>this.setState({showFormReview:false})}/>;
    }
    return <SurveyForm onSurveySubmit={()=>this.setState({showFormReview: true})}/>;
  }

  render() {
    return (
      <div>
       {this.renderContent()}
      </div>
    );
  }
}

/*
  force clear the values in surveyForm when user left SurveyNew.
  Because the from data will be clean by reduxFrom by default.
*/
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);