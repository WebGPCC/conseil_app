import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useAddProduct = () =>{
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR('/api/getProduct/', fetcher)
        
    return {
        data,
        error,
        isLoading,
        mutate  
    }
}

export default useAddProduct