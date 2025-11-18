const routes = {
    "/": "/src/pages/home.html",
    "/catalogue": "/src/pages/catalogue.html",
    "/products/:id": "/src/pages/productPage.html"
};

function matchRoute(path) {
    for (const route in routes) {
        const routeParts = route.split("/");
        const pathParts = path.split("/");

        if (routeParts.length !== pathParts.length) continue;

        let params = {};
        let matched = true;

        for (let i = 0; i < routeParts.length; i++) {
            const rp = routeParts[i];
            const pp = pathParts[i];

            if (rp.startsWith(":")) {
                params[rp.slice(1)] = pp;
                } else if (rp !== pp) {
                matched = false;
                break;
            }
        }

        if (matched) {
            return { page: routes[route], params };
        }
    }

    return { page: "/src/pages/notfound.html", params: {} };
}

export async function router() {
    const path = window.location.pathname;

    const { page, params } = matchRoute(path);
    const html = await fetch(page).then(r => r.text());

    document.querySelector("#app").innerHTML = html;

    window.routeParams = params;
}

export function navigate(path) {
    window.history.pushState({}, "", path);
    router();
}

window.addEventListener("popstate", router);
