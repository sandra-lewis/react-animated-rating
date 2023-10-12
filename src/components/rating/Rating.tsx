import React, { FC, ReactNode, useState } from 'react'
import classnames from 'classnames'
import Icon from './icon'
import './rating.css'

interface RatingCommonProps {
  animation?: boolean
  count?: number
  filled?: number
  wrapperClassName?: string
  onChange?: (value: number) => void
}

interface StarSizeProps {
  size?: string
  icon?: never
}

interface RatingIconProps {
  icon?: ReactNode
  size?: never
}

type StarDimensionOrIconProps = StarSizeProps | RatingIconProps

type RatingProps = RatingCommonProps & StarDimensionOrIconProps

const Rating: FC<RatingProps> = ({ animation, icon, size, onChange, wrapperClassName = '', count = 5, filled = 0 }) => {
  const [value, setValue] = useState<number>(filled <= count ? filled : count)

  const handleChange = (index: number) => {
    setValue(index)

    if (onChange) onChange(index)
  }

  return (
    <div className={classnames('react-animated-rating', { [wrapperClassName]: wrapperClassName })}>
      {[...Array(count)].map((_, index: number) => (
        <Icon
          key={index}
          index={index}
          value={value}
          size={size}
          icon={icon}
          animation={animation}
          onChange={handleChange}
        />
      ))}
    </div>
  )
}

export default Rating
