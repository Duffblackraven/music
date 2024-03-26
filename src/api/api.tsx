const API_URL = "https://skypro-music-api.skyeng.tech/catalog/";

export async function getTracks() {
    try {
        const response = await fetch(API_URL + "track/all/");
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Нет авторизации");
            } else {
                throw new Error(`Ошибка! Статус: ${response.status}`);
            }
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.warn(error);
        throw error;
    }
}