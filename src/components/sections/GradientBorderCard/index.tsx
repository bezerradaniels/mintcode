import React from 'react'

interface GradientBorderCardProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export default function GradientBorderCard({ 
  children, 
  className = '', 
  innerClassName = ''
}: GradientBorderCardProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{
        borderRadius: '22px',
        padding: '3px',
        background: 'conic-gradient(from 220deg, #3B82F6 0deg, #22D3EE 70deg, #A3E635 140deg, #22C55E 210deg, #2DD4BF 280deg, #60A5FA 330deg, #3B82F6 360deg)'
      }}
    >
      <div 
        style={{
          borderRadius: '19px',
          backgroundColor: 'white',
          boxShadow: '0 10px 30px rgba(16,24,40,0.08)'
        }}
        className={innerClassName}
      >
        {children}
      </div>
    </div>
  )
}
