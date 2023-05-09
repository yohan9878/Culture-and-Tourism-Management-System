import axios from "axios"


const apiConfig = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json"
    }
})

export default apiConfig