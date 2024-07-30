import INativeName from "./nativeName.interface";

export default interface ICountryName {
  common: string;
  official: string;
  nativeName: Record<string, INativeName>;
}
