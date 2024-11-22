import { Card, CardBody, CardFooter } from "@nextui-org/react"
import type { Post as TPost } from "@/schemas"
import { DateDisplay } from "../DateDisplay/DateDisplay"

export type PostsProps = {
  post: TPost
}

export const Post = ({ post }: PostsProps) => (
  <Card className="mb-2 shadow-sm" data-testid='post'>
    <CardBody>
      <p>{post.message}</p>
    </CardBody>
    <CardFooter className='justify-start text-default-500 md:justify-end'>
      <div className="text-left md:w-40">

        <div>{post.username} &nbsp;

        <span className="text-tiny">
          <DateDisplay date={post.createdAt}/>
        </span>
        </div>
      </div>
    </CardFooter>
  </Card>
)
