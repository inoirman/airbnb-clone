import countries from "world-countries";

const formattesCountries = countries.map((country) => {
    return {
        value: country.cca2,
        label: country.name.common,
        flag: country.flag,
        latlng: country.latlng,
        region: country.region
    }
});

const useCountries = () => {
    const getAll = () => formattesCountries;
    const getByValue = ((value: string) => {
        return formattesCountries.find((item) => item.value === value)
    })

    return {
        getAll,
        getByValue
    }
}

export default useCountries