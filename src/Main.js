// STEP 1 - IMPORTS
import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from './data/data.json';
import './Main.css';

// STEP 2 - CREATE CLASS
class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((horns, index) => {
          return <HornedBeasts title={horns.title} imageUrl= {horns.imageUrl} description={horns.description} key={index}/>
        })}
      </main>
    )
  }
}

// STEP 3 - EXPORT CLASS
export default Main;