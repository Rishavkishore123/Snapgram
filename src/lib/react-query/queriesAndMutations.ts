import { INewUser,INewPost } from '@/types'
import{
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
    QueryClient,

} from '@tanstack/react-query'

import {createPost, createUserAccount,  signInAccount, signOutAccount, getRecentPosts } from '../appwrite/api'
import { Query_KEYS } from './queryKeys'







export const useCreateUserAccount =()=>{
    return useMutation({
        mutationFn: (user: INewUser)=> createUserAccount(user)
    })
}

export const useSignInAccount =()=>{
    return useMutation({
        mutationFn: (user: {
            email: string; 
            password: string
        })=> signInAccount(user)
    })
}
export const useSignOutAccount =()=>{
    return useMutation({
        mutationFn:  signOutAccount
    })
}

export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (post: INewPost) => createPost(post),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [Query_KEYS.GET_RECENT_POSTS]
        });
      },
    });
  };

export const useGetrecentPosts= ()=>{
    return useQuery({
        queryKey: [Query_KEYS.GET_RECENT_POSTS],
        queryFn: getRecentPosts,
    })
}

