import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useProduct = (productId : string) =>{
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR(productId ? `/api/produit/${productId}` : null, fetcher)
        
    return {
        data,
        error,
        isLoading,
        mutate  
    }
}

export default useProduct