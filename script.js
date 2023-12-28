const categoriesContainer = document.querySelector('.category-container');
const url = 'API/link.json';

fetch(url)
.then(response => response.json() )
.then(data => {
    data.categories.forEach(category => {
        const categoryColumn = document.createElement('div');
        categoryColumn.classList.add('column');

        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.name;
        categoryColumn.appendChild(categoryHeading);

        const linkContainer = document.createElement('div');
        linkContainer.classList.add('link-container');
        categoryColumn.appendChild(linkContainer);

        category.links.forEach(link => {
            const webLink = document.createElement('div');
            webLink.classList.add('web-link');
            webLink.setAttribute('title', link.name)

            const anchorTag = document.createElement('a');
            anchorTag.href = link.url;

            const imgTag = document.createElement('img');
            const domainOnlyURL = link.url.replace('https://', '').replace('http://', '').replace('www.','');
            const imgLink = `https://icon.horse/icon/${domainOnlyURL}`;
            imgTag.src = imgLink;
            imgTag.alt = link.name;

            anchorTag.appendChild(imgTag);
            webLink.appendChild(anchorTag);
            

            linkContainer.appendChild(webLink);
        })
        categoriesContainer.appendChild(categoryColumn);
    });
})