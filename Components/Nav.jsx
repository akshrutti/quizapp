import React from 'react'
function Nav({ user, usericon }) {
  return (
    <>
      <header className="p-3 mb-3 border-bottom fixed-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className=" me-auto brand">
              GK QUIZ
            </a>

            <div className="">
              <div className="d-flex align-items-center">
                <img src={usericon} alt="mdo" width="32" height="32" className="rounded-circle" />
                <h6 className="mx-2 my-0">Welcome:<b className='text-primary mx-'>{user}</b></h6>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav