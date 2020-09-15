import React, { Children } from 'react';

export function childrenWithProps(props) {
    return Children.map(props.children, (child) => {
        return React.cloneElement(child, { ...props, ...child.props });
   })
}