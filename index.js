const app = require("./app");
const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => console.log(`Server listening on port ${APP_PORT}`));