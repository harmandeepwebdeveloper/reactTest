import { RefObject, useEffect, useState } from 'react'
import propTypes from 'prop-types';
function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
): string {
  const [color, setColor] = useState<string>('green')

  const [handleMouse] = useState({
    handleMouseEnter: () => setColor('red'),
    handleMouseLeave: () => setColor('green')
  });

  useEffect(() => {
    const node = elementRef?.current

    if (node) {
      node.addEventListener('mouseenter', handleMouse.handleMouseEnter)
      node.addEventListener('mouseleave', handleMouse.handleMouseLeave)

      return () => {
        node.removeEventListener('mouseenter', handleMouse.handleMouseEnter)
        node.removeEventListener('mouseleave', handleMouse.handleMouseLeave)
      }
    }
  }, [elementRef, handleMouse]);

  return color
}

useHover.propTypes = {
  WithHover: propTypes.oneOfType([
    propTypes.func, 
    propTypes.shape({ current: propTypes.any })
  ])
}

export default useHover;
