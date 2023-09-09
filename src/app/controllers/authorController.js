
const authorController = {
    getAuthors: async (req, resp) => {
        resp.render('index', { message: "Auth", docs: { envc: "Author" } });
    }
}
module.exports = authorController;