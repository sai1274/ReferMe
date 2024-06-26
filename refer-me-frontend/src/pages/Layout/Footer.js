import React from 'react'

const LIST = [
    {
        "name": "Pricing",
        "link": "/pricing"
    },
    {
        "name": "All Templates",
        "link": "/templates"
    },
    {
        "name": "Landing Pages",
        "link": "/landing-pages"
    },
    {
        "name": "Next.js Templates",
        "link": "/nextjs"
    },
    {
        "name": "Full Templates",
        "link": "/multi-page"
    },
    {
        "name": "Free Templates",
        "link": "/demos"
    },
    {
        "name": "Documentation",
        "link": "/documentation"
    },
    {
        "name": "Customers",
        "link": "/expo"
    },
    {
        "name": "About",
        "link": "https://wickedlabs.dev"
    }
]
export default function Footer() {
  return (
    <div><footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>

    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="text-white xl:col-span-1">
          <a class="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8" href="/groups/footer/"> wickedblocks </a>
          <p class="w-1/2 mt-2 text-sm text-gray-500">Wicked templates for wicked dev's</p>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">Navigation</h3>
              <ul class="mt-4 space-y-2">
                {
                    LIST.map((link, idx) => (   
                        <li>
                            <a href={link.link} class="text-base font-normal text-gray-500 hover:text-blue-600"> {link.name} </a>
                        </li>
                    ))
                }
                
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">UI/UX &amp; Dev</h3>
              <ul class="mt-4 space-y-2">
              {
                LIST.map((link, idx) => (
                    <li>
                        <a href={link.link} class="text-base font-normal text-gray-500 hover:text-blue-600"> {link.name} </a>
                    </li>
                ))
              }
                
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">Legal</h3>
              <ul class="mt-4 space-y-2">
              {
                LIST.map((link, idx) => (
                    <li>
                        <a href={link.link} class="text-base font-normal text-gray-500 hover:text-blue-600"> {link.name} </a>
                    </li>
                ))
              }
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-bold tracking-wider text-blue-500 uppercase">Socials</h3>
              <ul class="mt-4 space-y-2">
                <li>
                  <a href="https://twitter.com/WickedTemplates" class="text-base font-normal text-gray-500 hover:text-blue-600"> Twitter </a>
                </li>
                <li>
                  <a href="https://dribbble.com/MichaelAndreuzza.html" class="text-base font-normal text-gray-500 hover:text-blue-600"> Dribbble </a>
                </li>
                <li>
                  <a href="https://www.indiehackers.com/product/wicked-templates" class="text-base font-normal text-gray-500 hover:text-blue-600"> Indie Hackers </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-12 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-16">
      <div class="flex flex-wrap items-baseline">
        <span class="mt-2 text-sm font-light text-gray-500">
          Copyright © 2020 - 2021
          <a href="https://wickedlabs.dev" class="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@wickedlabsHQ</a>. Since 2020
        </span>
      </div>
    </div>
  </footer>
  </div>
  )
}
