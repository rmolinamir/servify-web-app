import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
// CSS
import classes from './NavigationItems.module.css';
// JSX
import NavigationItem from './NagivationItem/NagivationItem';
import ButtonFilled from '../../UI/ButtonFilled/ButtonFilled';
import NavAuthButtons from './NavAuthButtons/NavAuthButtons'
import Separator from './Separator/Separator';
// Logo
import servifyLogo from '../../../assets/images/servify-logo-96x96.png';
import SearchBar from '../SearchBar/SearchBar';

const renderNavigationItems = (props) => {
	switch (props.navbarType) {
		case 'LandingNavbar':
			return (
				<>
					{props.width < 1121 ? 
						null : 
						<>
							<div className={classes.Spacing} />
							<Separator />
							<NavigationItem {...props} link="/publish/overview" color="white">
								Publish
							</NavigationItem>
							<NavigationItem {...props} link="/services" color="white">
								Services
							</NavigationItem>
							<NavigationItem {...props} link="/help" color="white">
								Help
							</NavigationItem>
							<Separator />
							<NavAuthButtons {...props} color="white"/>
						</>
					}
				</>
			);
		case 'PublishNavbar':
			return (
				<>
					<div className={classes.SpacingSmall} />
					{props.width < 1121 ? 
						null : 
						<>
							<NavigationItem {...props} link="/">
								Home
							</NavigationItem>
							<NavigationItem {...props} link="/services">
								Services
							</NavigationItem>
							<NavigationItem {...props} link="/help">
								Help
							</NavigationItem>
							<NavAuthButtons {...props} />
						</>
					}
					<div className={classes.Spacing} />
					<div className={classes.Navtext}>Ready to grow?</div>
					<NavLink to="/publish">
						<ButtonFilled style={{ width: 'auto' }} type="primary">
							Get started
						</ButtonFilled>
					</NavLink>
					{props.width < 1121 ? 
						null : 
						<div className={classes.SpacingSmall}/>
					}
				</>
			);
		case 'SearchNavbar':
			return (
				<>
					<SearchBar />
					{props.width < 1121 ? 
						null : 
						<>
							<div className={classes.Spacing} />
							<NavigationItem className={props.className} {...props} link="/publish/overview" >
								Publish
							</NavigationItem>
							<NavigationItem className={props.className} {...props} link="/help" >
								Help
							</NavigationItem>
							<NavAuthButtons {...props} /> 
						</>
					}
				</>
			);
		
		case 'SupportNavbar':
			return (
				<>
					<SearchBar />
					{props.width < 1121 ? 
						null : 
						<>
							<div className={classes.Spacing} />
							<NavigationItem className={props.className} {...props} link="/" color="white" >
								Home
							</NavigationItem>
							<NavAuthButtons {...props} color="white" /> 
						</>
					}
				</>
			);
		case 'MobileDrawer':
			return (
				<>
					<div className={classes.MobileLogo}>
						<img src={servifyLogo} draggable='false' alt='' />
					</div>
					<NavLink onClick={props.onClick} className={classes.MobileHomeLink} to ="/">
						Home
					</NavLink>
					<Separator />
					<NavigationItem {...props} link="/publish/overview" color="white">
						Publishing a service
					</NavigationItem>
					<NavigationItem {...props} link="/services" color="white">
						Services
					</NavigationItem>
					<NavigationItem {...props} link="/help" color="white">
						Help
					</NavigationItem>
					<Separator />
					<NavAuthButtons {...props} color="white"/>
				</>
			);
		default:
			return (
				<>
					<div className={classes.Spacing} />
					<NavigationItem {...props} link="/publish/overview" color="white">
						Publish
					</NavigationItem>
					<NavigationItem {...props} link="/services" color="white">
						Services
					</NavigationItem>
					<NavigationItem {...props} link="/help" color="white">
						Help
					</NavigationItem>
					<NavAuthButtons {...props} color="white"/>
				</>
			);
	}
};
const nagivationItems = (props) => {
	return (
		<>
			<ul className={classes.NavigationItems}>
				<div className={classes.SpacingSmall} />
				<NavLink className={[classes.NavbarLogo, classes.DesktopOnly].join(' ')} to ="/">
					<img src={servifyLogo} draggable='false' alt='' />
				</NavLink>
				{renderNavigationItems(props)}
			</ul>
		</>
	);
};

export default withRouter(nagivationItems);
