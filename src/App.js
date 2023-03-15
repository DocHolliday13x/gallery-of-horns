//  REBUILD AS A CLASS COMPONENT

// FIRST - IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal'

// SECOND - CREATE THE CLASS -- will always have a render method
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showModal: false,
      selectedBeast: '',
      selectedBeastDescrip: '',
    }
  };

  handleOpenModal = (image, descrip) => {
    this.setState({
      showModal: true,
      selectedBeast: image,
      selectedBeastDescrip: descrip,
    })
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  };

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          handleOpenModal={this.handleOpenModal}
        />

        <SelectedBeast
          Modal={Modal}
          handleCloseModal={this.handleCloseModal}
          selectedBeast={this.state.selectedBeast}
          selectedBeastDescrip={this.state.selectedBeastDescrip}
          showModal={this.state.showModal}
        />
        <Footer />
      </>
    )
  }
}

// THIRD - EXPORT THE CLASS FOR OTHER FILES TO IMPORT
export default App;

//TODO:
// start here in app
// create a modal (it can live anywhere, but we should store it wherever app is bringing it in)
// app will tell modal when to open and close
// it opens wherever the click event happens (in hornedbeasts)
// since each beast is different, we have to select the state of each beast using JSX
// this is the data that changes based on user input (on click)
//