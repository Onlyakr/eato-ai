import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logs } from "lucide-react";

import Link from "next/link";
import * as motion from "motion/react-client";

const AuthButtons = () => {
  return (
    <>
      {/* Mobile */}
      <div className="flex items-center gap-4 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Logs className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/signin">Sign in</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/signup">Sign up</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Desktop */}
      <div className="hidden items-center gap-4 md:flex">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.8, rotate: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="/signin"
            className={`${buttonVariants({ variant: "outline" })}`}
          >
            Sign in
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.8, rotate: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="/signup"
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Sign up
          </Link>
        </motion.div>
      </div>
    </>
  );
};
export default AuthButtons;
