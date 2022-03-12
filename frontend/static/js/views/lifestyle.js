import Abstract from "./viewClass.js";

export default class Lifestyle extends Abstract {
    constructor() {
        super();
        this.changeTitle("Lifestyle")
    }

    async renderHTML () {
        return `
            <h2>What is a healthy lifestyle?</h2>
            <h4>Good health</h4>
            <p>Good health is not just the absence of disease or illness, it is a state of complete physical, mental and social well-being.
            This means eating a balanced diet, getting regular exercise, avoiding tobacco and drugs and getting plenty of rest.
            Our bodies are like machines that require a balance of protein, carbohydrates, fat, vitamins, minerals and water to stay in good working order.
            Get the balance wrong and your health will suffer.
            A balanced diet means eating only as many calories as you use during the day.
            Any excess will be stored as fat if you eat more than you burn off.</p>
            <iframe id = "lifestyleVid" src="https://www.youtube.com/embed/Y8HIFRPU6pM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    }
}