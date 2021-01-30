import { createMedia } from '@artsy/fresnel'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    smallMonitor: 992,
    largeMonitor: 1200
  },
})

export { MediaContextProvider, Media };

