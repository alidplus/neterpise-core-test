import { IconSvgProps } from './type'

const AddGroupIcon = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}: IconSvgProps) => {
  return (
    <svg
      data-name="Iconly/Curved/Profile"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      {...props}
    >
      <path
        d="M2 20h1v1H1v-2h1zm20 0h-1v1h2v-2h-1zM1 5h1V4h1V3H1zm1 2H1v2h1zm0 4H1v2h1zm20-2h1V7h-1zm0 4h1v-2h-1zM2 15H1v2h1zm20 2h1v-2h-1zM5 4h2V3H5zm6 0V3H9v1zm2 0h2V3h-2zm6-1h-2v1h2zM5 21h2v-1H5zm4 0h2v-1H9zm4 0h2v-1h-2zm4 0h2v-1h-2zm4-17h1v1h1V3h-2zm-1 4v2a1.001 1.001 0 0 1-1 1H5a1.001 1.001 0 0 1-1-1V8a1.001 1.001 0 0 1 1-1h14a1.001 1.001 0 0 1 1 1zm-.999 2H19V8H5v2h14m1 4v2a1.001 1.001 0 0 1-1 1H5a1.001 1.001 0 0 1-1-1v-2a1.001 1.001 0 0 1 1-1h14a1.001 1.001 0 0 1 1 1zm-.999 2H19v-2H5v2h14"
        fill={fill}
      />
    </svg>
  )
}

export default AddGroupIcon
