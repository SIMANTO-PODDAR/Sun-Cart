import { RiInstagramFill } from 'react-icons/ri';
import FooterLogo from '../../../public/suncartfooterlogo.png'
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className="bg-blue-300/70 sm:mt-15">
            <div className='max-w-300 mx-auto'>

                <footer className="footer footer-horizontal footer-center p-10 border-b border-white/15">
                    <Image src={FooterLogo} alt='Sun Cart Logo' className='scale-70 md:scale-100 w-87 h-37' />
                    <p className='mt-3 text-sm font-bold' >SunCart - Summer Essentials Store</p>

                    <div className='grid sm:flex justify-around w-full'>

                        <div className='sm:text-left'>{/* Contact Info */}
                            <h3 className='text-xl'>Contact Info</h3>
                            <h2>Phone: 0123456789</h2>
                            <h2>Whatsapp: 0123456789</h2>
                            <h2>Email: suncart@gmail.com</h2>

                        </div>

                        <div className='sm:text-left'>{/* Social Links */}
                            <h3 className='text-xl'>Social Links</h3>
                            <div className='flex gap-4 justify-center mt-4'>

                                <div
                                    className="fill-current bg-amber-50 text-black text-2xl p-2 rounded-full">
                                    <RiInstagramFill />
                                </div>
                                <div
                                    className="fill-current bg-amber-50 text-black text-2xl p-2 rounded-full">
                                    <FaSquareFacebook />
                                </div>
                                <div
                                    className="fill-current bg-amber-50 text-black text-2xl p-2 rounded-full">
                                    <FaXTwitter />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>{/* Privacy policy */}
                        <h3 className='text-xl'>Privacy Policy</h3>
                        <p className='text-[10px]'>We value your privacy. SunCart collects only the necessary information to process orders and improve user experience. Your personal data will never be sold or shared with third parties, except when required by law. By using our platform, you agree to this privacy policy.</p>

                    </div>


                </footer>



                <aside className='grid justify-center sm:flex sm:justify-between py-5'>
                    <p>© {new Date().getFullYear()} SunCart. All rights reserved.</p>
                    <div className='flex justify-center gap-5'>
                        <p className='link link-hover'>Terms of Service</p>
                        <p className='link link-hover'>Cookies</p>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Footer;