
/** Get gifs from API */
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MRtWcbTtSXnQxkmO16PcpfEExUbREVX0`;

    const response = await fetch(url);
    const { data } = await response.json();

    return data.map(img => {

        const { id, title, images } = img
        const { url } = images?.downsized_medium

        return { id, title, url }
    });
}