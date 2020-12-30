import React from 'react'
import Hello, { IsLoading } from "../components/Hello"



export default {
  title: 'Hello Story',
  component: Hello
}

export function HelloJoe() {
  return (
    <Hello name="Joe Do" />
  )
}

export function TestUser() {
  return (
    <Hello name='Test User' />
  )
}

export function NotLoading() {
  return (
    <IsLoading condition={false} />
  )
}
export function Loading() {
  return (
    <IsLoading condition={true} />
  )
}