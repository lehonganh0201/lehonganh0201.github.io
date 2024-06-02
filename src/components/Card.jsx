import React from 'react'
import './Card.scss'
const Card = () => {
  return (
    <div className="card-container">
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOkovCW2aAvYuF6tEJdo0Kue319MmHawVgRy0UBKmBbYAf6wyo"
        alt="Profile"
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Bất ngờ chưa :D</h5>
        <p className="card-text">Địa chỉ: Số 123, Đường ABC, Thành phố XYZ</p>
        <p className="card-text">Email: your.email@example.com</p>
        <p className="card-text">Điện thoại: 0123-456-789</p>
      </div>
    </div>
  )
}

export default Card
