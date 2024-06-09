import { Avatar } from '@mui/material'
import { InputWrite } from '../components/InputWrite'
import { Paginations } from '../components/Paginations'
import { PostCards } from '../components/PostCards'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SettingsIcon from '@mui/icons-material/Settings';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
import { openModal, closeModal } from '../store/actions/modalAction';
import UserIcon from '../assets/svg/UserIcon';
import CloseIcon from '../assets/svg/CloseIcon';

const YourFeed = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();
  return (
    <>
      <div className="md:ml-5 max-w-full">
        <div className="flex justify-end">
          {!isOpen && (
            <button onClick={() => dispatch(openModal())}>
              <UserIcon />
            </button>
          )}

          {isOpen && (
            <section className="pb-6 pt-6 h-[90vh]  md:w-[20%] modal" >
              <button onClick={() => dispatch(closeModal())}>
                <CloseIcon />
              </button>
              <div id='sidebar-up'>
                <div className='flex justify-center py-4' id='photo-avatar'>
                  <Avatar sx={{ width: { xs: 40, md: 100 }, height: { xs: 40, md: 100 }, }} />
                </div>
                <div id='info-user' className='hidden md:flex flex-col items-center'>
                  <h2 className="text-lg font-bold tracking-tight text-gray-900">Jeremy Rose</h2>
                  <p className="text-sm text-gray-500">@jeremyrose</p>
                  <p className="text-sm text-gray-500 py-3">Modern Literature Student</p>
                </div>
                <div id='contain-numbers' className='hidden md:flex justify-evenly py-4 text-gray'>
                  <div className='flex flex-col items-center '>
                    <span className='text-[1.5rem] '>23</span>
                    <span className='text-[1rem]'>Writers</span>
                  </div>
                  <div className='flex flex-col items-center'>
                    <span className='text-[1.5rem]'>120</span>
                    <span className='text-[1rem]'>Friends</span>
                  </div>
                  <div className='flex flex-col items-center'>
                    <span className='text-[1.5rem]'>10</span>
                    <span className='text-[1rem]'>Reviews</span>
                  </div>
                </div>
              </div>

              <div id='divider' className='bg-screen w-[90%] h-[1px] m-2'></div>

              <div id='sidebar-down'>
                <div id='notifications' className='flex my-4'>
                  <h3 className='cursor-pointer md:flex text-[1.2rem] mr-3 hover:text-yellow'>Notifications</h3><NotificationsActiveIcon sx={{ color: '#6d6c68' }} />
                </div>
                <div id='messages' className='flex my-4'>
                  <h3 className='cursor-pointer md:flex text-[1.2rem] mr-3 hover:text-yellow'>Messages</h3><MarkEmailUnreadIcon sx={{ color: '#6d6c68' }} />
                </div>
                <div id='settings' className='flex my-4'>
                  <h3 className='cursor-pointer md:flex text-[1.2rem] mr-3 hover:text-yellow'>Settings</h3><SettingsIcon sx={{ color: '#6d6c68' }} />
                </div>
              </div>

            </section>
          )}

          <section className="pb-6 pt-6 ml-6 w-[96%] h-[90vh] bg-screen overflow-scroll grid justify-items-center">

            <div className="mt-6 mb-6 flex justify-center">
              <h2 className="text-2xl py-1 px-1 font-bold tracking-tight text-white md:text-4xl">Write, Publish and Wait 🖋️</h2>
            </div>
            <InputWrite />
            <PostCards />
            <Paginations />
          </section>
        </div>
      </div>

    </>
  )
}
export { YourFeed }