
const bookController = {
    getAuthors: async (req, resp) => {
        resp.render('index', { message: "Boook", docs: { envc: "Book" } });
    }
}
module.exports = bookController;