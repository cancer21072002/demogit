import Footer from "../components/Footer"
import Header from "../components/Header"
import newsList from "../data"

const DetailPage = {
    render(id) {
        const post = newsList.find(function(item) {
            return item.id == id
        })
        console.log(post);
        return /*html*/ `
            <header>
                ${Header.render()}
            </header>
            <main>
                <section class="grid grid-cols-3 gap-8">
                    <div>
                        <img src="${
// @ts-ignore
                        post.image}" alt="" class="w-full" />
                        <h3>${
// @ts-ignore
                        post.title}</h3>
                        <p>${
// @ts-ignore
                        post.desc}</p>
                    </div>
                </section>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
        
        `
    }
}
export default DetailPage