import Container from "@/components/ui/Container";
import MobileMenu from "./MobileMenu";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-800
        bg-background/80
        backdrop-blur-xl
      "
    >
      <Container>

        <div className="flex h-20 items-center justify-between">

          <NavLogo />

          <div className="hidden md:block">
  <NavLinks />
</div>

<MobileMenu />

        </div>

      </Container>
    </header>
  );
}