//  REBUILD AS A CLASS COMPONENT

// STEP 1 - IMPORTS
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

// STEP 2 - CREATE THE CLASS -- will always have a render method
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

  handleSelect = ((event) => {
    let selected = event.target.value;

    if (selected === '1') {
      let newData = data.filter(e => e.horns === 1);
      this.setState({
        data: newData
      })
    } else if (selected === '2') {
      let newData = data.filter(e => e.horns === 2);
      this.setState({

        data: newData
      })
    } else if (selected === '3') {
      let newData = data.filter(e => e.horns === 3);
      this.setState({

        data: newData
      })
    }
  })

  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select name='select' onChange={this.handleSelect}>
              <option>Filter Menu</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </Form.Select>
          </Form.Group>
        </Form>
        
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

// STEP 3 - EXPORT THE CLASS FOR OTHER FILES TO IMPORT
export default App;

//TODO:
// start here in app
// create a modal (it can live anywhere, but we should store it wherever app is bringing it in)
// app will tell modal when to open and close
// it opens wherever the click event happens (in hornedbeasts)
// since each beast is different, we have to select the state of each beast using JSX
// this is the data that changes based on user input (on click)
//