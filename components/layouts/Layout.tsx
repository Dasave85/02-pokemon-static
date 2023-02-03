import Head from "next/head";
import { PropsWithChildren } from "react";
import { Navbar } from "../ui/Navbar";

interface Props {
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Daniel Sanchez" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`esta es la pagina sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.webp`} />
      </Head>

      <Navbar />

      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
