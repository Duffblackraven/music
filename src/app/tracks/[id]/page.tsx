import Main from "@components/Main/Main";

type paramsIDType = {
    params: { id: string },
};

export default function PlaylistID({ params }: paramsIDType) {
    return (
        <Main playlistID={params.id} isFilter={false} isSideBar={false}/>
    );
};