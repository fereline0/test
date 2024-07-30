import Marginer from "@/components/shared/Marginer/page";
import ICountry from "@/interfaceses/country.interface";
import getCountriesService from "@/services/getCountries.service";
import { Card, CardBody, Link, User } from "@nextui-org/react";

export default async function Countries() {
  const countries: ICountry[] = await getCountriesService();

  return (
    <Marginer y={8}>
      {countries.map((country) => (
        <Card shadow="none" key={country.cca2}>
          <CardBody>
            <User
              className="w-fit"
              name={
                <Link href={`/${country.name.common}`}>
                  {country.name.common}
                </Link>
              }
              description={country.capital}
              avatarProps={{ src: country.flags.png }}
            />
          </CardBody>
        </Card>
      ))}
    </Marginer>
  );
}
