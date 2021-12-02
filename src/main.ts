import { app } from "./App";

const PORT = process.env.APP_PORT 
app.listen(PORT, () => console.log(`app listen on port ${PORT}`))