import { Card, Spin, Typography } from 'antd'
import Item from 'antd/es/list/Item'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const sum = () => {
    console.log('re-render')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/recipes?limit=${5}&skip=${1}&select=name,image`)
        if (response.status === 200) {
          setData(response.data.recipes)
        }
      } catch (error: any) {
        return new Error(error)
      }
    }

    fetchData()
  }, []) ///update nếu giá trị đổi thì gọi lại function bên trong use Effect

  sum()
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>click me</button>
      <div className='flex flex-wrap'>
        {data.length > 0 ? (
          data.map((recipe: any) => (
            <Card hoverable style={{ width: 240 }} cover={<img alt='example' src={recipe.image} />}>
              <Typography>{recipe.name}</Typography>
            </Card>
          ))
        ) : (
          <Spin />
        )}
      </div>
    </div>
  )
}
// will mount => didmount =>will update=> didupdate=> unmount

// life cycle tỏng class component là khởi tạo trong constructor => will mount => render=> didmount [update (will, render, didupdate)]=> unmount
// life cycle trong function component được thể hiện thông qua hook useEffect
