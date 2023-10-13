import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import IconStar from './iconStar';
import './icon.css';

interface IconProps {
  index: number;
  value: number;
  onChange?: (value: number) => void;
  animation?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  initialBounce?: boolean;
  size?: string;
}

const Icon: FC<IconProps> = ({
  index,
  value,
  icon,
  size,
  onChange,
  animation = true,
  disabled = false,
  initialBounce = disabled ? false : true,
}) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [isBounceEnabled, setIsBounceEnabled] = useState<boolean>(
    !initialBounce ? value > index && isAnimated && animation : value > index && animation,
  );
  const animationTimerRef = useRef<number>(0);

  useEffect(() => {
    // Clear the pending timer on unmount
    return () => window.clearTimeout(animationTimerRef.current);
  }, []);

  useEffect(() => {
    if (!initialBounce) {
      setIsBounceEnabled(value > index && isAnimated && animation);
    } else {
      setIsBounceEnabled(value > index && animation);
    }
  }, [initialBounce, animation, index, isAnimated, value]);

  const handleClick = () => {
    setIsAnimated(true); // Start pulse animation

    window.clearTimeout(animationTimerRef.current);
    animationTimerRef.current = window.setTimeout(() => {
      setIsAnimated(false); // Stop pulse animation after 1s
    }, 1000);

    if (onChange) {
      if (value === 1 && index === 0) {
        onChange(index);
      } else {
        onChange(index + 1);
      }
    }
  };

  return (
    <div className='react-animated-rating-wrapper'>
      <button
        type='button'
        disabled={disabled}
        className={classnames('react-animated-rating-icon', {
          'react-animated-rating-icon-disabled': disabled,
          'react-animated-rating-icon-filled': value > index,
          'react-animated-rating-icon-bounce': isBounceEnabled,
          'react-animated-rating-icon-confetti': isAnimated && animation,
        })}
        onClick={handleClick}
        tabIndex={0}
        aria-label={`Icon ${index + 1}`}
      >
        {!icon ? <IconStar size={size} /> : icon}
      </button>
      {isAnimated && animation && (
        <div className='react-animated-rating-pulse' onClick={handleClick}>
          {!icon ? <IconStar size={size} /> : icon}
        </div>
      )}
    </div>
  );
};

export default Icon;
