import React, { useState } from 'react';
import propTypes from 'prop-types';

const withHoverHOC = (
    WrappedComponent: any,
  ): any  => {
    const WithHover = (): any => {
        const [handleDisplayText, setHandleDisplayText] = useState<string>('Out');
        return <WrappedComponent
            displaytext={handleDisplayText}
            onMouseOver={() => setHandleDisplayText('Over')}
            onMouseLeave={() => setHandleDisplayText('Out')} />
    }
    return WithHover;
}

withHoverHOC.propTypes = {
    WrappedComponent: propTypes.node,
}

export default withHoverHOC;