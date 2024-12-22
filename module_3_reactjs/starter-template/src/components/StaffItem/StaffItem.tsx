import { useParams } from 'react-router-dom'

export default function StaffItem() {
  const params = useParams()
  console.log('testing', params)
  return <div>StaffItem {params.id}</div>
}
