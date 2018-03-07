import React, { Component } from 'react';
// import {Link, Route} from 'react-router-dom';
// import Login from './components/Login';
// import Welcome from './components/Welcome';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';

class App extends Component {
  constructor(){
    super();
    this.state = {user: ''};
  }

  klik(nama){
    this.setState({user: nama});
  }
  
  render() {
    return (
      <div className="container-fluid">

        <Tabs>
          <nav className="navbar navbar-default">
              <div className="navbar-header">
                <ul className="navbar navbar-nav">
                  <button className="btn btn-success"><TabLink to="tab1">Login </TabLink></button>
                  <button className="btn btn-info"><TabLink to="tab2"> Welcome</TabLink></button>
                </ul>
              </div>
          </nav>
          <TabContent for="tab1">
            <div>
              <h4>Name</h4>
              <input ref="nama" type="text" placeholder="Masukkan Nama" />
              <p/><button className="btn btn-primary" onClick={()=>{this.klik(this.refs.nama.value)}}>Submit</button>
            </div>
          </TabContent>
          <TabContent for="tab2">
            <h2>Halo {this.state.user}</h2>        
          </TabContent>
        </Tabs>                  
      </div>
    );
  }
}

export default App;
