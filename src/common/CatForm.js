import { Component } from 'react';
import './CatForm.css';

export default class CatForm extends Component {
  state = {
    name: '',
    type: '',
    lives: 9,
    url: '',

    year: '',
    isSidekick: false
  }

  componentDidMount() {
    const { cat } = this.props;
    if (!cat) { return; }

    this.setState(cat);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeType = ({ target }) => {
    this.setState({ type: target.value });
  }

  handleChangeLives = ({ target }) => {
    this.setState({ lives: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ url: target.value });
  }

  handleChangeYear = ({ target }) => {
    this.setState({ year: target.value });
  }

  handleChangeIsSidekick = ({ target }) => {
    this.setState({ isSidekick: target.checked });
  }

  render() {
    const { name, type, lives, year, isSidekick } = this.state;
    const { cat } = this.props;

    return (
      <form className="CatForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Cat Name</span>
            <input name="name" required placeholder="Name of the famous cat..."
              value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Cat Type</span>
            <select name="type" required placeholder="Type"
              value={type} onChange={this.handleChangeType}
            >
              <option value="" disabled>Type of feline</option>
              <option>Angora</option>
              <option>Grey Tabby</option>
              <option>Orange Tabby</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Lives Remaining</span>
            <select name="lives" required
              value={lives} onChange={this.handleChangeLives}
            >
              <option>9</option>
              <option>8</option>
              <option>7</option>
              <option>6</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
              <option>0</option>
            </select>
          </label>
        </p>





        <p>
          <label>
            <span>Year Introduced</span>
            <input name="year" required pattern="\d{4}"
              title="in YYYY form"
              placeholder="Enter a four-digit year"
              value={year} onChange={this.handleChangeYear}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Is a Sidekick?</span>
            <span className="vertically-centered">
              <input name="isSidekick"
                type="checkbox"
                value={isSidekick} onChange={this.handleChangeIsSidekick}
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>{cat ? 'Update' : 'Add'} Cat</button>
        </p>

      </form>
    );
  }
}


// marty had this on the top (state) url
// url: 'https://www.michiganhumane.org/wp-content/uploads/2019/12/Lil-Bub.jpg',

/*

// this was something in line 100, i removed the image tag, but I might need to
added a later time in the lab maybe
<p>
<label>
  <span>Cat Image Url</span>
  <input name="url" required placeholder="Url to image of cat"
    value={url} onChange={this.handleChangeUrl}
  />
</label>
</p>
*/