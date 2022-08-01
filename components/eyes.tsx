import { useTheme } from 'next-themes'

const darkRight =
  'M353.207 113.613c18.415-1.78 31.656-20.698 29.573-42.256-2.082-21.558-18.699-37.591-37.115-35.812-18.416 1.78-31.657 20.698-29.574 42.255 2.083 21.558 18.7 37.592 37.116 35.813z'
const lightRight =
  'M361.706 111.769c2.747-.919-.596-18.314-7.467-38.854-6.87-20.54-14.666-36.445-17.413-35.527-2.747.92.596 18.315 7.466 38.854 6.871 20.54 14.667 36.446 17.414 35.527z'
const darkLeft =
  'M97.633 113.613c-18.416-1.78-31.657-20.698-29.574-42.256 2.083-21.558 18.7-37.591 37.116-35.812 18.415 1.78 31.656 20.698 29.573 42.255-2.082 21.558-18.699 37.592-37.115 35.813z'
const lightLeft =
  'M89.464 111.769c-2.747-.919.596-18.314 7.466-38.854 6.871-20.54 14.667-36.445 17.414-35.527 2.746.92-.597 18.315-7.467 38.854-6.87 20.54-14.666 36.446-17.413 35.527z'

function Eyes2() {
  const { resolvedTheme, setTheme } = useTheme()
  const handleOnClick = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="450"
      height="150"
      fill="none"
      viewBox="0 0 450 150"
    >
      <g id="Eyes">
        <g
          id="Right Eye Group"
          className="cursor-pointer"
          onClick={handleOnClick}
        >
          <path
            id="Right Eye"
            fill="url(#paint0_radial_2_2)"
            stroke="#000"
            strokeWidth="0.2"
            d="M295.674 77.319c3.9-14.718 14.107-32.934 33.007-42.22 18.9-9.287 55.74-12.21 67.95 0s8.64 41.02 3.104 54.78c-5.537 13.762-23.037 25.514-35.793 30.952-12.756 5.437-54.599 1.546-66.842-2.591-12.243-4.137-5.328-26.202-1.428-40.92l.002-.001z"
          ></path>
          <path
            id="Right Iris"
            fill="#090909"
            d={resolvedTheme === 'dark' ? darkRight : lightRight}
            style={{ transition: 'd 200ms ease' }}
          ></path>
          <path
            id="Right Reflection Big"
            fill="#fff"
            d="M379.912 61.962c6.008-1.74 9.366-8.373 7.5-14.815-1.865-6.441-8.248-10.253-14.256-8.513-6.008 1.74-9.365 8.373-7.5 14.815 1.866 6.441 8.249 10.253 14.256 8.513z"
          ></path>
          <path
            id="Right Reflection Small"
            fill="#fff"
            d="M327.196 107.202c1.656-1.108-.285-6.914-4.335-12.968s-8.676-10.063-10.332-8.956c-1.656 1.108.285 6.914 4.335 12.968 4.051 6.054 8.677 10.064 10.332 8.956z"
          ></path>
        </g>
        <g
          id="Left Eye Group"
          className="cursor-pointer"
          onClick={handleOnClick}
        >
          <path
            id="Left Eye"
            fill="url(#paint1_radial_2_2)"
            stroke="#000"
            strokeWidth="0.2"
            d="M155.665 77.319c-3.9-14.718-14.107-32.934-33.007-42.22-18.9-9.287-55.74-12.21-67.95 0s-8.64 41.02-3.104 54.78c5.537 13.762 23.037 25.514 35.793 30.952 12.756 5.437 54.599 1.546 66.842-2.591 12.243-4.137 5.328-26.202 1.428-40.92l-.002-.001z"
          ></path>
          <path
            id="Left Iris"
            fill="#090909"
            d={resolvedTheme === 'dark' ? darkLeft : lightLeft}
            style={{ transition: 'd 200ms ease' }}
          ></path>
          <path
            id="Left Reflection Big"
            fill="#fff"
            d="M71.427 61.962c-6.008-1.74-9.366-8.373-7.5-14.815 1.866-6.441 8.248-10.253 14.256-8.513 6.008 1.74 9.366 8.373 7.5 14.815-1.866 6.441-8.248 10.253-14.256 8.513z"
          ></path>
          <path
            id="Left Reflection Small"
            fill="#fff"
            d="M124.143 107.202c-1.656-1.108.285-6.914 4.335-12.968 4.051-6.054 8.676-10.063 10.332-8.956 1.656 1.108-.285 6.914-4.335 12.968s-8.676 10.064-10.332 8.956z"
          ></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_2_2"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(346.92 75.252) scale(57.9193)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#731DDC"></stop>
          <stop offset="0.43" stopColor="#944AD6"></stop>
          <stop offset="0.65" stopColor="#B255D8"></stop>
          <stop offset="1" stopColor="#DDA3D6"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_2_2"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(180 52.21 37.626) scale(57.9193)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#731DDC"></stop>
          <stop offset="0.43" stopColor="#944AD6"></stop>
          <stop offset="0.65" stopColor="#B255D8"></stop>
          <stop offset="1" stopColor="#DDA3D6"></stop>
        </radialGradient>
      </defs>
    </svg>
  )
}

export default Eyes2
