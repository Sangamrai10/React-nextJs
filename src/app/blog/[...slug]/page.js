import React from 'react'

export default async function blogSlug({params}) {
    const slugs= await params.slug;
    console.log(slugs)
  return (
    <div>
      blog by slug
    </div>
  )
}