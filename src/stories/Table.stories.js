import React from 'react'
import Table from "../components/Table";
// decorator import
import { withKnobs, object } from '@storybook/addon-knobs'



export default {
  title: 'Table component',
  component: Table,
  decorators: [withKnobs]
}

const data = [
  { name: 'Abu Bakr', course: 'Patience' },
  { name: "Umar", course: 'Bravery' },
  { name: "Usman", course: 'Shyness' },
  { name: "Ali", course: 'Wisdom' }
]

export function ShowStudentData() {
  return (
    <Table data={object('data', data)} />
  )
}

export function EmptyStory() {
  return (
    <Table />
  )
}