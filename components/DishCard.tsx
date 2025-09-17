"use client";

import { Dish } from "@/stores/dishesStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DishCard({ response }: { response: Dish[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {response.map((dish) => (
        <Card className="shadow-md" key={dish.name}>
          <CardHeader>
            <CardTitle>{dish.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2 text-sm">
              {dish.description}
            </p>
            <h3 className="mb-1 font-semibold">Cuisine:</h3>
            <p className="text-muted-foreground mb-2 text-sm">{dish.cuisine}</p>
            <h3 className="mb-1 font-semibold">Spiciness:</h3>
            <p className="text-muted-foreground mb-2 text-sm">
              {dish.spiciness}
            </p>
            <h3 className="mb-1 font-semibold">Diet:</h3>
            <p className="text-muted-foreground mb-2 text-sm">{dish.diet}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
