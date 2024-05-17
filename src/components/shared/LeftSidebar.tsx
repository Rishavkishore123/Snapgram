import React, { useEffect } from 'react'
import { useUserContext } from '@/context/AuthContext';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations'
import { Link, NavLink,useNavigate, useLocation } from 'react-router-dom'
import { sidebarLinks } from '@/constants';
import { INavLink } from '@/types';
import { Button } from '../ui/button';
const LeftSidebar = () => {

  const {mutate: signout, isSuccess}=useSignOutAccount();
  const navigate= useNavigate();
  const {user} = useUserContext();
  const {pathname} = useLocation();

  useEffect(()=>{
    if(isSuccess) navigate(0);
  },[isSuccess])


  return (
    <nav className='leftsidebar'>
      <div className='flex flex-col gap-11'>
      <Link to ='/' className=' flex gap-3 items-center '>
          <img src="/public/assets/images/logo.svg" 
          alt= "logo" 
          width={170}
          height={36}
          />
          </Link>

          <Link to = {`/profile/${user.id}`} 
          className='flex gap-3 items-center'
          >
            <img 
            src={user.imageUrl || "/public/assets/icons/profile-placeholder.svg" }
            className='h-9 w-9 rounded-full '
            alt='profile'

            />

            <div className='flex flex-col'>
              <p className='body-bold'>
                {user.name}
              </p>

              <p className='small-regular text-light-3'>
                @{user.username}
              </p>

            </div>

          </Link>

          <ul className='flex flex-col gap-6'>
              {sidebarLinks.map((link: INavLink)=>{

                const isActive = pathname ===link.route;
                return (
                  <li key={link.label} className={`leftsidebar-link ${
                    isActive && 'bg-primary-500'
                  }`}>
                  <NavLink to= {link.route}
                  className="flex gap-4 items-center p-2" 
                  >
                    <img
                      src={link.imgURL}
                      alt={link.label}
                      className={`group-hover: invert-white ${isActive && 'invert-white'}`}
                    />


                    {link.label}

                  </NavLink>
                  </li>
                )
              })

              }
          </ul>
      </div>
    
        <div className='mt-6'>
    <Button 
        variant="ghost" 
        className='shad-button_ghost' onClick={() =>signout ()}>
        <img src="/public/assets/icons/logout.svg" 
        alt="logout" 
      />

      <p className='small-medium lg:base-full'>Logout</p>

    </Button>
    </div>

</nav>

  )
}

export default LeftSidebar