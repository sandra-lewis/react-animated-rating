import React, { FC, ReactNode, useEffect, useState } from 'react';
import classnames from 'classnames';
import Icon from './icon';
import './rating.css';

interface RatingCommonProps {
  animation?: boolean;
  count?: number;
  disabled?: boolean;
  filled?: number;
  initialBounce?: boolean;
  wrapperClassName?: string;
  onChange?: (value: number) => void;
}

interface StarSizeProps {
  size?: string;
  icon?: never;
}

interface RatingIconProps {
  icon?: ReactNode;
  size?: never;
}

type StarDimensionOrIconProps = StarSizeProps | RatingIconProps;

type RatingProps = RatingCommonProps & StarDimensionOrIconProps;

const Rating: FC<RatingProps> = ({
  animation,
  disabled,
  icon,
  initialBounce,
  size,
  onChange,
  count = 5,
  filled = 0,
  wrapperClassName = '',
}) => {
  const [value, setValue] = useState<number>(filled <= count ? filled : count);

  useEffect(() => {
    setValue(filled);
  }, [filled]);

  const handleChange = (index: number) => {
    setValue(index);

    if (onChange) {
      onChange(index);
    }
  };

  return (
    <div className={classnames('react-animated-rating', { [wrapperClassName]: wrapperClassName })}>
      {Array.from({ length: count }, (_, index: number) => (
        <Icon
          key={index}
          index={index}
          value={value}
          size={size}
          icon={icon}
          initialBounce={initialBounce}
          animation={animation}
          disabled={disabled}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default Rating;
