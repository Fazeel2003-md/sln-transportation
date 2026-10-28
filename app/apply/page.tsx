import DriverApplication from "./driver-application";

export const metadata = {
  title: "Driver Application | SLN Transportation",
  description: "Apply to become a school vehicle driver with SLN Transportation.",
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ position?: string | string[] }>;
}) {
  const { position } = await searchParams;
  const initialPosition = position === "monitor" ? "monitor" : "driver";

  return <DriverApplication initialPosition={initialPosition} />;
}
