export type SetIsLoadingType=ReturnType<typeof setIsLoading>
export const setIsLoading =(isLoading:boolean)=>{
    return {
        type:"SET-IS-LOADING",
        payload:{
           isLoading
        }
    }as const
}
