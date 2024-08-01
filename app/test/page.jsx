// app/components/ThemeSwitcher.tsx
"use client";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
const page = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="text-white">
      The current theme is: {theme}
      <button className="bg-blue-500"onClick={() => setTheme('light')}>Light Mode</button>
      <button  className="bg-blue-500" onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default page
