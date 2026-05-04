export const fetchRandomDog = async () => {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) throw new Error("API Error");
        
        const data = await response.json();
        return data.message; 
    } catch (error) {
        throw error; 
    }
};