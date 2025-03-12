'use client'
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

// Create context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
}

export function ThemeProvider({
  children,
  defaultTheme = 'light'
}: ThemeProviderProps) {
  // Initialize with null to prevent hydration mismatch
  const [theme, setThemeState] = useState<Theme | null>(null)

  // Initialize theme on the client side only
  useEffect(() => {
    // Get the theme from localStorage or use the default
    const savedTheme = localStorage.getItem('theme') as Theme
    const initialTheme = savedTheme || defaultTheme

    // Set theme in state and on HTML element
    setThemeState(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [defaultTheme])

  // Update document and localStorage when theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  // Toggle between light and dark
  const toggleTheme = () => {
    setThemeState(prevTheme => {
      if (!prevTheme) return 'light'
      return prevTheme === 'light' ? 'dark' : 'light'
    })
  }

  // Explicitly set theme
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Only provide context if theme has been initialized
  if (theme === null) {
    return null // or a loading spinner/skeleton
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}