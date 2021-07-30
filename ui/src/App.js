import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { getImage, generateImage } from './services/UserService';
import { Image } from './components/Image';
import GenerateImage from './components/GenerateImage';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    data: [],
    image: {},
  };

  getImage = () => {
    getImage().then((data) => {
      this.setState({ data: data });
    });
  };

  genImage = (image) => {
    generateImage(image).then((image) => {
      console.log('muga ' + this.state.image);
      this.setState({ image: image });
    });
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
              <Route
                path="/generate"
                render={({ history }) => (
                  <GenerateImage
                    onGenerateImage={(image) => {
                      this.genImage(image);
                      history.push('/');
                    }}
                  ></GenerateImage>
                )}
              />
            </div>

            <div className="col-md-4">
              <Image data={this.state.data}></Image>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Footer getImage={this.getImage}></Footer>
        </div>
      </div>
    );
  }
}

export default App;
