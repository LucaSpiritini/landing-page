import React from 'react'
import BtnNav from "./BtnNav"
import Box from '@mui/material/Box'

const pages = [
  { title: "Home", arrow: false, link: "/" },
  { title: "Services", arrow: true, link: "/services" },
  { title: "Blog", arrow: false, link: "/blog" },
  { title: "Contact", arrow: false, link: "/contact" },
]


const Navbar = () => {
  return (
    <Box 
      sx={{ flexGrow: 1, display: { lg: "flex" }, justifyContent: "flex-end" }}
    >
      { 
        pages.map((page, index) => (
          <BtnNav page={page} key={index} />
        ))
      }
    </Box>
  )
}

export default Navbar

