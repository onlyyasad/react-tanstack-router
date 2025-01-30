import PrivateLayout from '@/Layouts/PrivateLayout/PrivateLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PrivateLayout/>
}
