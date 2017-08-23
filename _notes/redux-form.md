##
  npm i -S redux-form

## redux-form data flow
  http://redux-form.com/7.0.3/docs/GettingStarted.md/

## Sample
  SurveyForm
  ```
  <form onSubmit={this.props.handleSubmit(values=> console.log(values))}>
    <Field type="text" name="surveyTitle" component="input"/>
    <button type="submit">Submit</button>
  </form>
  ```

  Custom field component
  redux-from will automatically pass props to component
  ```
  <Field key={name} component={SurveyField} type="text" label={label} name={name}/>
  ```
