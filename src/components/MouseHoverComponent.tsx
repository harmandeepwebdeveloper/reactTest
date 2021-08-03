import React, { useRef } from 'react';
import propTypes from 'prop-types';
import './MouseHoverComponent.css';
import withHoverHOC from './withHoverHOC';
import useHover from '../customHook/useHover';

function MouseHoverComponent(props: any) {
    const hoverRef = useRef(null);
    const colorOnHover = useHover(hoverRef);
    const { ...allProps } = props;
    return (
        <div className="parentDiv">
            <div className="childDiv">
                <h2 ref={hoverRef} {...allProps} style={{ color: colorOnHover}}>Mouse {props.displaytext}</h2>
            </div>
        </div>
    )
}

MouseHoverComponent.propTypes = {
    props: propTypes.object,
}
export default withHoverHOC(MouseHoverComponent);