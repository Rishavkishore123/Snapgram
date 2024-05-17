import PostForm from '@/components/forms/PostForm'
import React from 'react'

const CreatePost = () => {
  return (
    <div className='flex flex-1'>
      <div className='common-container'>
        <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
          <img 
          src="/public/assets/icons/add-post.svg"
          width ={15}
          height= {15}
          alt= "add"
          />
          <h2 className='h3-bold md:h2-bold text-left w-full' >Create Posts</h2>
        </div>
        <PostForm />
      </div>
    </div>
  )
}

export default CreatePost