import React from 'react'
import Loading from './ui/Loading'

const LoadingFallback: React.FC = () => {
  return <Loading variant="fullscreen" message="Loading BuildFlow..." />
}

export default LoadingFallback
