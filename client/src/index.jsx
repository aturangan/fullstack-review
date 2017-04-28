import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);

    //sending a get request on the console 
    //want to send post 

    //check ajax syntax for success method 
      //not reaching ajax request?
    //repos/import doesn't give error, but doesn't console.log('success'); 

    $.ajax({
      url: 'http://127.0.0.1:1128/repos/import',
      type: 'POST', 
      data: JSON.stringify({"term": `${term}`}), 
      contentType: 'application/json',
      //JSON.stringify({'login': `${term}`}),

      success: function(response) {
        //the response should be the profile
        //need to send term to post 
        console.log(response); 
        console.log('success');
      },

      error: function(request, err) {
        console.log('error');
      }

    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));