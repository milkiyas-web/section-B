
import axios from "axios";

export const createTask = async (taskData) => {
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/api/task`, taskData);
}