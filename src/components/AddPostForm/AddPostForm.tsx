import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea } from '@nextui-org/react'
import { useState } from 'react'
import { Controller, type FieldErrors, useForm } from 'react-hook-form'
import { createPost } from '../../api/postsApi'
import { ErrorMessageWrapper } from '../ErrorMessageWrapper'
import { postSchema, type Post } from '../../schemas'

const defaultPost: Post = {
  message: '',
  username: '',
}
export const AddPostForm = () => {
  const [serverError, setServerError] = useState<string | null>(null)
  const { control, handleSubmit, reset, formState } = useForm<Post>({
    defaultValues: defaultPost,
    mode: 'all',
    resolver: zodResolver(postSchema),
  })

  const onSubmit = async (data: Post) => {
    const res = await createPost(data)
    if (res.success) {
      reset(defaultPost)
    } else {
      setServerError(res.message)
    }
  }

  const onError = (errors: FieldErrors) => {
    console.error(errors)
  }

  return (
    <form className='w-full min-w-72 md:w-[44rem]' onSubmit={handleSubmit(onSubmit, onError)}>
      <h2 className="mb-4 text-left font-bold">Add Post</h2>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <>
            <Input
              autoComplete="off"
              className="mb-2"
              isInvalid={!!formState.errors.username}
              errorMessage={
                <ErrorMessageWrapper>{formState.errors.username?.message}</ErrorMessageWrapper>
              }
              label="Name"
              type="text"
              {...field}
            />
          </>
        )}
      />

      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <Textarea
            autoComplete="off"
            className="mb-4"
            isInvalid={!!formState.errors.message}
            errorMessage={
              <ErrorMessageWrapper>{formState.errors.message?.message}</ErrorMessageWrapper>
            }
            label="Message"
            {...field}
          />
        )}
      />

      <Button color="primary" type="submit" fullWidth isDisabled={!formState.isValid}>
        Add Post
      </Button>

      {serverError && <p className='mt-6 rounded-lg bg-red-50 p-6 text-red-500'>
        {serverError}
      </p>}
    </form>
  )
}
