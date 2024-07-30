import Marginer from "@/components/shared/Marginer/page";
import PairsJustified from "@/components/shared/PairsJustified/page";
import ICountry from "@/interfaceses/country.interface";
import getCountryService from "@/services/getCountry.service";
import { Button, Card, CardBody, Image, Link } from "@nextui-org/react";

export default async function Countries({
  params,
}: {
  params: { name: string };
}) {
  const country: ICountry[] = await getCountryService(params.name);

  const findedFirst = country[0];

  return (
    <Card shadow="none" key={findedFirst.cca2}>
      <CardBody>
        <Marginer y={8}>
          <div className="flex gap-2">
            <Image
              width={240}
              src={findedFirst.flags.png}
              alt={findedFirst.flags.alt}
            />
            <div>
              <p className="text-2xl font-medium">{findedFirst.name.common}</p>
              <p>{findedFirst.name.official}</p>
            </div>
          </div>
          <PairsJustified
            data={[
              {
                label: "Capital",
                value: findedFirst.capital && findedFirst.capital[0],
              },
              {
                label: "Region",
                value: findedFirst.region,
              },
              {
                label: "Subregion",
                value: findedFirst.subregion,
              },
              {
                label: "Population",
                value: findedFirst.population,
              },
              {
                label: "Currencies",
                value:
                  findedFirst.currencies &&
                  Object.keys(findedFirst.currencies).join(", "),
              },
              {
                label: "Start of week",
                value: findedFirst.startOfWeek,
              },
              {
                label: "Languages",
                value:
                  findedFirst.languages &&
                  Object.keys(findedFirst.languages).join(", "),
              },
              {
                label: "Maps",
                value: (
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      as={Link}
                      href={findedFirst.maps && findedFirst.maps.googleMaps}
                    >
                      Open in Google Maps
                    </Button>
                    <Button
                      as={Link}
                      href={findedFirst.maps && findedFirst.maps.openStreetMaps}
                    >
                      Open in Open Street Maps
                    </Button>
                  </div>
                ),
              },
            ]}
            y={8}
          />
        </Marginer>
      </CardBody>
    </Card>
  );
}
