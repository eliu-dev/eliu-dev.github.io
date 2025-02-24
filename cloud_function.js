

async function getDescription() {
    const url = 'https://eliu-dev-github-io-895544443438.us-east4.run.app';
    const res = await fetch(url);
    const res_json = await res.json();
    return res_json?.response?.candidates[0]?.content?.parts;
}

async function createDescription(description) {
    const description_blocks = description[0].text.split(". ");
    const wrapping_element = document.getElementById('startupSystemsDesc')
    for (index in description_blocks) {
        const element = document.createElement('p');
        let content = description_blocks[index]
        if (index < description_blocks.length - 1) {
            content += '. '
        }
        const textNode = document.createTextNode(content);
        element.appendChild(textNode);
        element.classList.add('type-hidden')
        wrapping_element.insertAdjacentElement('beforeend', element)
    };
}

async function addObservers() {
    // Add CSS styling to type out the description when it enters the viewport
    const observerOptions = {
        root: null,
        rootMargin: '30px',
        threshold: 0.9
    }
    
    const textObserver = new IntersectionObserver( function(entries, observer) {
        for (const entry of entries) {
            if (entry.isIntersecting === true) {
                console.log(`Intersecting on ${entry.target.innerHTML}`)
                if (entry.target.classList.contains('type') === false) {
                    console.log(`Adding type on ${entry.target.innerHTML}`)
                    entry.target.classList.remove('type-hidden');
                    entry.target.classList.add('type');
                }
                return;
            }
        }
    },
    observerOptions);

    const description_blocks = document.querySelectorAll('#startupSystemsDesc p');
    for (block of description_blocks) {
        textObserver.observe(block);
    }
}

async function writeDescription() {
    const description = await getDescription();
    await createDescription(description);
    await addObservers();
}

writeDescription();