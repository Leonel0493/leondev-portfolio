import { e as createComponent, f as createAstro, h as addAttribute, i as renderHead, j as renderSlot, r as renderTemplate, m as maybeRenderHead, k as renderComponent } from '../chunks/astro/server_IqQYCxws.mjs';
/* empty css                                 */
import { jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const Wrapper = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      id: "wrapper",
      initial: { height: "0vh", opacity: 0 },
      animate: { height: "100vh", opacity: 1 },
      transition: { duration: 0.85, ease: "easeOut" },
      className: "w-screen bg-[#FFE7DE] h-screen flex flex-row relative z-40",
      children
    }
  ) });
};

const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Leonel Dev</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/layouts/Layout.astro", void 0);

const $$NavbarLeftCopiright = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-18 absolute top-auto bottom-[3vh] left-[0%] right-[0%] flex-auto pl-5 pr-3 transform-[rotate(-90deg)]"> <div class="text-center text-[#28282B] tracking-[4px] text-xs font-medium">
© 2025
</div> </div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/navbarLeft-Copiright.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavbarLeftItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavbarLeftItem;
  const { href, title, hexCode } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-auto mb-10 pl-5 pr-5 transform-[rotate(-90deg)] items-center justify-center"> <a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="text-[#28282B] font-JetBrains-Mono text-center tracking-[5px] uppercase font-bold text-xs block"${addAttribute(`--hover-color: ${hexCode}`, "style")} onmouseover="this.style.color = 'var(--hover-color)'" onmouseout="this.style.color = '#28282B'"> ${title} </a> </div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/navbarLeft-Item.astro", void 0);

const $$NavbarLeftLine = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-[1px] h-28 bg-[#28282B] mt-2.5 mb-20 ml-[50%]"></div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/navbarLeft-Line.astro", void 0);

const $$NavbarLeft = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="navbar-left" class="w-[6%] h-screen py-2.5 px-1 flex-col items-start justify-start pt-[5%]"> ${renderComponent($$result, "NavbarLeftItem", $$NavbarLeftItem, { "href": "https://www.linkedin.com/in/marvin-leonel-rivas-trejo-97a581150/", "title": "LI", "hexCode": "#3A94C5" })} ${renderComponent($$result, "NavbarLeftItem", $$NavbarLeftItem, { "href": "#", "title": "TW", "hexCode": "#5C6A72" })} ${renderComponent($$result, "NavbarLeftItem", $$NavbarLeftItem, { "href": "https://github.com/Leonel0493", "title": "GH", "hexCode": "#DF69BA" })} ${renderComponent($$result, "NavbarLeftLine", $$NavbarLeftLine, {})} ${renderComponent($$result, "NavbarLeftCopyright", $$NavbarLeftCopiright, {})} </div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/navbarLeft.astro", void 0);

const $$RightContainerLeftSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="left-section" class="w-[25%] h-screen flex flex-col justify-center items-start"> <div id="main-content" class="ml-[-10%] mt-[90%] pl-[20px] py-[12px] border-3 border-[#3A94C5] rounded-xl font-JetBrains-Mono text-[#5C6A72]" style="translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"> <div id="header-content" class="mb-[2vh] overflow-hidden"> <p class="tracking-[2px] uppercase text-sm font-extrabold">
Leonel Rivas
</p> </div> <div id="technologies" class="block overflow-hidden"> <p class="max-w-[80%] mx-0 text-xs font-light leading-[1.9em] relative">
Computer Engineering | C# | TypeScript | NodeJS | SQLServer | MySQL
</p> </div> <div id="current-job" class="block overflow-hidden mt-[10px]"> <p class="max-w-[80%] mx-0 text-xs font-light leading-[1.9em] relative">
Currently working full-time as Engineering Developer at <a href="https://cikume.com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#35A77C]">
Cikume Software
</a> </p> </div> </div> </div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/rightContainer-LeftSection.astro", void 0);

const $$Astro = createAstro();
const $$RightContainerRightSectionNavItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RightContainerRightSectionNavItem;
  const { displayName, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="opacity-[1] blur-[0px] text-right pl-[5%] mb-[7%] inline-block relative"> <a${addAttribute(url, "href")} class="z-10 text-[#28282B] uppercase font-Boldonse text-[8vw] font-light leading-[.95em] block relative">${displayName}</a> </div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/rightContainer-RightSection-NavItem.astro", void 0);

const $$RightContainerRightSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="right-section" class="w-[65%] h-[90vh] float-right gap-x-4 gap-y-4 text-center flex-col justify-center items-center pt-[5vh] flex relative top-[0%] left-auto right-[0%] bottom-[0%]"> <nav class="text-left pt-[10%] pl-[6%]"> ${renderComponent($$result, "RightSectionNavItem", $$RightContainerRightSectionNavItem, { "displayName": "Home", "url": "#" })} ${renderComponent($$result, "RightSectionNavItem", $$RightContainerRightSectionNavItem, { "displayName": "About", "url": "#" })} ${renderComponent($$result, "RightSectionNavItem", $$RightContainerRightSectionNavItem, { "displayName": "Contact", "url": "#" })} </nav> </div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/rightContainer-RightSection.astro", void 0);

const $$RightContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="right-container" class="w-[94%] bg-[#FFE7DE] flex flex-row mx-auto pr-[5%] pl-[10%]"> ${renderComponent($$result, "RightContainerLeftSection", $$RightContainerLeftSection, {})} ${renderComponent($$result, "RightContainerLRightSection", $$RightContainerRightSection, {})} </div>`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/rightContainer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Wrapper", Wrapper, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/components/index/wrapper.tsx", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NavbarLeft", $$NavbarLeft, {})} ${renderComponent($$result3, "RightContainer", $$RightContainer, {})} ` })} ` })}`;
}, "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/leonel/Documents/Desarrollos/Developments/astro/Portfolio/leondev-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
