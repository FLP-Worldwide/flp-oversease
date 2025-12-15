import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <Link href="/" className="text-xl font-bold text-primary">
        FLP Overseas
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="jobs">Jobs</Link>
        <Link href="employers">Employers</Link>
        <Link href="contact">Contact</Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
