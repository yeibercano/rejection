import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Signin } from '../features/auth/signin';
import { CurrentUser } from '../features/auth/currentUser';
import { getUser } from '../features/auth/auth_reducer';

class Header extends Component {
  render() {
    const { state } = this.props;
    const currentUser = getUser(state.userReducer);

    return (
      <div className="brandingColor">
        <header className="centerContainer flexHorizontalBetween">
          <ul>
            <li>
              <a className="brand" href="#">
                Rejection
              </a>
            </li>
          </ul>
          {!currentUser && <Signin />}
          {currentUser && <CurrentUser user={currentUser} />}
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  state: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, null)(Header);
