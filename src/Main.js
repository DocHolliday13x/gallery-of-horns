import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeasts title= "Horned Beast One" imageUrl="https://images.unsplash.com/photo-1517035753523-2077b746904d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" description="Little horns, big eyes, cute snoot"/>

      <HornedBeasts title= "Horned Beast Two" imageUrl="https://images.unsplash.com/photo-1603486001734-7d92cedd1d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" description="North American Elk"/>
      </>
    )
  }
}

export default Main;