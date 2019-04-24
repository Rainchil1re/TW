import React from 'react';
import Header from '../Header';
import Nav from '../Nav';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Header />
        <Nav
          pathName={this.props.pathname}
        />
      </div>
    )
  }
}
export default Layout;
