import React, { Component } from 'react';
import { getCat, deleteCat } from '../utils/cats-api';
import { Link } from 'react-router-dom';

export default class CatDetailPage extends Component {
  state = {
    cat: null
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const cat = await getCat(match.params.id);
      this.setState({ cat: cat });
    }
    catch (err) {
      console.log(err.message);
    }

  }

  handleDelete = async () => {
    const { cat } = this.state;
    const { history } = this.props;

    const confirmation = `Are you sure you want to delete this very specific item?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteCat(cat.id);
      history.push('/cats');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { cat } = this.state;

    if (!cat) return null;
//LINE 39 sends me to the link. 
// IF YOU NEED THIS FOR THE FUTURE TO SEND A LINK STRUCTURE COPY 39 TO 41 ALSO.. YOU GOT THIS BROSKI FROM PAST KEVEN

    return (
      <div className="CatDetailPage">

        <h2>{cat.name}</h2>

        <p>Introduced in {cat.year}</p>
        <p>Has {cat.lives} {cat.lives === 1 ? 'life' : 'lives'}</p>
        {cat.isSidekick && 'this cat is a sidekick'}


        <Link to={`/cats/${cat.id}/edit`}>
          Edit Cat Info
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Revome Cat
        </button>



      </div>
    );
  }
}
