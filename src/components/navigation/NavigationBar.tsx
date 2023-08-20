import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import DarkLogo from "../../assets/darkLogo.png";
import Logo from "../../assets/logo.png";
import { ModeToggle } from "./ToggleMode";
import { navigationItems } from "./navigationItems";

export const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let isSystemDarkMode = darkModeMediaQuery.matches;
  return (
    <header className="bg-[#FFFAFA] dark:bg-[#6D6767] ">
      <nav
        className="bg-white dark:bg-neutral-600  mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-b border-[#0000004d] shadow-md"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-1.5 flex gap-2 items-center font-extrabold text-3xl justify-center"
          >
            <span className="sr-only">Zarish Iqbal</span>
            <img
              className="h-8 w-auto dark:flex hidden "
              src={DarkLogo}
              alt=""
            />
            <img className="h-8 w-auto dark:hidden flex" src={Logo} alt="" />
            <div className="font-poppins">Zarish</div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 items-center">
          {navigationItems.map((item) => (
            <a href={item.url} className="text-sm font-semibold leading-6 ">
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="border border-[#000000cc] dark:border-white   py-1 px-2  text-sm font-semibold leading-6"
          >
            Connect
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
          <ModeToggle />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-neutral-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Zarish Iqbal</span>
              <img className="h-8 w-auto dark:hidden" src={Logo} alt="" />
              <img
                className="h-8 w-auto dark:flex hidden"
                src={DarkLogo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => (
                  <a
                    href={item.url}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#767373]"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#767373]"
                >
                  Connect
                </a>
              </div>
            </div>
            <div className="flex items-center absolute bottom-10 right-10">
              <ModeToggle />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
