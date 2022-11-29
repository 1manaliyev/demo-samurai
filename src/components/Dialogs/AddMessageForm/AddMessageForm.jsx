import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengtCreator, required } from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength50 = maxLengtCreator(50);

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder="Enter your message" name="newMessageBody" component={Textarea} validate={[required, maxLength50]} />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}

export default reduxForm({form: 'dialog-add-message-form'}) (AddMessageForm)