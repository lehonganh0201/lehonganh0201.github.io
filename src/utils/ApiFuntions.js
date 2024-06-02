import axios from 'axios'

export async function calEquation(a,b,c,d,e){
    try {
        const result = await axios.post(`https://technhanh.com/form/handle`,a,b,c,d,e);
        return result.data;
    } catch (error) {
        console.error(error.message);
    }
}