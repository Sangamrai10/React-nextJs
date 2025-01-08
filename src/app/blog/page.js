import React from 'react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div>
      this is blog page
      <Link href='/blog/posts'>posts</Link>
    </div>
  )
}
