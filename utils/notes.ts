import { readdir, stat, readFile } from "fs/promises";
import * as Path from "path";

import { NOTES_PAGES_DIR } from "./paths";

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
    let infoJSONPath = Path.join(NOTES_PAGES_DIR, noteFile, "info.json");
    if (!(await fileExists(infoJSONPath))) {
      continue;
    }
    try {
      let infoJSON = await readFile(infoJSONPath, { encoding: "utf8" });
      let info = JSON.parse(infoJSON) as Note;
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
