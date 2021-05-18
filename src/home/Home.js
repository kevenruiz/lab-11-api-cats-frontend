import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <h2>Home Page</h2>
        <p>
          <Link to='/cats'>See the List</Link>
        </p>
        <p>
          <Link to='/cats/add'>Add a cat</Link>
        </p>






      </div>
    );
  }

}