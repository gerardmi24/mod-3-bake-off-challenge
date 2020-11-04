document.addEventListener('DOMContentLoaded', () => {
//console.log("🥧")
const BASEURL = "https://localhost:3000/bakes/"
// 1. **When the page first loads**, all the bakes should
// display in the sidebar. The first bake should show
// in the detail view (see deliverable 2).

const fetchBakes = () => {
    fetch(BASEURL)
    .then(resp => resp.json())
    .then(bakesObj => console.log(bakesObj));
}



fetchBakes();

})

// 2. **When a bake is clicked in the sidebar**, the details for
// the bake should show up in the detail area.
// 3. When the "Make New Bake" button is clicked, a popup (modal)
// will display a form (this part is already done for you). **When this
// form is submitted**, a new bake should be created in the backend
// and added to the list of bakes displayed in the sidebar.