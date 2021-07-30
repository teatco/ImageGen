import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class GenerateImage extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });

    if (this.props.onGenerateImage) {
      this.props.onGenerateImage(values);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <div className="create-contact-details">
            <input type="number" name="length" placeholder="Length" />
            <input type="number" name="width" placeholder="Width" />
            <button>Generate Image</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GenerateImage;
