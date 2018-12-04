import React, {Component} from 'react';
import categories from '../../shared/categories';
// CSS
import classes from './Landing.module.css';
// Images
import placeholderHeader from '../../assets/images/placeholder-header.jpg'
// SVG
import SVG from '../../components/SVG/SVG';
// JSX
import HeaderImage from '../../components/UI/HeaderImage/HeaderImage';
import Button from '../../components/UI/Button/Button';
import Carousel from '../../components/UI/Carousel/Carousel';
import SearchBox from '../../components/UI/SearchBox/SearchBox';
import Banner from '../../components/UI/Banner/Banner';
import CardContainer from '../../components/Landing/CardContainer/CardContainer';
import Card from '../../components/Landing/Card/Card';

class Landing extends Component {

    render() {
        // Array that holds the JSX option elements containing the category titles for a datalist
        const categoriesDatalist = categories.map( (category, index) => {
            return <option value={category.title} key={index} />
        });
        // Array that holds the JSX list elements containing the category titles for an unordered list
        const categoriesList = categories.map( (category) => {
            return (
                <li className={classes.Category} key={category.title}>
                    <a href="/">
                        {/* Category.icon pointer protection */}
                        {category.icon ? <category.icon /> : null}{category.title}&nbsp;<SVG svg='right-arrow' />
                    </a>
                </li>
            );
        });
        return (
            <>
                {/* Header */}
                <div className={classes.Header}>
                    <ul className={classes.Background}>
                        <HeaderImage src={placeholderHeader} />
                    </ul>
                    {/* Header Content */}
                    <div className={classes.HeaderContent}>
                        <SearchBox categoriesDatalist={categoriesDatalist} />
                        {/* TODO Get custom logo */}
                        <h1>Servify</h1>
                    </div>
                </div>
                <Banner />
                {/* Page Content */}
                {/* TODO: Show a new search-bar, Fixed top  */}
                <div className={classes.Container}>
                    <h1>Top Categories</h1>
                    {/* TODO category images */}
                    <CardContainer>
                        {/* PLACEHOLDER Categories */}
                        <Card title='Home Services' image='https://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?aki_policy=large'/>
                        <Card title='Plumbing' image='https://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?aki_policy=large'/>
                        <Card title='Beauty' image='https://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?aki_policy=large'/>
                    </CardContainer>
                    <br />
                    <h1>Top-rated services near you</h1>
                    <div>
                        <Carousel>
                            <div style={{background: 'darkorange', textAlign: 'center', padding: 50, color: 'white'}}>Dummy</div>
                            <div style={{background: 'darkorange', textAlign: 'center', padding: 50, color: 'white'}}>Carousel</div>
                            <div style={{background: 'darkorange', textAlign: 'center', padding: 50, color: 'white'}}>Item</div>
                            <div style={{background: 'darkorange', textAlign: 'center', padding: 50, color: 'white'}}>Item</div>
                            <div style={{background: 'darkorange', textAlign: 'center', padding: 50, color: 'white'}}>Item</div>
                            <div style={{background: 'darkorange', textAlign: 'center', padding: 50, color: 'white'}}>Item</div>
                        </Carousel>
                    </div>
                    <br />
                    <h1>All Categories</h1>
                    <ul className={classes.Categories}>
                        {categoriesList}
                    </ul>
                </div>
                
            </>
        );
    }
}

export default Landing;