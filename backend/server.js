import app from "./app.js"; 
 // Load environment variables

const port = process.env.PORT || 4000;
const baseUrl = process.env.BASE_URL;

app.listen(port, () => {
  console.log(`Server is running on backend url `);
});