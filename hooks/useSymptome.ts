import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const useSymptome = (symptomeId: string) =>{
    const {
        data,
        error,
        isLoading,
        mutate
    } = useSWR(symptomeId ? `/api/symptome/${symptomeId}` : null, fetcher)
        
    return {
        data,
        error,
        isLoading,
        mutate  
    }
}

export default useSymptome