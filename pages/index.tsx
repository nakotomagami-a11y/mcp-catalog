import Head from "next/head";
import type { GetStaticProps } from "next";
import type { CatalogData } from "@shared/types";
import { CatalogPage } from "@modules/catalog/components/CatalogPage";
import fs from "fs";
import path from "path";

interface HomeProps {
  data: CatalogData;
}

export default function Home({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>AI Integrations Catalog</title>
        <meta
          name="description"
          content="A comprehensive catalog of MCP servers and ChatGPT integrations for AI agents and developer tools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CatalogPage data={data} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const filePath = path.join(process.cwd(), "data", "catalog.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const data: CatalogData = JSON.parse(raw);
  return { props: { data } };
};
