import InnerSection from "../__components/inner-section";

export default async function CreateNewContentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return (
    <InnerSection slug={slug} />
  );
}

