import InnerComponent from "../_components/InnerComponent";

export default async function CreateNewContentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  return (
    <InnerComponent slug={slug} />
  );
}

