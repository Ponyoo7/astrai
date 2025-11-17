import { useEffect, useState } from "react"

export const useFetch = (url, options) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const send = async (url, options) => {
    setLoading(true)

    let data
    let error

    try {
      const res = await fetch(url, options)
      data = await res.json()

      setData(data)
      setLoading(false)
    } catch (e) {
      error = e

      console.error(error)
      setError(error)
    } finally {
      setLoading(false)

      return {
        data,
        error
      }
    }
  }

  useEffect(() => {
    if (!url || !options) return

    send(url, options)
  }, [])

  return {
    send,
    data,
    error,
    loading,
    setData
  }
}