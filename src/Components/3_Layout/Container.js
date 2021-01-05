import React, { forwardRef } from "react"
import { Box } from "../"
import { useTheme } from "emotion-theming"

export const Container = forwardRef(({ children, maxWidth, ...props }, ref) => {
  const { containerPoints } = useTheme()
  return (
    <Box
      ref={ref}
      maxWidth={{ ...containerPoints, ...maxWidth }}
      width="100%"
      textAlign='left'
      mx="auto"
      px="1rem"
      {...props}
    >
      {children}
    </Box>
  )
})
