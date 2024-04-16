import { trackType } from "@/types/types";

export const getUniqueValues = (playList: trackType[], property: keyof trackType) => {
    return playList
        ? Array.from(new Set(playList.map((track: trackType) => track[property])))
            .filter((value) => typeof value === "string" && value !== "-")
            .map((value) => value as string)
            .sort((a, b) => a.localeCompare(b))
        : [];
};