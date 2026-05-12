"use client";

import Link from "next/link";

const Navlink = ({ href }) => {
    return (
        <div>
             <li>
                        <Link href={href} color="foreground" className="text-sm font-medium">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link href={href} color="foreground" className="text-sm font-medium">
                            all books
                        </Link>
                    </li>
        </div>
    );
};

export default Navlink;