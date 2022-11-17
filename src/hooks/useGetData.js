import { useEffect, useState } from "react";

const useGetData = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [])
    return {
        data,
        error,
        loading
    }
}

export default useGetData

export function getUserCopy(userId, tmp){
    return tmp.data.find(user => user.id == userId)
  }