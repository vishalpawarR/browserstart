const webLinks = document.querySelectorAll('.web-link');

webLinks.forEach(weblink => {
    const anchorTag = weblink.querySelector('a');
    const imgTag =  weblink.querySelector('img');

    let link = anchorTag.href;
    weblink.setAttribute('title', link)
    link = link.replace('https://', '').replace('http://', '').replace('www.','');
    const imgSrc = getFavIconImg(link);
    imgTag.src = imgSrc;
    imgTag.alt = link;
})

function getFavIconImg(url) {
    return `https://icon.horse/icon/${url}`;
    // return `https://www.google.com/s2/favicons?domain=${url}&sz=512`
    // return `https://icons.duckduckgo.com/ip3/${url}.ico`
}