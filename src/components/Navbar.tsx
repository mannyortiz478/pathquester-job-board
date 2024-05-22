import logo from "@/assets/path-quester-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} width={50} height={50} alt="PathQuester logo" />
          <span className="text-xl font-bold tracking-tight text-secondary-foreground">Job Board</span>
        </Link>
        <Button asChild className="bg-muted-foreground">
          <Link href="https://www.pathquester.com/">Need a Career Change?</Link>
        </Button>
      </nav>
    </header>
  );
}
