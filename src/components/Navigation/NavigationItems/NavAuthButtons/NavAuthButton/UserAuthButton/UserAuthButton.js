import React, { useState, useEffect, useMemo } from 'react';
// redux-sagas
import { connect } from 'react-redux';
import { authCreator } from '../../../../../../store/actions';
// CSS
import classes from './UserAuthButton.module.css';
// JSX
import { Link } from 'react-router-dom';
import ImageFadeIn from '../../../../../UI/ImageFadeIn/ImageFadeIn';
import SVG from '../../../../../SVG/SVG';

const userButton = (props) => {
  const [bIsListOpen, setIsListOpen] = useState(false)

  const closeList = () => {
    if (bIsListOpen) {
      setTimeout( () => { // To force it out of the main stack and let toggleList take priority allowing toggling
        setIsListOpen(false);
      }, 0);
    }
  }

  const toggleList = () => {
    setIsListOpen(!bIsListOpen);
  }

  const logoutHandler = () => {
    if (props.onClick) {
      props.onClick();
    }
    props.onLogoutHandler();
  }

  useEffect(() => {
    document.body.addEventListener("click", closeList);
    return () => {
      document.body.removeEventListener("click", closeList);
    }
  }, [])

  const list = (
    <ul className={classes.ListWrapper}>
      <Link to="/users/show/">
        <li onClick={props.onClick} className={classes.ListItem}>View Profile</li>
      </Link>
      <Link to="/users/publications">
        <li onClick={props.onClick} className={classes.ListItem}>Check Publications</li>
      </Link>
      <Link to="/users/edit">
        <li onClick={props.onClick} className={classes.ListItem}>Edit Profile</li>
      </Link>
      <Link to="/users/feedback">
        <li onClick={props.onClick} className={classes.ListItem}>Give us some feedback</li>
      </Link>
      <li onClick={logoutHandler} className={classes.ListItem}>Sign out</li>
    </ul>
  );

  const widescreen = (
    <li className={[props.className, classes.Anchor].join(' ')} >
      <button onClick={toggleList}>
        {props.userDetails ? 
          props.userDetails.photoURL ? 
            <div className={classes.User}><ImageFadeIn draggable='false' src={props.userDetails.photoURL} /></div>
            : <SVG svg='user' />
          : <SVG svg='user' />}
      </button>
      {bIsListOpen ? 
        list
        : null}
    </li>
  );

  return (
    /**
     * Only update if there are any changes on the userDetails or bIsListOpen.
     */
    useMemo(() => {
      return (
        !props.width ? // Width is passed as a prop to determine breakpoint, if it's null it means the breakpoint was reached.
          list :
          widescreen
      )
    }, [props.userDetails, bIsListOpen])
  );
}

const mapStateToProps = (state) => {
	return {
    userDetails: state.authReducer.userDetails,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogoutHandler: () => dispatch(authCreator.authLogoutInit()),
	};
};

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(userButton));