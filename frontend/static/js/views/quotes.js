import Abstract from "./viewClass.js";

export default class Quotes extends Abstract {
    constructor() {
        super();
        this.changeTitle("Quotes")
    }

    async renderHTML () {
        return `
        <iframe width="200" height="200" src="https://www.youtube.com/embed/wxEUbbCceHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/22xlNYB9cP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/uNe2LOlFqT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/wZl_EqC5Sgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/BJ0NnBy2EvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/NvAfOLV_JFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe width="200" height="200" src="https://www.youtube.com/embed/kPvJ_558044" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `
    }
}