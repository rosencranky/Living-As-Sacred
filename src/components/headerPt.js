import React, { useState } from "react"
import { Link } from "gatsby"

export default function HeaderPt() {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="z-10 flex flex-wrap items-center justify-between lg:px-6 lg:pt-4 lg:mb-6">
      <div className="block fixed top-8 right-4 z-40 lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          aria-label="Menu"
          className={`z-40  fixed top-2 right-4 text-red  transition ease-in-out duration-300 focus:outline-none ${
            !isExpanded ? "rotate-0" : "rotate-45"
          }`}
        >
          <svg
            className="w-12 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {/* <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /> */}
            <line
              x1="6"
              y1="12.5"
              x2="19"
              y2="12.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              y1="6"
              x1="12.5"
              y2="19"
              x2="12.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      <div
        className={`${
          isExpanded
            ? `fixed top-0 w-full z-30 block lg:hidden bg-green h-screen`
            : `hidden`
        }   `}
      >
        <div className="mt-10 ml-4 z-30">
          <Link
            to="/pt#sobre"
            title="Sobre"
            className="navlinks"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Sobre
          </Link>
          <Link
            to={`/pt#linha`}
            title="Timeline"
            className="navlinks"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Timeline
          </Link>
          <Link
            to={`/pt#mulheres`}
            title="Encontre-nos"
            className="navlinks"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Encontre-nos
          </Link>
          <Link
            to={`/contato`}
            title="Contato"
            className="navlinks"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            Contato
          </Link>
          <span className="inline-block text-red navlinks mt-10">
            <Link
              to={`/`}
              className="inline-block"
              title="Home"
              activeClassName="underline"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              EN
            </Link>
            /
            <Link
              to={`/pt`}
              className="inline-block "
              title="Home"
              activeClassName="underline"
              onClick={() => toggleExpansion(!isExpanded)}
            >
              PT
            </Link>
          </span>
          <div className="flex justify-start mt-10 text-red ">
            <a
              href="https://www.instagram.com/living.as.sacred/"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer noopener"
              className="mr-3 md:mr-0"
            >
              <svg
                className="w-6 md:mx-3"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.48754 0C6.36676 0 6.10083 0.00915058 5.26819 0.0481253C4.43688 0.0867611 3.86917 0.221308 3.37284 0.418554C2.85925 0.62224 2.42367 0.894724 1.98975 1.33802C1.55551 1.78097 1.28825 2.22562 1.08906 2.74958C0.895835 3.25659 0.763701 3.83613 0.725854 4.68476C0.688007 5.53475 0.678711 5.80621 0.678711 7.97117C0.678711 10.1358 0.688007 10.4073 0.725854 11.2576C0.763701 12.1059 0.895835 12.6854 1.08906 13.1924C1.28825 13.7167 1.55551 14.161 1.98975 14.6043C2.42367 15.0473 2.85925 15.3201 3.37284 15.5238C3.86917 15.7207 4.43688 15.8556 5.26819 15.8942C6.10083 15.9329 6.36676 15.9423 8.48754 15.9423C10.6083 15.9423 10.8739 15.9329 11.7066 15.8942C12.5379 15.8556 13.1056 15.7207 13.6022 15.5238C14.1155 15.3201 14.5514 15.0473 14.985 14.6043C15.4192 14.161 15.6865 13.7167 15.8857 13.1924C16.0789 12.6854 16.211 12.1059 16.2489 11.2576C16.2867 10.4073 16.296 10.1358 16.296 7.97117C16.296 5.80621 16.2867 5.53475 16.2489 4.68476C16.211 3.83613 16.0789 3.25659 15.8857 2.74958C15.6865 2.22562 15.4192 1.78097 14.985 1.33802C14.5514 0.894724 14.1155 0.62224 13.6022 0.418554C13.1056 0.221308 12.5379 0.0867611 11.7066 0.0481253C10.8739 0.00915058 10.6083 0 8.48754 0ZM8.48792 1.43631C10.5725 1.43631 10.8195 1.44445 11.6432 1.48274C12.4044 1.51799 12.8178 1.64813 13.093 1.75726C13.4575 1.90164 13.7175 2.07448 13.9907 2.3534C14.2639 2.63233 14.4333 2.89803 14.575 3.26982C14.6816 3.55077 14.8091 3.97306 14.8439 4.75018C14.8815 5.59068 14.8891 5.84283 14.8891 7.97118C14.8891 10.0995 14.8815 10.3513 14.8439 11.1918C14.8091 11.9693 14.6816 12.3916 14.575 12.6722C14.4333 13.0443 14.2639 13.3097 13.9907 13.589C13.7175 13.8675 13.4575 14.0404 13.093 14.1851C12.8178 14.2942 12.4044 14.424 11.6432 14.4596C10.8195 14.4979 10.5728 14.5061 8.48792 14.5061C6.40266 14.5061 6.15599 14.4979 5.33265 14.4596C4.57105 14.424 4.15772 14.2942 3.8825 14.1851C3.51797 14.0404 3.25802 13.8675 2.98479 13.589C2.71189 13.3097 2.54257 13.0443 2.40081 12.6722C2.29391 12.3916 2.16642 11.9693 2.13156 11.1918C2.09405 10.3513 2.08641 10.0995 2.08641 7.97118C2.08641 5.84283 2.09405 5.59068 2.13156 4.75018C2.16642 3.97306 2.29391 3.55077 2.40081 3.26982C2.54257 2.89803 2.71189 2.63233 2.98479 2.3534C3.25802 2.07448 3.51797 1.90164 3.8825 1.75726C4.15772 1.64813 4.57105 1.51799 5.33265 1.48274C6.15599 1.44445 6.403 1.43631 8.48792 1.43631Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.48689 10.6281C7.04935 10.6281 5.88372 9.43855 5.88372 7.97107C5.88372 6.50359 7.04935 5.31401 8.48689 5.31401C9.92409 5.31401 11.0897 6.50359 11.0897 7.97107C11.0897 9.43855 9.92409 10.6281 8.48689 10.6281ZM8.48736 3.87781C6.27263 3.87781 4.47754 5.71063 4.47754 7.97117C4.47754 10.2317 6.27263 12.0642 8.48736 12.0642C10.7018 12.0642 12.4969 10.2317 12.4969 7.97117C12.4969 5.71063 10.7018 3.87781 8.48736 3.87781Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5929 3.71611C13.5929 4.24447 13.1732 4.67251 12.656 4.67251C12.1384 4.67251 11.7188 4.24447 11.7188 3.71611C11.7188 3.18775 12.1384 2.7597 12.656 2.7597C13.1732 2.7597 13.5929 3.18775 13.5929 3.71611Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              // TODO: ADD TEELGRAM LINK
              href="https://t.me/apoemapormaria"
              target="_blank"
              aria-label="Telegram"
              rel="noreferrer noopener"
            >
              <svg
                className="w-6 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455 455"
              >
                <g>
                  <path
                    d="M0,0v455h455V0H0z M384.814,100.68l-53.458,257.136
          c-1.259,6.071-8.378,8.822-13.401,5.172l-72.975-52.981c-4.43-3.217-10.471-3.046-14.712,0.412l-40.46,32.981
          c-4.695,3.84-11.771,1.7-13.569-4.083l-28.094-90.351l-72.583-27.089c-7.373-2.762-7.436-13.171-0.084-16.003L373.36,90.959
          C379.675,88.517,386.19,94.049,384.814,100.68z"
                    fill="currentColor"
                  />
                  <path
                    d="M313.567,147.179l-141.854,87.367c-5.437,3.355-7.996,9.921-6.242,16.068
          l15.337,53.891c1.091,3.818,6.631,3.428,7.162-0.517l3.986-29.553c0.753-5.564,3.406-10.693,7.522-14.522l117.069-108.822
          C318.739,149.061,316.115,145.614,313.567,147.179z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <div
        className={`hidden lg:flex flex-grow items-center justify-end w-auto text-black`}
      >
        <div className="justify-center self-center">
          <Link to="/pt#sobre" title="About" className="navlinks">
            Sobre
          </Link>
          <Link to={`/pt#linha`} title="Timeline" className="navlinks">
            Timeline
          </Link>
          <Link to={`/pt#mulheres`} title="Meet us" className=" navlinks">
            Encontre-nos
          </Link>
          <Link to={`/contato`} title="Contato" className="navlinks mr-6">
            Contato
          </Link>
          <span className="text-red ">
            <Link
              to={`/`}
              className="text-2xl leading-none inline-block mt-0 "
              title="Home"
              activeClassName="underline"
            >
              EN
            </Link>
            /
            <Link
              to={`/pt`}
              className="text-2xl leading-none inline-block mt-0 "
              title="Home"
              activeClassName="underline"
            >
              PT
            </Link>
          </span>
        </div>
      </div>
    </nav>
  )
}
