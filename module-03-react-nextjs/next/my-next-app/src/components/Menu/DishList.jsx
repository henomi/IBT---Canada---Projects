import React from 'react'
import DishCard from './DishCard'
import fs from 'fs'
import path from 'path'

  async function getMenuData() {
  const filePath = path.join(process.cwd(), 'src/data/Dishes.json')
  const data = JSON.parse(fs.readFileSync(filePath))
  return data
}


async function DishList() {
const data = await getMenuData()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
      {data.map((menu) => (
        <DishCard key={menu.id} {...menu} />
      ))}
    </div>
  )
}

export default DishList;