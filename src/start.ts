import app from "./Server";

// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Express server started on port ${port}.`);
});
