import { useEffect, useState } from "react";

const useGetData = (url, userId) => {
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
    }, [userId])
    return {
        data,
        error,
        loading
    }
}

export default useGetData

const usePostData = () => {
    const [data, setData] = useState([])
    // const [error, setError] = useState(null)
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)
        // fetch(url)
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: 'values.title',
            body: 'values.body',
            textarea: 'values.textarea',
            // userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then(setData);
    }, [])
    return {
        data,
        // error,
        // loading
    }
}

// export default usePostData