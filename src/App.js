import React from 'react';
// import logo from './logo.svg';
import './App.css';
import util from './util';
import Theform from './components/Theform';
import CardList from './components/CardList';
import ErrCardlist from './components/ErrorCardlist';

const testData = [
  'sophiebits',
  'sebmarkbage',
  'bvaughn'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      errList: []
    };
    this.initialData().then(list => {
      console.log('Success', list);
    });
  }

  initialData = async () => {
    const list = await util.getMulpleUsers(testData);
    this.setState({profiles: list});
    return list;
  }
  
  updateList = async (username) => {
    try {
      const newUser = await util.findGitHubUser(username);
      const usersList = [newUser, ...this.state.profiles];
      this.setState({ profiles: usersList });
    } catch(err) {
      console.log('error cachado', err);
      const errmsj = new Error(err && err.message ? err.message : 'Unexpected error occurred.');
      this.setState({errList: [errmsj] });
    }
  }
  
  clearErrMsj = () => {
    this.setState({ errList: [] });
  };
  
  render() {
    return (
      <div>
        <div className="header">
          {this.props.title}
        </div>
        <Theform updateTheList={this.updateList} />
        <ErrCardlist messages={this.state.errList} 
          claerAction={this.clearErrMsj} />
        <CardList data={this.state.profiles} />
      </div>
    );
  }
}

export default App;
