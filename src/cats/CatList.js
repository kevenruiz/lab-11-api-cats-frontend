import { Component } from 'react';
import CatItem from './CatItem';
import './CatList.css';

export default class CatList extends Component {

  render() {
    const { cats } = this.props;

    return (
      <ul className="CatList">
        {cats.map(cat => (
          <CatItem key={cat.id} cat={cat} />
        ))}

      </ul>
    );
  }

}