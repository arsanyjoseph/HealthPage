// Change Url Function
const pushURL = url => {
    history.pushState(null, null, url);
    router();
}

// Main Function controlling routes
const router = async () => {
    //Defining array of Routes
    const routes = [
        { path: '/' , view: ()=> console.log('healthyfoods')},
        { path: '/exercises' , view: ()=> console.log('exercises')},
        { path: '/lifestyle' , view: ()=> console.log('lifestyle')},
        { path: '/quotes' , view: ()=> console.log('quotes')}
    ]

    //Looping through Routes array
    const matchRoutes = routes.map(route => {
        return {
            route: route,
            isMatching: location.pathname === route.path
        };
    });

    //Finding matching route with current URL
    let matched = matchRoutes.find(matchRoutes => matchRoutes.isMatching ===true)
    if (!matched) {
        matched = {
            route: routes[0],
            isMatching: true
        }
    }
    console.log(matched)
};

//Controlling backward & forward navigation in Browser
window.addEventListener("popstate", router)

//Controlling Hyperlinks (naviagtion to & prevent refresh)
document.addEventListener("DOMContentLoaded", ()=> {
    document.body.addEventListener("click", (e)=> {
        e.preventDefault();
        pushURL(e.target.href)
    })
    router();
})