

async function fetchProfileData () {
    const url = './data/profile.json';
    const fecthing = await fetch(url);
    return await fecthing.json();
}