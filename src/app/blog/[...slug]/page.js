import React from 'react'

export default function blogSlug({params}) {
    const slugs= params.slug;
    console.log(slugs)
  return (
    <div>
      this is blogSlug page {slugs.join("/")}
    </div>
  )
}
