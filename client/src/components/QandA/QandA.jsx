import React from 'react';
import Search from './Search.jsx';
import Questions from './Questions.jsx';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsList: [],

    }


  }

  componentDidMount() {
    getQuestions();
  }

  getQuestions() {
    // axios.get('')
    //   .then((response) => {
    //     this.setState({questionsList: response.questions}))
    //   .catch((err) => {
    //     console.log('error ', err)
    //   })
  }


  render() {
    return (
      <>
        <h4>Questions &amp; Answers</h4>
        <div>
          <Search questionsList={this.state.questionsList}/>
        </div>
        <div>
          <Questions questionsList={this.state.questionsList}/>
        </div>
      </>
    );
  }

}





export default QandA;