import axios from "axios";
import { useEffect, useState } from "react"

export const GetAttachments = () => {

    const [attachments, setAttachments] = useState([])

    const getAttachments = async () => {

        const apiUrl = process.env.REACT_APP_API_URL
        
        try {
            let res = await axios.get(
                `${apiUrl}/document/options`  
            )
            setAttachments(res?.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAttachments()
    }, [])

    return attachments
}