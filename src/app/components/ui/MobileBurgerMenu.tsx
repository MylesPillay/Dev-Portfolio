'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaXing } from 'react-icons/fa';

interface MobileBurgerMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileBurgerMenu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileBurgerMenuProps) => {
  const pathname = usePathname();
  return (
    <div className="fixed right-4 top-8 z-50 md:hidden">
      <button
        onClick={() => {
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        className="flex flex-col items-center justify-center rounded-md p-2 text-emerald-200"
      >
        {mobileMenuOpen ? (
          <FaXing className="z-50" size={30} />
        ) : (
          <FaBars size={30} />
        )}
      </button>
      {mobileMenuOpen && (
        <div className="fixed right-0 top-0 z-40 h-auto w-[50%] border-b border-l border-emerald-200 bg-deepBlueBg p-8 md:hidden">
          <div className="flex h-[10%] flex-col items-start p-2">
            {[
              { href: '/contact', label: 'CONTACT' },
              { href: '/projects', label: 'PROJECTS' },
              { href: '/', label: 'ABOUT ME' },
            ]
              .filter((item) => item.href !== pathname)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="my-4 text-left text-xl font-semibold text-orangeflame"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileBurgerMenu;
