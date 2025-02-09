import TeachersPage from '@/pages/TeachersPage/TeachersPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/teachers')({
  component: RouteComponent,
  validateSearch: () => ({}) as UserFilters,
})

function RouteComponent() {
    return <TeachersPage routeId={Route.id}/>
  }
