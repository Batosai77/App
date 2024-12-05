import React from 'react'

const page = () => {
  return (
    <>
      <aside>
        <div className='sidebar w-[15%] bg-secondary h-screen fixed box-border'>
          <a className='bg-primary/10 rounded-lg hover:bg-primary/75 m-2 block md:inline' href="">Menu</a>
          <a className='bg-primary/10 rounded-lg hover:bg-primary/75 m-2 block md:inline' href="">Dashboard</a>
        </div>
      </aside>
      <div className="topbar h-[7%] w-full bg-primary">
        <div className="profile">Profile</div>
      </div>
    </>
  )
}

export default page