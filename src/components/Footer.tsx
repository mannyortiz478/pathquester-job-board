import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-secondary-foreground">PathQuester</h3>
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
