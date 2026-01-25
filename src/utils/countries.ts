import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

const BLOCKED_ISO3 = new Set([
    "RUS",
    "BLR",
    "IRN",
    "PRK",
    "SYR",
    "SDN",
    "SSD",
    "AFG",
    "COD",
    "CAF",
    "CUB",
    "HTI",
    "IRQ",
    "SOM",
    "VEN",
    "ZWE",
    "MMR",
    "MLI",
    "YEM",
]);

export type CountryOption = {
    name: string;
    alpha2: string;
    alpha3: string;
};

function hasAlpha3<T extends { alpha3?: string }>(
    c: T
): c is T & { alpha3: string } {
    return typeof c.alpha3 === "string";
}

export function getAllowedCountries(): CountryOption[] {
    const names = countries.getNames("en", {select: "official"});

    return Object.entries(names)
        .map(([alpha2, name]) => ({
            name,
            alpha2,
            alpha3: countries.alpha2ToAlpha3(alpha2),
        }))
        .filter(hasAlpha3)
        .filter((c) => !BLOCKED_ISO3.has(c.alpha3))
        .sort((a, b) => a.name.localeCompare(b.name));
}