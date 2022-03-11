
import Exercises from "./views/exercises.js";
import HealthyFoods from "./views/healthyFoods.js";
import Lifestyle from "./views/lifestyle.js";
import Quotes from "./views/quotes.js";
 

// Change Url Function
const pushURL = url => {
    history.pushState(null, null, url);
    router();
}

// Main Function controlling routes
const router = async () => {
    //Defining array of Routes
    const routes = [
        { path: '/' , view: HealthyFoods},
        { path: '/exercises' , view: Exercises},
        { path: '/lifestyle' , view: Lifestyle},
        { path: '/quotes' , view: Quotes}
    ]

    //Looping through Routes array
    const matched = routes.find(r=> r.path == location.pathname);
    
    if (!matched) {
        matched = {
            route: routes[0],
            isMatching: true
        }
    }
    const view = new matched.view();
    const innerHTML = await view.renderHTML();
    document.getElementById("mainPage").innerHTML = innerHTML;
};

//Controlling backward & forward navigation in Browser
window.addEventListener("popstate", router);

//Controlling Hyperlinks (naviagtion to & prevent refresh)
document.addEventListener("DOMContentLoaded", ()=> {
    document.body.addEventListener("click", (e)=> {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            pushURL(e.target.href)
        }
    })
    router();
});

