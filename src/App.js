import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey=process.env.REACT_APP_API_KEY;

  state={
    mode:"light",
    progress:0
  }
  setProgress= (progress)=>
  {
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <Router>
        <Navbar />
          <LoadingBar
              height={1}
              color="red"
              progress={this.state.progress}
        />
        <Routes>
             <Route exact path="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general" country="in" pageSize={this.pageSize} />}/>
             <Route exact path="/sports"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" category="sports" country="in" pageSize={this.pageSize} />}/>
             <Route exact path="/entertainment"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="entertainment" category="entertainment" country="in" pageSize={10} />}/>
             <Route exact path="/business"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="business" category="business" country="in" pageSize={this.pageSize} />}/>
             <Route exact path="/health"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" category="health" country="in" pageSize={10} />}/>
             <Route exact path="/science"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="science" category="science" country="in" pageSize={this.pageSize} />}/>
             <Route exact path="/technology"  element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="technology" category="technology" country="in" pageSize={this.pageSize} />}/>
        </Routes>
      </Router>
    );
  }
}
