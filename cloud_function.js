
async function getDescription() {
    const url = 'https://eliu-dev-github-io-895544443438.us-east4.run.app'
    const res = await fetch(url)
    const res_json = await res.json()
    console.log(res_json)
    return res_json?.response?.candidates[0]?.content?.parts
}

async function writeDescription() {
    const description = await getDescription();
    console.log(description);
    const element = document.createElement('p');
    const content = document.createTextNode(description[0].text);
    element.appendChild(content);
    
    const wrapping_element = document.getElementById('startupSystemsDesc')
    wrapping_element.insertAdjacentElement('beforeend', element)

}

writeDescription();