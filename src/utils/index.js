export async function loadJson (url, options) {

    try{
        const response = await fetch(url,options);
        return response.json;

    }catch (e) {
        return e;
    }
}