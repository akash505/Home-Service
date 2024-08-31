import React from 'react'
import CategorySideBar from './_components/categorySideBar'

function layout({children}) {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-4  mt-8'>
            <div className=' hidden md:block'>
                {/*side Category Nav bar*/}
                <CategorySideBar/>
            </div>
            <div className='md:col-span-3'>
            {children}
            </div>

        </div>        
        </div>
  )
}

export default layout