const size = {
    mobileP: '360px',
    mobileL: '640px',
    tabletP: '768px',
    tabletL: '1024px',
    laptop: '1024px',
}

const devices = {
    mobileP: `(max-width: ${size.mobileP})`,
    mobile: `(max-width: ${size.mobileL})`,
    tabletP: `(max-width: ${size.tabletP})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.laptop})`,
}

export default devices