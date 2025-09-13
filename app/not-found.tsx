import { buttonVariants } from "@/components/ui/button";

import AppLayout from "@/components/layout/AppLayout";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Not found</h1>
        <p className="text-lg text-gray-500">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className={`${buttonVariants({ variant: "destructive" })}`}
        >
          Go to home
        </Link>
      </div>
    </AppLayout>
  );
};
export default NotFoundPage;
