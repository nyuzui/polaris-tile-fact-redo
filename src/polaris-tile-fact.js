import { LitElement, html, css } from 'lit';

class PowerFactsSection extends LitElement {
    static styles = css`
        :host {
            display: block;
        }

        html, body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background-color: #ededed;
            height: 100%;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            gap: 16px 16px;
            max-width: max-content;
            grid-template-areas: ". . . " ". . . " ". . . ";
        }

        .grid-item-type1,
        .grid-item-type2,
        .grid-item-type3,
        .grid-item-type4,
        .grid-item-photo {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 20px;
            box-sizing: border-box;
            min-width: 350px; /* Set your desired min-width */
            min-height: 350px; 
        }

        .grid-item-type1 {
            background-color: #1e407c;
        }

        .grid-item-type2 {
            background-color: #001E44;
        }

        .grid-item-type3 {
            background-color: #ffffff;
            color: #001E44;
        }

        .grid-item-type4 {
            background-image: linear-gradient(#1e407c, #001E44);
        }

        .grid-item-photo:nth-child(4) {
            background-image: url('https://brand.psu.edu/images/gallery/AbingtonFem_2.jpg');
            background-color: rgba(0, 3, 33, 0.5);
        }

        .grid-item-photo:nth-child(9) {
            background-image: url('https://bloximages.newyork1.vip.townnews.com/psucollegian.com/content/tncms/assets/v3/editorial/0/39/03938e4a-7258-11ec-be94-63f188e5671c/61dc9de06d14b.image.jpg?resize=1396%2C929');
            background-color: rgba(0, 3, 33, 0.5);
        }

        .grid-item h3 {
            padding: 0 3.75rem;
            font-size: 1.75rem;
            font-weight: 700;
            margin-top: 0;
        }

        .grid-item a {
            text-align: center;
            margin: 0;
            font-size: 16px;
        }

        .grid-item p {
            font-size: 1rem;
            line-height: 1.5rem;
            width: 94%;
        }

        .grid-item h3 {
            padding: 0 3.75rem;
            font-size: 1.75rem;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 0.5rem;
        }

        .grid-item h4 {
            padding: 0 3.75rem;
            font-size: 1.2rem;
            font-weight: 400; 
            margin-top: 0;
            margin-bottom: 0.5rem;
        }

        .grid-item p {
            font-size: 1rem;
            line-height: 1.5rem;
            width: 94%;
            margin-top: 0;
        }

        .power-facts-wrap {
            padding-top: 2.75rem;
            padding-bottom: 6.25rem;
            background-color: #EEF3F7;
            height: 100vh;
            margin: auto;
            max-width: 1200px;
        }

        .container {
            width: 100%;
            max-width: 800px;
            margin: auto;
        }

        .power-facts {
            text-align: center;
        }

        .double-slash {
            margin-bottom: 2rem;
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            gap: 16px 16px;
            max-width: 650px;
            grid-template-areas: ". . . " ". . . " ". . . ";
        }

        .grid-item {
            background-size: cover;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            color: white;
            flex-direction: column;
            padding: 20px;
            box-sizing: border-box;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            font-family: sans-serif;
        }

        .grid-item-type1 {
            background-color: #1e407c;
        }

        .grid-item-type2 {
            background-color: #001E44;
        }

        .grid-item-type3 {
            background-color: #ffffff;
            color: #001E44;
        }

        .grid-item-type4 {
            background-image: linear-gradient(#1e407c, #001E44);
        }

        .grid-item-photo {
            background-size: cover;
            position: relative; 
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            padding: 20px;
            box-sizing: border-box;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            position: relative;
        }

        .grid-item-photo::before {
            content: ""; 
            position: absolute; 
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1; 
        }

        .grid-item-photo a {
            color: white; 
            text-decoration: none; 
            z-index: 2; 
            font-family: sans-serif;
            padding: 0 3.75rem;
            font-size: 1.75rem;
            font-weight: 700;
            margin-top: 0;


        }

        .grid-item h3 {
            padding: 0 3.75rem;
            font-size: 1.75rem;
            font-weight: 700;
            margin-top: 0;

        }

        .grid-item a {
            text-align: center;
            margin: 0;
            font-size: 16px;
        }

        .grid-item p {
            font-size: 1rem;
            line-height: 1.5rem;
            width: 94%;
        }

        .grid-item h3.line {
            margin: 0.5rem 0; 
        }
    `;

    render() {
        return html`
            <section class="power-facts-wrap">
                <div class="container">
                    <div class="power-facts">
                        <h2 class="double-slash">Our community of Penn Staters //</h2>
                        <div class="grid-container">
                            ${this.generateCard("Nearly 88,000+ students", "grid-item-type1")}
                            ${this.generateCardPercentage("58% ", "Of students are Pennsylvania residents.", "grid-item-type3")}
                            ${this.generateCard("Students from 50 states and 140+ countries", "grid-item-type4")}
                            ${this.generateCardLink("Check out Undergraduate Admissions statistics", "https://admissions.psu.edu/apply/statistics/", "grid-item-photo", "https://www.psu.edu/psu-edu-assets/images/power-facts/penn-state-tuition.jpg")}
                            ${this.generateCard("Nearly 10,000 international students", "grid-item-type1")}
                            ${this.generateCardPercentage("40% ", "Of students are from diverse backgrounds.", "grid-item-type3")}
                            ${this.generateCard("7,900+ faculty across all campuses", "grid-item-type2")}
                            ${this.generateCard("759,000+ alumni", "grid-item-type2")}
                            ${this.generateCardLink("See Penn State's Data Digest dashboards", "https://datadigest.psu.edu/", "grid-item-photo", "https://www.psu.edu/psu-edu-assets/images/power-facts/data-digest.jpg")}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    generateCard(title, type) {
        return html`
            <div class="grid-item ${type}">
                <h3>${title}</h3>
            </div>
        `;
    }

    generateCardPercentage(percentage, text, type) {
        return html`
            <div class="grid-item ${type}">
                <h3>${percentage}</h3>    
                <h4 class="line">____________________________</h4>    
                <p>${text}</p>
            </div>
        `;
    }

    generateCardLink(title, link, type, imageUrl) {
        return html`
            <div class="grid-item-photo ${type}" style="background-image: url('${imageUrl}');">
                <a href="${link}" class="card-link">
                    <h3>${title}</h3>
                </a>
            </div>
        `;
    }
}

customElements.define('power-facts-section', PowerFactsSection);
