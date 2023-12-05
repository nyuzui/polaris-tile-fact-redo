// polaris-tile-fact.js
import { LitElement, html, css } from 'lit';

class PolarisTileFact extends LitElement {
    static styles = css`
        :host {
            display: block;
        }

        .card-wrap-outer {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            max-width: 1000px; 
            margin: auto;
        }

        .bg {
           // flex: 0 0 31.9%;
            background-size: cover;
            background-position: center;
            background-blend-mode: multiply;
            color: #fff;
            position: relative;
            box-shadow: 0 8px 16px 0 rgba(0, 3, 33, 0.1);
            height: 25vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 0 0 calc(31.9% - 20px); 
            margin-bottom: 20px; 
            aspect-ratio: 1 / 1; 
            overflow: hidden;
        }

        .bg:nth-child(odd) {
            background-color: #1e407c;
        }

        .bg:nth-child(even) {
            background-color: #001e44;
        }

        .bg:nth-child(3) {
            background: linear-gradient(180deg, rgba(30, 64, 124, 1) 0%, rgba(0, 30, 68, 1) 65%, rgba(0, 30, 68, 1) 100%);
        }

        .bg:nth-child(4) {
            background-color: rgba(0, 3, 33, 0.5);
            background-image: url(../../psu-edu-assets/images/power-facts/penn-state-tuition.jpg);
        }

        .bg:nth-child(6) {
            background-color: rgba(0, 3, 33, 0.5);
            background-image: url(../../psu-edu-assets/images/power-facts/data-digest.jpg);
        }

        .content {
            text-align: center;
        }

        .hl {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    --limestone-max-light: #f2f2f4;
    --creek-max-light: #edf8f7;
    --lion-max-shrine-light: #fdfbf5;
    --lions-max-roar-light: #fffaf2;
    --slate-max-light: #eef3f7;
    --white-out: $ffffff;
    font-family: Roboto,"Franklin Gothic Medium",Tahoma,sans-serif;
    -webkit-box-direction: normal;
    -webkit-box-flex: 0;
    flex: 0 0 31.9%;
    background-color: #fff;
    position: relative;
    box-shadow: 0 8px 16px 0 rgba(0,3,33,.1);
    color: #001e44;
    height: 25vw;
}

    `;

    render() {
        return html`
            <div class="card-wrap-outer">
                ${this.generateCard("Nearly 88,000 students", "#1e407c")}
                ${this.generateCardPercentage("58%", "Of students are Pennsylvania residents.", "#edf8f7")}
                ${this.generateCard("Students from 50 states and 140+ countries", "linear-gradient(180deg, rgba(30, 64, 124, 1) 0%, rgba(0, 30, 68, 1) 65%, rgba(0, 30, 68, 1) 100%)")}
                ${this.generateCardLink("Check out Undergraduate Admissions statistics", "https://admissions.psu.edu/apply/statistics/", "#001e44", "../../psu-edu-assets/images/power-facts/penn-state-tuition.jpg")}
                ${this.generateCard("Nearly 10,000 international students", "#1e407c")}
                ${this.generateCardPercentage("40%", "Of students are from diverse backgrounds.", "#edf8f7")}
                ${this.generateCard("7,900+ faculty across all campuses", "#001e44")}
                ${this.generateCard("775,000+ alumni", "#001e44")}
                ${this.generateCardLink("See Penn State's Data Digest dashboards", "https://datadigest.psu.edu/", "rgba(0, 3, 33, 0.5)", "../../psu-edu-assets/images/power-facts/data-digest.jpg")}
            </div>

        `;
    }

    generateCard(title, bgColor) {
        return html`
            <div class="bg" style="--bg-color: ${bgColor};">
                <div class="content">
                    <h3>${title}</h3>
                </div>
            </div>
        `;
    }

    generateCardPercentage(percentage, description, bgColor) {
        return html`
            <div class="hl" style="--bg-color: ${bgColor};">
                <div class="content">
                    <h3>${percentage}</h3>
                    <b></b>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }

    generateCardLink(title, link, bgColor, backgroundImage) {
        return html`
            <div class="bg" style="--bg-color: ${bgColor}; background-image: url(${backgroundImage});">
                <div class="content">
                    <a href="${link}" class="card-link">
                        <h3>${title}</h3>
                    </a>
                </div>
                <a href="${link}" class="card-link" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </a>
            </div>
        `;
    }
}

customElements.define('polaris-tile-fact', PolarisTileFact);
