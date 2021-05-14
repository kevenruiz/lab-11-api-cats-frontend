import { Component } from 'react';
import './CatsPage.css';
import CatList from './CatList';
import { getCats } from '../utils/cats-api';

export default class CatsPage extends Component {
  state = {
    cats: []
  }

  async componentDidMount() {
    const cats = await getCats();
    if (cats) {
      this.setState({ cats: cats });
    }
    else {
      console.log('No cats received! Check network tab');
    }
  }

  render() {
    const { cats } = this.state;
    return (
      <div className="CatsPage">
        <h2> List o' Cats </h2>

        <CatList cats={cats} />

      </div>
    );
  }

}