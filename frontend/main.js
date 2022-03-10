const router = async () => {
    const routes = [
        { path: '/' , view: ()=> console.log('healthyfoods')},
        { path: '/exercises' , view: ()=> console.log('exercises')},
        { path: '/lifestyle' , view: ()=> console.log('lifestyle')},
        { path: '/quotes' , view: ()=> console.log('quotes')}
    ]

    const matchRoutes = routes.map(route => {
        return {
            route: route,
            isMatching: location.pathname === route.path
        };
    });
    let matched = matchRoutes.find(matchRoutes => matchRoutes.isMatching ===true)
    if (!matched) {
        matched = {
            route: routes[0],
            isMatching: true
        }
    }
    console.log(matched)
};

document.addEventListener("DOMContentLoaded", ()=> {
    router();
})