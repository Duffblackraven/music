const API_URL = "https://skypro-music-api.skyeng.tech/catalog/";
const TRACK_ALL = "track/all/";
const SELECTION = "selection/"

export async function getTracks(playlistNumber: number | null) {
    try {
        const response = await fetch(API_URL + (playlistNumber ? SELECTION + playlistNumber : TRACK_ALL));
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Нет авторизации");
            } else {
                throw new Error(`Ошибка! Статус: ${response.status}`);
            }
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.warn(error);
        throw error;
    }
}