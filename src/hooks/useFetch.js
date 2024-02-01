import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch (url) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        refetch({
            params: {
                _limit: 10
            }
        })
    }, [])

    function refetch (config = {}) {
        setIsLoading(true)
        return axios.get(url, config)
            .then(function (response) {
                // handle success
                setData(response.data)
                if (error) {
                    setError(null)
                }
            })
            .catch(function (error) {
                // handle error
                setError(error)
            })
            .finally(function () {
                setIsLoading(false)
            })
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}