import React from 'react';
import Element from '../element/element.component';
import LIVING_BEINGS_DATA from '../data/living-beings.data';
import './elements.styles.scss';

class Elements extends React.Component {
    constructor(){
        super();
        this.state = { living_beings : LIVING_BEINGS_DATA };
    }

    render() {
        return (
            <div className='elements'>
                { this.state.living_beings.map(( { id, ...otherLivingBeings } ) => (
                    <Element key={id} {...otherLivingBeings} />
                ))}
            </div>
        );
    }
}

export default Elements;