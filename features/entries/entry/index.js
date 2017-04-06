import { Field } from 'redux-form';

export const Entry = ({handleSubmit}) => {
    return (
      <form className="entryForm" onSubmit={ handleSubmit}>
        <h3 className="subTitle">Entry</h3>
        <div>
          <label htmlFor="askee">Name</label>
          <Field name="askee" component="input" type="text" placeholder="name" className="askee" required/>
        </div>
        <div>
          <label htmlFor="ask">Question</label>
          <Field name="ask" component="input" type="text" placeholder="question" className="ask" required/>
        </div>
        <div>
          <label>Response</label>
          <div>
            <label><Field name="status" component="input" type="radio" value="accept" required/> accept</label>
            <label><Field name="status" component="input" type="radio" value="reject" required/> reject</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

export default Entry
