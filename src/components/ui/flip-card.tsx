"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type FlipDirection = "horizontal" | "vertical"

interface FlipCardContext {
  flipped: boolean
  setFlipped: React.Dispatch<React.SetStateAction<boolean>>
  direction: FlipDirection
}

const FlipCardContext = React.createContext<FlipCardContext | null>(null)

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  flipDirection?: FlipDirection
}

export function FlipCard({
  children,
  className,
  flipDirection = "horizontal",
  ...props
}: FlipCardProps) {
  const [flipped, setFlipped] = React.useState(false)

  return (
    <FlipCardContext.Provider value={{ flipped, setFlipped, direction: flipDirection }}>
      <div
        className={cn(
          "group/card relative w-full h-full [perspective:1000px] cursor-pointer",
          className
        )}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onTouchStart={() => setFlipped(!flipped)}
        {...props}
      >
        <div 
          className={cn(
            "relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d]",
            flipDirection === "horizontal" 
              ? flipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
              : flipped ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"
          )}
          style={{ 
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        >
          {children}
        </div>
      </div>
    </FlipCardContext.Provider>
  )
}

export function FlipCardFront({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(FlipCardContext)

  if (!context) {
    throw new Error("FlipCardFront must be used within a FlipCard")
  }

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full [backface-visibility:hidden] [transform-style:preserve-3d]",
        className
      )}
      style={{ 
        backfaceVisibility: 'hidden', 
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
}

export function FlipCardBack({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const context = React.useContext(FlipCardContext)

  if (!context) {
    throw new Error("FlipCardBack must be used within a FlipCard")
  }

  const { direction } = context

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full [backface-visibility:hidden] [transform-style:preserve-3d]",
        direction === "horizontal" ? "[transform:rotateY(180deg)]" : "[transform:rotateX(180deg)]",
        className
      )}
      style={{ 
        backfaceVisibility: 'hidden', 
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  )
} 