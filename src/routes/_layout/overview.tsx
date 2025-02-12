import OverviewPage from '@/pages/OverviewPage/OverviewPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/overview')({
  component: RouteComponent,
})

function RouteComponent() {
  return <OverviewPage/>
}
