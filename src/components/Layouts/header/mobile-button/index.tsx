import Link from "next/link"
import Image from "next/image";

const MobileButton = () => {
    return (
        <Link href={"/"} className="ml-2 max-[430px]:hidden min-[375px]:ml-4">
          <Image
            src={"/images/logo/logo-icon.svg"}
            width={32}
            height={32}
            alt=""
            role="presentation"
          />
        </Link>
    );
}

export default MobileButton;