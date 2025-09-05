"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/en"); // replace is better than push here
    }, [router]);

    return null; // nothing is rendered
}
