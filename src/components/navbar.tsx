'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from './ui/navigation-menu';

export const links = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (href: string) => {
    closeMenu();

    if (pathname === '/form') {
      router.push(`/${href}`);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className='w-full bg-black flex justify-center py-2 fixed top-0 left-0 z-50'>
      <div className='max-w-7xl w-full grid grid-cols-2 lg:grid-cols-3 items-center px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='flex items-center space-x-1.5 font-semibold text-white text-lg tracking-tight hover:text-neutral-200 justify-self-start font-poppins'
        >
          <Image
            src='/images/logo.png'
            alt='Codabu Logo'
            width={28}
            height={28}
          />
          <span>codabu</span>
        </Link>

        <NavigationMenu className='justify-self-center hidden lg:flex'>
          <NavigationMenuList>
            {links.map(({ name, href }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(href);
                  }}
                  className='text-neutral-400'
                >
                  {name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          variant='secondary'
          className='justify-self-end hidden lg:flex'
        >
          <Link href='/form'>Get Early Access</Link>
        </Button>

        <Button
          onClick={toggleMenu}
          variant='secondary'
          className='justify-self-end lg:hidden bg-transparent hover:bg-transparent'
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-black lg:hidden'>
          <div className='max-w-7xl mx-auto px-4 pb-4 space-y-4'>
            {links.map(({ name, href }) => (
              <button
                key={href}
                onClick={() => handleSectionClick(href)}
                className='block text-white hover:text-neutral-200 transition-colors py-2 text-left w-full'
              >
                {name}
              </button>
            ))}

            <Button
              asChild
              variant='secondary'
              className='w-full'
              onClick={closeMenu}
            >
              <Link href='/form'>Get Early Access</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
