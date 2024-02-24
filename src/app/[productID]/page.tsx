import React from 'react'
import { $path } from 'next-typesafe-url'
import Link from 'next/link'

type Props = {}

function Page({}: Props) {
  return (
    <Link
      href={$path({
        route: '/[productID]',
        routeParams: {
          something: 'hmm',
        },
        searchParams: {
          hmm: 'hmm',
        },
      })}
    />
  )
}

export default Page
