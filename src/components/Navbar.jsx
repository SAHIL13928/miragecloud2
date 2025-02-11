"use client";
import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 mt-4 w-full sm:w-[90%] md:w-[75%] lg:w-[62%] bg-white/15 backdrop-blur-lg justify-center rounded-xl shadow-lg py-2">
      <div className="flex w-full max-w-5xl items-center justify-between">
        <div className="text-xl font-bold text-white px-4">MirageCloud</div>

        {/* Mobile Hamburger Button */}
        <button
          className="sm:hidden block text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop and Mobile Menu */}
        <NavigationMenu.Root className={`flex sm:block ${isMenuOpen ? "block" : "hidden"} sm:flex`}>
          <NavigationMenu.List className="center  text-white m-0 items-center  flex list-none justify-end rounded-md p-1">
            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger className="group hover:text-white/80 flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                Documentation
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                  <ListItem href="/" title="Radix Primitives">
                    Unstyled, accessible components for React.
                  </ListItem>
                  <ListItem href="https://stitches.dev/" title="Stitches">
                    CSS-in-JS with best-in-class developer experience.
                  </ListItem>
                  <ListItem href="/colors" title="Colors">
                    Beautiful, thought-out palettes with auto dark mode.
                  </ListItem>
                  <ListItem href="https://icons.radix-ui.com/" title="Icons">
                    A crisp set of 15x15 icons, balanced and consistent.
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group hover:text-white/80 flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                Resources
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                  <ListItem
                    title="Introduction"
                    href="/primitives/docs/overview/introduction"
                  >
                    Build high-quality, accessible design systems and web apps.
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="block select-none hover:text-white/80 rounded px-2 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                href="#"
              >
               Preview
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="block select-none hover:text-white/80 rounded px-2 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                href="#"
              >
                Careers
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="block select-none hover:text-white/80 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                href="#"
              >
                Pricing
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <div className=" ml-24 border justify-end border-white bg-transparent rounded-xl transition-all duration-300 ease-in-out hover:bg-white/10">
                <NavigationMenu.Link
                  className="block select-none rounded px-2 py-3 text-[15px] font-medium leading-none text-violet11 no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="#"
                >
                  Get a demo
                </NavigationMenu.Link>
              </div>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <div className=" ml-2 mr-2 border justify-end border-white bg-white text-black rounded-xl transition-all duration-300 ease-in-out hover:bg-white/90">
                <NavigationMenu.Link
                  className="block select-none rounded px-2 py-3 text-[15px] font-medium leading-none text-violet11 no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="#"
                >
                  Sign up
                </NavigationMenu.Link>
              </div>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
              <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
            <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
            {title}
          </div>
          <p className="leading-[1.4] text-mauve11">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Navbar;
