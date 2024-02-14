import { useEffect, useRef, useState } from 'react'
import './header.css'

function Header() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const menuRef = useRef<HTMLUListElement>(null)
    const [theme, setTheme] = useState(localStorage.getItem("currentTheme") ?? "dark");

    useEffect(() => {
        if (theme == "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    const handelClick = () => {
        localStorage.setItem("currentTheme", theme == "dark" ? "light" : "dark");
        setTheme(localStorage.getItem("currentTheme") ?? "dark")
    }

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as Node;

            if (!menuRef.current?.contains(target)) {
                setShowModal(false);
            }
        }

        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleCloseMenu = () => {
        setShowModal(false);
    };

    return (
        <header className='flex'>
            <button className='icon-menu menu flex' onClick={() => setShowModal(true)} />
            <div />
            <nav>
                <ul className='flex'>
                    <li><a href="#top">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certificates" >Certificates</a></li>
                    <li><a href="#contact-us">Contact us</a></li>
                </ul>
            </nav>
            <button className='mode flex' onClick={() => handelClick()}>
                <span className={theme == 'dark' ? 'icon-moon-o' : 'icon-sun'}></span>
            </button>
            {showModal &&
                <div className='fixed'>
                    <ul className='modal' ref={menuRef}>
                        <li> <button className='icon-close' onClick={() => setShowModal(false)} /></li>
                        <li><a href="#top" onClick={handleCloseMenu}>About</a></li>
                        <li><a href="#projects" onClick={handleCloseMenu}>Projects</a></li>
                        <li><a href="#certificates" onClick={handleCloseMenu}>Certificates</a></li>
                        <li><a href="#contact-us" onClick={handleCloseMenu}>Contact us</a></li>
                    </ul>
                </div>
            }
        </header>
    )
}

export default Header