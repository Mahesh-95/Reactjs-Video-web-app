import React from 'react'
import { Stack } from '@mui/material'
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction='row'  sx={{
      overflowY: "scroll",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      mt: '0.2rem'
    }}
    className="sidebar"
    >
      {categories?.map((catergory, i) =>(
        <button key={i} className="category-btn" onClick={()=>setSelectedCategory(catergory.name)}>
          <span className="category-icon">{catergory.icon}</span>
          <span className="category-name">{catergory.name}</span>
        </button>
        ))}
    </Stack>
  )
}

export default Sidebar