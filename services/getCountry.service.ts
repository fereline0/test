import { notFound } from "next/navigation";

export default async (name: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v3.1/name/${name}?fullText=true`
  );

  if (!res.ok) notFound();

  return res.json();
};
