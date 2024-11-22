import { render } from "@testing-library/react"
import type { Post as TPost } from "@/schemas"
import { Post } from "./Post"

describe("Post component", () => {
  const mockPost: TPost = {
    _id: "1",
    message: "This is a test message",
    username: "testuser",
  }

  it("renders the post message", () => {
    const { getByText } = render(<Post post={mockPost} />)
    expect(getByText("This is a test message")).toBeInTheDocument()
  })

  it("renders the post username", () => {
    const { getByText } = render(<Post post={mockPost} />)
    expect(getByText("testuser")).toBeInTheDocument()
  })
})
