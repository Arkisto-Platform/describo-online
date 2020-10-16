export function setupOnedriveRoutes({ server }) {
    server.post("/user/onedrive/configuration", async (req, res, next) => {
        console.log(req.body);
        res.send();
        next();
    });
}
