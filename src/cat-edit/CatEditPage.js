import { Component } from 'react';
import CatForm from '../common/CatForm';
// import Loader from '../common/Loader';
import { getCat, updateCat } from '../utils/cats-api';
import './CatEditPage.css';
console.log('Hello from CatEditPage');

export default class CatEditPage extends Component {
  state = {
    cat: null,
    loading: true
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
    finally {
      this.setState({ loading: false });
    }
  }

  handleUpdate = async cat => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const updatedCat = await updateCat(cat);
      history.push(`/cats/${updatedCat.id}`);
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { cat } = this.state;

    return (
      <div className="CatEditPage">
        <h2>Edit Cat</h2>

        {cat && <CatForm cat={cat} onSubmit={this.handleUpdate} />}
      </div>
    );
  }

}