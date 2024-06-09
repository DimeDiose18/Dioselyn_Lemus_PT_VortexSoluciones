import { Avatar } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import bg from '../assets/BG/Hoja_Cuadriculada_Graficas_3.jpg';
import ArrowIcon from '../assets/svg/ArrowIcon.js';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/your-feed');
    };
    return (
        <>
            <div className="md:ml-5 max-w-full">
                <button onClick={handleClick} style={{ background: 'none', border: 'none', padding: 0, position: 'absolute' }}>
                    <ArrowIcon />
                </button>
                <div className="flex justify-end">

                    <section className="pb-6 pt-6 h-[90vh]  md:w-[20%]" >
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
                            <div id='notifications' className='flex my-6'>
                                <h3 className='cursor-pointer md:flex text-[1.2rem] mr-3 hover:text-yellow'>Notifications</h3><NotificationsActiveIcon sx={{ color: '#6d6c68' }} />
                            </div>
                            <div id='messages' className='flex my-6'>
                                <h3 className='cursor-pointer md:flex text-[1.2rem] mr-3 hover:text-yellow'>Messages</h3><MarkEmailUnreadIcon sx={{ color: '#6d6c68' }} />
                            </div>
                        </div>

                    </section>
                    <section style={{ backgroundImage: `url(${bg})` }} className=" w-[80%] h-[90vh] bg-screen overflow-scroll grid justify-items-center">
                        <embed
                            src="data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G"
                            type="application/pdf" width="100%" height="100%" />
                    </section>
                </div>
            </div>

        </>
    )
}
export { Card }