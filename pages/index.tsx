import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CheatsheetCard, Container, SearchBox } from "components";

import { getNoteList, Note } from "utils/notes";

export interface HomeProps {
  notes: Note[];
}

const Home: NextPage<HomeProps> = ({ notes }) => {
  return (
    <div>
      <Head>
        <title>Fundamental Algorithms Cheatsheet</title>
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
              CHEATSHEET
            </h1>
          </div>
          <div className="w-40 transition-all duration-200 focus-within:w-60">
            <SearchBox />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <a key={note.name} href={note.url}>
              <CheatsheetCard className="col-span-1 h-full" note={note} />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export async function getStaticProps(context: NextPageContext) {
  let notes = await getNoteList();

  return {
    props: { notes } as HomeProps,
  };
}

export default Home;
