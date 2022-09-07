import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
import DetailPage from "./pages/detail-post";

const router = new Navigo("/", { linksSelector: "a" })
const print = function(content, id) {
    // @ts-ignore
    document.querySelector("#app").innerHTML = content.render(id);
}

router.on({
    "/": function() {
        print(HomePage)
    },
    "/about": function() {
        print(AboutPage)
    },
    "/news": function() {
        print(NewsPage)
    },
    "/news/:id": function(value) {
        // @ts-ignore
        console.log(value.data.id);
        print(DetailPage, value.data.id);
    }
})

router.resolve()