import { Grid } from "@mui/material";
import Logo from '../assets/logo/logo-scribblehub.png'

const Footer = () => {
  return (
    <footer>
        <div className='bg-[#D3D3E3] w-[100%] p-5 md:pl-10 md:pr-10 h-auto z-40'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <img src={Logo} alt="logo" className="w-[200px]"/>
                    <p className="mt-2">“For me, the greatest pleasure in writing is not the subject matter, but the music that the words make” - Truman Capote</p>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div className="flex justify-around ">
                        <div>
                          <h3 className="font-bold">Quicklinks</h3> 
                          <ul>
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">You Feed</li>
                            <li className="cursor-pointer">Resources</li>
                            <li className="cursor-pointer">Why ScribbleHub?</li>
                            </ul> 
                        </div>
                        <div>
                          <h3  className="font-bold">Legal</h3>
                          <ul>
                            <li className="cursor-pointer">Politics</li>
                            <li className="cursor-pointer">Privacity</li>
                            <li className="cursor-pointer">Cookies</li>
                            <li className="cursor-pointer">Payment Method</li>
                            </ul>   
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <div>
                    <h3 className="mb-3">Are you a professional and want to work with us?</h3>
                    <input type="email" placeholder='Enter you email' className="min-w-0 w-[70%] flex-auto rounded-md border-0 bg-transparent px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"/>
                    <button className="flex-none rounded-md bg-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Enviar</button> 
                    </div>
                    
                </Grid>
                
            </Grid>
        </div>
        <div className='bg-[#FFDE59] w-[100%] h-[3rem] flex items-center justify-center'>
            <h3>© COPYRIGHT 2024. BY ROCHCODE   </h3>
        </div>
    </footer>
  )
}

export {Footer}
