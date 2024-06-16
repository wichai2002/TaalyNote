import api from "../api";

// import interface
import IDailyNote from "@/interfaces/daily";


export default function daliyAPI() {
    const fetchLastDailyNote = async () => {
        const res = await api.get("/note/latest/")
        return res.data
    }

    const RecordDailyNote = async (payload: IDailyNote) => {
        const res = await api.post(
            "/note",
            payload
        )
        return {
            status: res.status,
            data: res.data
        }
    }
    
    return { fetchLastDailyNote, RecordDailyNote }
}