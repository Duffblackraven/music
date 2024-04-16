import { trackType } from "@/types/types";

export const sortTracksByReleaseDate = (tracks: trackType[], order: string) => {
    return tracks.sort((a, b) => {

        const dateA = new Date(a.release_date).getTime();
        const dateB = new Date(b.release_date).getTime();

        switch (order) {
            case 'сначала новые':
                return dateB - dateA;
            case 'сначала старые':
                return dateA - dateB;
            default:
                return 0;
        }
    });
};