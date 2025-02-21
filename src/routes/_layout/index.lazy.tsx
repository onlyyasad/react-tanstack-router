import { Button } from "@/components/ui/button";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createLazyFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto">
      <div>
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-auto items-center justify-center p-6">
                      <div>
                        <img src="https://images.pexels.com/photos/1403653/pexels-photo-1403653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Button asChild>
        <Link to="/teachers">Teachers</Link>
      </Button>
    </div>
  );
}
