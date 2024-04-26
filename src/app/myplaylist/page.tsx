"use client"

import { useAppSelector } from "@/types/hooks";
import Main from "@components/Main/Main";
import { useRouter } from "next/navigation";

export default function MyPlaylistMain() {

    const router = useRouter();
    const authState = useAppSelector((state) => state.auth.authState);
    if (!authState) {
        router.push('/signin');
        return null;
    }

    return (
        <Main playlistID="liked" isFilter={false} isSideBar={false} />
    );
}