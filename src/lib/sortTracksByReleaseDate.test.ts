import { sortTracksByReleaseDate } from "./sortTracksByReleaseDate";

const data = [
    {
        "id": 8,
        "name": "Chase",
        "author": "Alexander Nakarada",
        "release_date": "2005-06-11",
        "genre": "Классическая музыка",
        "duration_in_seconds": 205,
        "album": "Chase",
        "logo": null,
        "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Alexander_Nakarada_-_Chase.mp3",
        "stared_user": [
            {
                "id": 14,
                "username": "user",
                "first_name": "",
                "last_name": "",
                "email": "user@mail.ru"
            },
        ]
    },
    {
        "id": 10,
        "name": "Sneaky Snitch",
        "author": "Kevin Macleod",
        "release_date": "2022-04-16",
        "genre": "Классическая музыка",
        "duration_in_seconds": 305,
        "album": "Sneaky Snitch",
        "logo": null,
        "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Kevin_Macleod_-_Sneaky_Snitch.mp3",
        "stared_user": [
            {
                "id": 5,
                "username": "ilush",
                "first_name": "",
                "last_name": "",
                "email": "as@as.com"
            },
        ]
    },
    {
        "id": 11,
        "name": "Secret Garden",
        "author": "Mixkit",
        "release_date": "1972-06-06",
        "genre": "Классическая музыка",
        "duration_in_seconds": 324,
        "album": "Secret Garden",
        "logo": null,
        "track_file": "https://skypro-music-api.skyeng.tech/media/music_files/Mixkit_-_Secret_Garden.mp3",
        "stared_user": [
            {
                "id": 5,
                "username": "ilush",
                "first_name": "",
                "last_name": "",
                "email": "as@as.com"
            },
        ]
    },
];

const dataNew = [
    data[1], // Sneaky Snitch - 2022-04-16
    data[0], // Chase - 2005-06-11
    data[2], // Secret Garden - 1972-06-06
];

const dataOld = [
    data[2], // Secret Garden - 1972-06-06
    data[0], // Chase - 2005-06-11
    data[1], // Sneaky Snitch - 2022-04-16
];

describe('функция сортировки треков по дате выхода', () => {
    it('правильно сортирует треки по дате выхода по типу сортировки; тип default', () => {
        expect(sortTracksByReleaseDate(data, 'Default')).toStrictEqual(data);
    });
    it('правильно сортирует треки по дате выхода по типу сортировки; тип New first', () => {
        expect(sortTracksByReleaseDate(data, 'сначала новые')).toStrictEqual(dataNew);
    });
    it('правильно сортирует треки по дате выхода по типу сортировки; тип Old first', () => {
        expect(sortTracksByReleaseDate(data, 'сначала старые')).toStrictEqual(dataOld);
    });
});