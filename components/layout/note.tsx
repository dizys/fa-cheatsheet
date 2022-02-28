import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { Note } from "utils";

import { Container } from "./container";
import { Footer } from "./footer";

export interface NoteLayoutProps {
  className?: string;
  meta: Note;
}

export const NoteLayout: React.FC<NoteLayoutProps> = ({ children, meta }) => {
  let router = useRouter();

  if (meta.url) {
    meta.url = router.pathname;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{meta.name} - Fundamental Algorithms Cheatsheet</title>
        <meta
          name="description"
          content="Cheatsheet for Fundamental Algorithms exams"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="mb-4 flex flex-row justify-between">
          <div className="flex flex-row items-center px-2">
            <Image
              src="/logo.svg"
              alt="Cheatsheet"
              width={32}
              height={32}
              objectFit="contain"
            />
            <h1 className="ml-4 text-xl font-light capitalize text-gray-400">
              {meta.name}
            </h1>
          </div>
        </div>
        <div className="markdown-render flex flex-col">{children}</div>
        <Footer />
      </Container>
    </div>
  );
};
