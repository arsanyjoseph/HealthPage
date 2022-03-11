import Abstract from "./viewClass.js";

export default class Exercises extends Abstract {
    constructor() {
        super();
        this.changeTitle("exercises")
    }

    async renderHTML () {
        return `
            <h2>10 Exercises to Tone Every Inch of Your Body</h2>
            <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/7040-hispanic_female_exercise-1296x728-header.jpg?h=1528" alt = "exercise"/>
            <h3>Stick to the basics</h3>
            <p>We know daily exercise is good for optimizing health. But with so many options and limitless information available, it’s easy to get overwhelmed with what works. But not to worry. We’ve got your back (and body)!
            Check out the 10 exercises you can do for ultimate fitness. Combine them into a routine for a workout that’s simple but powerful and sure to keep you in shape for the rest of your life.
            After 30 days — although you can also do them just twice a week — you should see improvements in your muscular strength, endurance, and balance.
            Plus, notice a difference in how your clothes fit — winning!</p>
            <h4><a href = "https://www.healthline.com/health/fitness-exercise/10-best-exercises-everyday#start-here" target = _blank>Read more</a></h4>
        `
    }
}