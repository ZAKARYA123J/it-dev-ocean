import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/social-image.jpg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo} alt="Cruip Logo" width={90} height={32} />
    </Link>
  );
}
