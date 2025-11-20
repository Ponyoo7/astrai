import { useAppContext } from '../../core/context/AppContext'
import { apiUrls } from '../../shared/constants'
import { useFetch } from './useFetch'

export const useChats = () => {
  const { user } = useAppContext()

  const { data, loading, error, setData } = useFetch(apiUrls.chats, {
    method: 'GET'
  })

  return {
    data: data?.filter(d => d.userId === user.id) ?? data, loading, error, setData
  }
}