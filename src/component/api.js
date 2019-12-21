import axios from "axios";
export const MediumApi = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Authentication": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU3NjczNTY3Nn0.Kn6_po8riXsQBvUwnZOggga61HOGjP8VtuhX1dEFUKE"
    }
})