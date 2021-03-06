import React from 'react';
// CSS
import classes from './InputSelect.module.css';

const inputSelect = (props) => {
    return (
        <div className={classes.Wrapper}>
            <form className={classes.Container} action={props.action} method="GET">
                <select className={classes.InputSelect} 
                    onChange={(e) => props.onChange(e)} 
                    value={props.value}  
                    required>
                    <option value='distance'>Distance</option>
                    <option value='popularity'>Popularity</option>
                    <option value='priceRating'>Price Rating</option>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                </select>
                <div className={classes.ArrowWrapper}>
                    <div className={classes.ArrowContainer}>
                        <span className={classes.Arrow} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default inputSelect;