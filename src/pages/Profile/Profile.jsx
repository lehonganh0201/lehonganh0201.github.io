import React from 'react'
import PostsTable from '../../components/PostsTable/PostsTable'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const nav = useNavigate();
  return (
    <div style={{display:'flex',height:'100vh',width:'100vw'}}>
      <div style={{backgroundColor:'#d9d9d9',width:'15%'}}>
        <div className="logo" style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',marginTop:'20px'}}>
            <div className="rec1"></div>
            <div className="rec2"></div>
        </div>
        <div style={{padding:'12px 20px',display:'flex',flexDirection:'column',fontSize:'20px'}}>
          <button onClick={() => nav("/")} style={{outline:'0',border:'0',backgroundColor:'#d9d9d9'}}>Posts</button>
          <button onClick={() =>{
            localStorage.clear();
            nav("/");
          }} style={{outline:'0',border:'0',backgroundColor:'#d9d9d9'}}>Logout</button>
        </div>
      </div>
      <div style={{flex:'1'}}>
        <PostsTable/>
      </div>
    </div>
  )
}

export default Profile
