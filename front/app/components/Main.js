import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ObjectAssign from 'object-assign';

class Home extends Component {

  static propTypes = {route: PropTypes.object.isRequired}
  static displayName = 'Main App'
  static contextTypes = {router: PropTypes.object.isRequired}

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.router = this.context.router;
  }


  navigateTo(somewhere) {
    this.router.push(somewhere);
  }


  render() {
    const mergedProps = ObjectAssign({}, this.props)
    return (
      <MuiThemeProvider>
        <div className="main">
          { React.cloneElement(this.props.children, {...mergedProps}) }
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Home;
