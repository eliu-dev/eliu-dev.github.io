
class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
            <nav class="flexbox">
            <div class="left"></div>
            <div class="center">
                <a href="/index.html" class="title links">Eric Liu</a>
            </div>
            <div class="right">
                <a href="/index.html#projects" class="links">Projects</a>
                <a href="/index.html#interests" class="links">Interests</a>
                <a href="/musings.html" class="links">Musings</a>
                <a href="https://www.linkedin.com/in/eric-liu/"><img src="linkedin-logo.png" class="logo"></a>
                <a href="https://github.com/eliu-dev" ><img src="github-logo.svg" class="logo"></a>
                <a href="color-scheme" >
                <svg style="width:32px; height:32px">
                    <g>
                    <image src="moon.svg" class="logo">
                    </g>
                </svg>
                </a>
            </div>
            </nav>
        `

        this.loadStyles()
    }

    async loadStyles() {

        const response = await fetch('/styles.css');
        const responseText = await response.text();

        const sheet = new CSSStyleSheet();
        sheet.replace(responseText);

        this.shadowRoot.adoptedStyleSheets = [sheet]
    }
}


customElements.define('nav-bar', NavBar)