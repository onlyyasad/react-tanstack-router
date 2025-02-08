import TeachersPage from '@/pages/TeachersPage/TeachersPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/teachers')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TeachersPage/>
}
