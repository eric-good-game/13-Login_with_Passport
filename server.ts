import app from "./src/app";

const port = process.env.POST || 8080;

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

server.on("error", (error) => console.log(`Server error: ${error}`));