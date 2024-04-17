import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className='border botttom'>

            <div className=' d-flex justify-content-center  justify-content-around'>
     

            <div>
                    <Link to='/' >
                      
                        <h2>

                            Crousel
                        </h2>
                    </Link>
                </div>

                <div>

                    <Link to='/Sliderss' >
                        <h2>

                            Sliderss
                        </h2>
                    </Link>
                </div>

               
            </div>
        </div>
    )
}

export default Nav