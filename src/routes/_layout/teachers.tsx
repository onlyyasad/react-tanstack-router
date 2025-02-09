import TeachersPage from '@/pages/TeachersPage/TeachersPage'
import { TeacherFilters } from '@/types/teachers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/teachers')({
  component: RouteComponent,
  validateSearch: () => ({}) as TeacherFilters,
})

function RouteComponent() {
    return <TeachersPage routeId={Route.id}/>
  }
