import { apiUrls } from '../../shared/constants'
import { useFetch } from './useFetch'

export const useChats = () => {
  const { data, loading, error, setData } = useFetch(apiUrls.chats, {
    method: 'GET'
  })

  return {
    data, loading, error, setData
  }
}