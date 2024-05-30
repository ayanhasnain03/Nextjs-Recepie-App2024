import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div>
        <h1>This Page Not Found</h1>
        <Link href={`/`}>  Go To Home</Link>
    </div>
  )
}
export default NotFoundPage