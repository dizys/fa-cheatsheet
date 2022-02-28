import { readdir, stat, readFile } from "fs/promises";
import * as Path from "path";
import { NOTES_PAGES_DIR } from "./paths";

const META_JS_REGEX = /export\s+const\s+meta\s*=[\s\n]*\{((.|\n)*?)\}[\s\n]*;/;

export interface Note {
  name: string;
  description: string;
  icon?: string;
  url: string;
}

export async function getNoteList(): Promise<Note[]> {
  const notesFiles = await readdir(NOTES_PAGES_DIR);

  let notes: Note[] = [];

  for (let noteFile of notesFiles) {
    let notePath = Path.join(NOTES_PAGES_DIR, noteFile);
    let noteFileStat = await stat(notePath);
    if (!noteFileStat.isDirectory()) {
      continue;
    }
    let indexMDXPath = Path.join(NOTES_PAGES_DIR, noteFile, "index.mdx");
    if (!(await fileExists(indexMDXPath))) {
      continue;
    }
    try {
      let indexMDX = await readFile(indexMDXPath, { encoding: "utf8" });

      let matches = indexMDX.match(META_JS_REGEX);

      if (!matches) {
        continue;
      }

      let metaObjectJS = `({${matches[1]}})`;

      let info = eval(metaObjectJS) as Note;

      notes.push({
        ...info,
        url: `/notes/${noteFile}`,
      });
    } catch (err) {
      console.error(err);
      continue;
    }
  }

  return notes;
}

export async function fileExists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch (e) {
    return false;
  }
}
