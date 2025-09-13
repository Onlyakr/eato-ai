"use client";

import { Dish } from "@/stores/dishesStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DishCard({ response }: { response: Dish[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {response.map((dish) => (
        <Card key={dish.name} className="shadow-md">
          <CardHeader>
            <CardTitle>{dish.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-gray-600">{dish.description}</p>
            <h3 className="mb-1 font-semibold">Cuisine:</h3>
            <p className="mb-2 text-sm text-gray-600">{dish.cuisine}</p>
            <h3 className="mb-1 font-semibold">Spiciness:</h3>
            <p className="mb-2 text-sm text-gray-600">{dish.spiciness}</p>
            <h3 className="mb-1 font-semibold">Diet:</h3>
            <p className="mb-2 text-sm text-gray-600">{dish.diet}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
