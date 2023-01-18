import React, { FC } from 'react'

interface IconStarProps {
  size?: string
}

const IconStar: FC<IconStarProps> = ({ size = '1.5em' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fontSize={size} width='1em' height='1em' viewBox='0 0 14 12'>
      <path
        fill='none'
        d='M6.86 0c-.327 0-.625.195-.837.571L4.628 3.714h-2.79c-.34.001-.646.21-.838.572-.066.277.006.645.28.857l2.232 2.286-.838 3.428c-.057.448.082.8.28.857.224.235.387.286.558.286.164 0 .328-.051.558-.286l2.79-2 2.791 2c.221.235.386.287.558.286.153 0 .306-.045.558 0 .163-.31.315-.642.28-.857l-.559-3.714 2.233-2.286c.273-.212.345-.58.279-.857-.192-.362-.497-.57-.837-.572h-3.07L7.698.571C7.485.195 7.188.001 6.86 0z'
      />
    </svg>
  )
}

export default IconStar
