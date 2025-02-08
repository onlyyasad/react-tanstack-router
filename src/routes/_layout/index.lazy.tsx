import { Button } from '@/components/ui/button'
import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/"!
      <Button asChild>
        <Link to='/teachers'>
        Teachers
        </Link>
      </Button>
    </div>
  )
}
