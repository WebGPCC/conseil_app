import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useSymptomes = () =>{
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR('/api/symptome',fetcher)
        
    return {
        data,
        error,
        isLoading,
        mutate  
    }
}

export default useSymptomes