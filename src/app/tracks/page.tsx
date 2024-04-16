import Main from "@components/Main/Main";

type paramsIDType = {
    params: { id: string },
};

export default function PlaylistMain({ params }: paramsIDType) {
    return (
        <Main playlistID={params.id} />
    );
}