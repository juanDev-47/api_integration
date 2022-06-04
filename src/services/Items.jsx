const API_URL = "https://api.mercadolibre.com/sites/MCO";

export async function Items() {
  try {
    const response = await fetch(`${API_URL}/Motorola 20G6`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}