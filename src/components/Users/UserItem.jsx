import React from 'react'
import { Link } from 'react-router-dom' 

function UserItem({ user: { login, avatar_url } }) {
  return (
      <div className=' card shadow-md compact side bg-base-200 '>
          <div className="flex-row items-center space-x-4 card-body">
              <div>
                  <div className="avatar">
                      <div className="rounded-full shadow w-14 h-14 ">
                          <img src={avatar_url } alt="Profile"/>
                      </div>
                  </div>
              </div>
              <div>
                  <h2 className="card-title">{login}</h2>
                  <Link to={`/user/${login}`} className="text-opacity-50 text-teal-200">Visit Profile</Link>
              </div>
          </div>
         
      </div>
  )
} 

export default UserItem 