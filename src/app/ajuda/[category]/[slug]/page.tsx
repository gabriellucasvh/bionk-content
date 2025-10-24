import HeaderAjuda from "@/app/header-ajuda";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getContent, getAllSlugs, getTitleFromSlug, type Category } from "@/app/lib/content";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  const categories: Category[] = ["guia", "artigo"];
  const params: { category: Category; slug: string }[] = [];
  for (const category of categories) {
    const slugs = getAllSlugs(category);
    for (const slug of slugs) {
      params.push({ category, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ category: Category; slug: string }> }) {
  const { category, slug } = await params;
  const item = getContent(category, slug);
  const title = item?.data?.title ?? getTitleFromSlug(slug);
  const description = item?.data?.description ?? `Ajuda: ${title}`;
  return {
    title,
    description,
  };
}

export default async function AjudaItemPage({ params }: { params: Promise<{ category: Category; slug: string }> }) {
  const { category, slug } = await params;
  if (!category || !slug) {
    notFound();
  }
  const item = getContent(category, slug);
  if (!item) {
    notFound();
  }
  const title = item.data?.title ?? getTitleFromSlug(slug);
  const description = item.data?.description as string | undefined;

  return (
    <div>
      <HeaderAjuda />
      <div className="container mx-auto max-w-3xl px-4 py-8 prose prose-slate dark:prose-invert">
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        {description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : null}
        <Separator className="my-6" />
        <div className="mt-0 mb-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.content}</ReactMarkdown>
        </div>
        <a href="/" className="no-underline bg-lime-400 hover:bg-lime-500 text-black px-6 py-4 rounded-full mx-auto w-full">Voltar para a Central de Ajuda</a>
      </div>
      <Footer />
    </div>
  );
}
