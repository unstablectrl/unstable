import { useTheme } from 'next-themes'
import React, { useEffect, useRef, useState } from 'react'

const darkLeft = {
  a: 0.09744,
  b: -0.03012,
  c: 0.24273,
  d: 0.7851,
  e: 202.381,
  f: 142.047,
}

const lightLeft = {
  a: 0.67277,
  b: -0.065,
  c: 0.07902,
  d: 0.81796,
  e: 202.381,
  f: 142.047,
}

const lightRight = {
  a: 0.67277,
  b: -0.065,
  c: 0.07902,
  d: 0.81796,
  e: 202.381,
  f: 142.047,
}

const darkRight = {
  a: 0.09744,
  b: -0.03012,
  c: 0.24273,
  d: 0.7851,
  e: 202.381,
  f: 142.047,
}

function Eyes() {
  const { theme } = useTheme()

  useEffect(() => {
    if (leftEye.current) {
      leftEye.current.transform.baseVal
        .getItem(0)
        .setMatrix(theme === 'dark' ? darkLeft : lightLeft)
    }
    if (rightEye.current) {
      rightEye.current.transform.baseVal
        .getItem(0)
        .setMatrix(theme === 'dark' ? darkRight : lightRight)
    }
  }, [theme])

  const leftEye = useRef<SVGEllipseElement>(null)
  const rightEye = useRef<SVGEllipseElement>(null)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 300 300"
    >
      <defs>
        <radialGradient
          id="eNJS53DAXec3-fill"
          cx="0"
          cy="0"
          r="0.5"
          gradientTransform="translate(.5 .5)"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#731ddc"></stop>
          <stop offset="43%" stopColor="#944ad6"></stop>
          <stop offset="65%" stopColor="#b255d8"></stop>
          <stop offset="100%" stopColor="#dda3d6"></stop>
        </radialGradient>
        <radialGradient
          id="eNJS53DAXec8-fill"
          cx="0"
          cy="0"
          r="0.5"
          gradientTransform="translate(.5 .5)"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#731ddc"></stop>
          <stop offset="43%" stopColor="#944ad6"></stop>
          <stop offset="65%" stopColor="#b255d8"></stop>
          <stop offset="100%" stopColor="#dda3d6"></stop>
        </radialGradient>
      </defs>
      <g transform="translate(25.857 9.752)">
        <path
          fill="url(#eNJS53DAXec3-fill)"
          stroke="#3f5787"
          strokeWidth="0.6"
          d="M168.39 141.626c2.6-9.812 9.405-21.956 22.005-28.147s37.16-8.14 45.3 0 5.76 27.347 2.069 36.521-15.358 17.009-23.862 20.634-36.399 1.031-44.561-1.727-3.552-17.468-.952-27.28z"
          transform="translate(-.411)"
        ></path>
        <ellipse
          ref={rightEye}
          fill="#090909"
          strokeWidth="0"
          rx="31.814"
          ry="31.814"
          transform="matrix(.67277 -.065 .07902 .81796 202.381 142.047)"
          // transform="matrix(.09744 -.03012 .24273 .7851 202.381 142.047)"
        ></ellipse>
        <ellipse
          fill="#fff"
          strokeWidth="0"
          rx="31.814"
          ry="31.814"
          transform="matrix(.22795 -.06602 .07079 .24442 221.273 125.78)"
        ></ellipse>
        <ellipse
          fill="#fff"
          strokeWidth="0"
          rx="31.814"
          ry="31.814"
          transform="matrix(.06283 -.04204 .15368 .2297 183.492 156.408)"
        ></ellipse>
      </g>
      <g transform="matrix(-1 0 0 1 274.143 9.752)">
        <path
          fill="url(#eNJS53DAXec8-fill)"
          stroke="#3f5787"
          strokeWidth="0.6"
          d="M168.39 141.626c2.6-9.812 9.405-21.956 22.005-28.147s37.16-8.14 45.3 0 5.76 27.347 2.069 36.521-15.358 17.009-23.862 20.634-36.399 1.031-44.561-1.727-3.552-17.468-.952-27.28z"
          transform="translate(-.411)"
        ></path>
        <ellipse
          ref={leftEye}
          fill="#090909"
          strokeWidth="0"
          rx="31.814"
          ry="31.814"
          transform="matrix(.67277 -.065 .07902 .81796 202.381 142.047)"
          // transform="matrix(.09744 -.03012 .24273 .7851 202.381 142.047)"
        ></ellipse>
        <ellipse
          fill="#fff"
          strokeWidth="0"
          rx="31.814"
          ry="31.814"
          transform="matrix(.22795 -.06602 .07079 .24442 221.273 125.78)"
        ></ellipse>
        <ellipse
          fill="#fff"
          strokeWidth="0"
          rx="31.814"
          ry="31.814"
          transform="matrix(.06283 -.04204 .15368 .2297 183.492 156.408)"
        ></ellipse>
      </g>
    </svg>
  )
}

export default Eyes
