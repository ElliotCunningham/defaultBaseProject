import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import UsersActionCreators from '../../logic/flux/action/UsersActionCreators';
import UsersStore from '../../logic/flux/store/UsersStore';

const _updateState = () => {
  const users = UsersStore.getAllUsers();
  const currentUser = UsersStore.getCurrentUser();

  return {
    users,
    currentUser
  };
}

const _connectUser = (user) => {
  return UsersActionCreators.connectUser(user);
};

class UsersContainers extends Component {
  constructor(props) {
    super(props);
    this.state = _updateState();
  }

  componentWillMount() {
    UsersActionCreators.fetchAndInitUsers();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return didPropsChanged(nextProps) || didStateChanged(nextState);
  }

  didPropsChanged(nextProps) {
    return this.props !== nextProps;
  }

  didStateChanged(nextState) {
    return this.state.users !== nextState.users
      || this.state.currentUser !== nextState.currentUser;
  }

  handleConnectAction = () => {
    const user = {
      userName: this.refs.userTextFiled.getValue(),
      password: this.refs.passwordTextField.getValue()
    };

    _connectUser(user)
      .then((res) => {
        console.log('result connect', res);
      })
      .catch((err) => {
        console.log('error during connect', res);
      });
  }

  render() {
    return(
      <div style={{ width: '100%', heigth: '100%', marginTop: "25%" }} className="UsersContainers">
        <Paper zDepth={5} style={{ width: "50%", heigth: "30%", marginLeft: "25%", margin: "auto" }}>
          <TextField hintText="Nom d'utilisateur" ref="userTextFiled" style={{ marginLeft: "5%", width: "90%" }}/>
          <br/>
          <TextField hintText="Mot de passe" ref="passwordTextField" type="password" style={{ marginLeft: "5%", width: "90%" }}/>
          <br/>
          <RaisedButton label="Connexion" style={{ marginTop: "4%" }} fullWidth={true} onTouchTap={this.handleConnectAction}/>
        </Paper>
      </div>
    );
  }

}

export default UsersContainers;