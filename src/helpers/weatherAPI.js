const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();

  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
    return [];
  }

  return data;
};

export const getWeekWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${cityURL}&days=7`);
  const data = await response.json();

  const treatment = data.forecast.forecastday.map((current) => ({
    date: current.date,
    maxTemp: current.day.maxtemp_c,
    minTemp: current.day.mintemp_c,
    condition: current.day.condition.text,
    icon: current.day.condition.icon,
  }));

  return treatment;
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();

  const newObject = {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    country: data.location.country,
    name: data.location.name,
    url: cityURL,
  };

  return newObject;
};
