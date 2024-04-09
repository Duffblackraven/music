import { trackType } from "@/types/types"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TracksStateType = {
    track: null | trackType,
    playList: trackType[]
    isPlaying: boolean,
    isShuffle: boolean,
    shufflePlayList: trackType[],
    searchPlaylist: trackType[],
    isSearch: boolean,
    filteredPlaylist: trackType[],
    activeFilters: {
        authors: Array<string>,
        release_dates: null | string,
        genres: Array<string>,
        searchValue: string
    }
};

const initialState: TracksStateType = {
    track: null,
    playList: [],
    isPlaying: false,
    isShuffle: false,
    shufflePlayList: [],
    searchPlaylist: [],
    isSearch: false,
    filteredPlaylist: [],
    activeFilters: {
        authors: [],
        release_dates: "default",
        genres: [],
        searchValue: ""
    }
};

const switchTrack = (direction: number) => {
    return (state: TracksStateType) => {
        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;
        let newIndex = currentTracks.findIndex(item => item.id === state.track?.id) + direction;

        newIndex = (newIndex + currentTracks.length) % currentTracks.length;

        state.track = currentTracks[newIndex];
        state.isPlaying = true;
    }
};

const tracksSlice = createSlice({
    name: 'tracks',

    initialState,

    reducers: {
        // playlist
        setCurrentTrack: (state, action) => {
            state.track = action.payload;
            state.isPlaying = true;
        },
        setPlayList: (state, action) => {
            state.playList = action.payload;
        },
        // controls
        setPlay: (state) => {
            state.isPlaying = true
        },
        setPause: (state) => {
            state.isPlaying = false
        },
        setNextTrack: switchTrack(1),
        setPrevTrack: switchTrack(-1),
        // features
        setShuffle: (state, action) => {
            state.isShuffle = action.payload
            if (action.payload) {
                const playList = [...state.playList]
                playList.sort(() => Math.random() - 0.5);
                state.shufflePlayList = playList
            }
        },
        // search bar
        setSearchPlayList: (state, action) => {
            state.searchPlaylist = action.payload;
        },
        setIsSearchTrue: (state) => {
            console.log('true');
            state.isSearch = true;
        },
        setIsSearchFalse: (state) => {
            console.log('false');
            state.isSearch = false;
        },
        // filters
        setActiveFilter: (state, action: PayloadAction<{ authors?: string[], release_dates?: string, genres?: string[], searchValue?: string }>) => {
            state.activeFilters = {
                authors: action.payload.authors || state.activeFilters.authors,
                release_dates: action.payload.release_dates || null,
                genres: action.payload.genres || state.activeFilters.genres,
                searchValue: action.payload.searchValue || state.activeFilters.searchValue,
            };
            // console.log('active filters:');
            // console.log('authors: ' + state.activeFilters.authors);
            // console.log('release_dates: ' + state.activeFilters.release_dates);
            // console.log('genres: ' + state.activeFilters.genres);
            state.filteredPlaylist = state.playList.filter((track) => {
                const isAuthors = state.activeFilters.authors.length > 0 ? state.activeFilters.authors.includes(track.author) : true;
                const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;
                return isAuthors && isGenres
            })
        },
        clearActiveFilters: (state) => {
            state.activeFilters = {
                authors: [],
                release_dates: "default",
                genres: [],
                searchValue: "",
            };
            // console.log('active filters:');
            // console.log('authors: ' + state.activeFilters.authors);
            // console.log('release_dates: ' + state.activeFilters.release_dates);
            // console.log('genres: ' + state.activeFilters.genres);
        },
    }
})

export const {
    // playlist
    setCurrentTrack, setPlayList,
    // controls
    setPlay, setPause, setNextTrack, setPrevTrack,
    // features
    setShuffle,
    // search bat
    setSearchPlayList, setIsSearchTrue, setIsSearchFalse,
    // filters
    setActiveFilter, clearActiveFilters
} = tracksSlice.actions;
export const tracksReducer = tracksSlice.reducer;