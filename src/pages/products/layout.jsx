import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </>
  )
}