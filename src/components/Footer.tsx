import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/path-quester-logo.png";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
          <Link href="https://www.pathquester.com/" className="flex items-center gap-1">
          <Image src={logo} width={50} height={50} alt="PathQuester logo" />
          <span className="text-xl font-bold tracking-tight text-secondary-foreground">PathQuester</span>
        </Link>
        <p className="text-sm text-muted-foreground">
              Helping you find your career or leveraging your career
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-destructive">
          © {new Date().getFullYear()} Achievify Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
