import { component$, useStylesScoped$ } from "@builder.io/qwik";

const phoneIcon = (<svg stroke="currentColor" viewBox="0 0 512 512" height="1em" width="1em"><path fill="none" stroke-miterlimit="10" stroke-width="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"/></svg>)

const mailIcon = (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"><rect width="416" height="320" x="48" y="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="40" ry="40"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>)

const locationIcon = (<svg stroke="currentColor" viewBox="0 0 512 512" height="1em" width="1em" class="translate-y-2 gte1000:translate-y-1.5"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"></path><circle cx="256" cy="192" r="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>)

const instagramIcon = (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg>)

const whatsappIcon = (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em"><path fill-rule="evenodd" d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"></path></svg>)

const facebookIcon = (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"><path d="M581.76 80.496c3.808 0 5.999.16 5.999.16h83.568l-.431 96h-83.008c-45.68 0-44.624 39.007-44.624 39.007v152.192h161.632l-22.56 95.872h-139.6v479.776h-95.904l-.064-479.776H319.36l-.256-95.872h127.712V218.671C446.83 88.591 554.864 80.495 581.76 80.495zm89.567.159h.16-.16zm-89.567-64.16c-23.008 0-67.97 3.809-110.562 29.473-40.32 24.256-88.368 73.935-88.368 172.688v85.183h-63.712c-17.008 0-33.312 6.784-45.344 18.817a64.003 64.003 0 0 0-18.655 45.408l.256 95.872c.128 35.248 28.752 63.776 64 63.776h63.408l.064 415.776c0 35.344 28.657 64 64 64h95.905c35.343 0 64-28.656 64-64V527.712h75.6c28.4 0 53.407-18.72 61.407-45.967l22.56-95.873c5.68-19.343 1.903-40.255-10.192-56.368a63.912 63.912 0 0 0-51.217-25.664h-97.632v-63.152l63.632-.032c35.216 0 63.84-28.464 64-63.712l.431-92.752a64.3 64.3 0 0 0 .097-3.536c0-35.344-28.592-64-63.935-64h-81.936c-1.84-.096-4.496-.16-7.807-.161z"></path></svg>)

const tiktokIcon = (<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em"><path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path></svg>)

export default component$(() => {
  useStylesScoped$(`
    footer {
      background-color: black;
      color: white;
      padding-top: 3em;
      padding-bottom: .5em;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 3em;

      @media (width >= 700px) { flex-direction: row }
    }

    .logo {
      font-size: 2em;
      font-weight: bold;
      line-height: 1;
    }

    .contact-info {
      display: flex;
      gap: 8px;
    }

    .contact-info--trans svg {
      transform: translateY(.5em);

      @media (width > 1000px) {
        transform: translateY(.3em);
      }
    }

    .contact-info--center {
      align-items: center;
    }

    .opening-hours {
      display: block;
      margin-top: 1em;
    }

    .opening-details {
      display: flex;
      gap: 1em
    }

    .sitemap {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media (width >= 650px) {
        justify-content: space-around;
      }
    }

    .social-media {
      display: flex;
      justify-content: center;
      font-size: 1.5em;
      gap: 1em;
      margin-top: 2em;
    }

    small {
      display: block;
      text-align: center;
      margin-top: .5em;
    }
  `)
  return (
    <footer class="fluid-container">
      <div class="content">
        <address>
          <p class="logo">LOGO</p>
          <p class="contact-info contact-info--trans">{locationIcon} 10 Ubi Crescent #01-63A Lobby D<br />Ubi Techpark Singapore 408564</p>
          <p class="contact-info contact-info--center">{mailIcon} sales@ft2.com.sg</p>
          <p class="contact-info contact-info--center">{phoneIcon} +65 80449593</p>
          <b class="opening-hours">Opening hours</b>
          <div class="opening-details">
            <div>
              <p>Mon - Fri</p>
              <p>Sat & Sun</p>
            </div>
            <div>
              <p>11:00 am - 6:00 pm</p>
              <p>strictly by appointment only</p>
            </div>
          </div>
        </address>
        <div class="sitemap">
          <div>
            <b>About</b>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
          </div>
          <div>
            <b>About</b>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
          </div>
          <div>
            <b>About</b>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
            <p>some link</p>
          </div>
        </div>
      </div>
      <div class="social-media">
        {whatsappIcon}
        {instagramIcon}
        {facebookIcon}
        {tiktokIcon}
      </div>
      <small>©2023 FT2 Interior Design. All Rights Reserved.</small>
    </footer>
  )
})