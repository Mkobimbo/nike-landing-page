import { headerLogo } from '../nike_landing_assets (2)/assets/images';
import { hamburger } from '../nike_landing_assets (2)/assets/icons';
import {navLinks} from '../constants';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="justify-between items-center max-container">
            <a href="/">
                <img
                  src={headerLogo} 
                  alt="Logo"
                  width={130}
                  height={29}
                  
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={itme.label}>
                    <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                      {item.label}
                    </a>

                </li>
              ))}
            </ul>
        </nav>
    </header>
  )
}

export default Nav