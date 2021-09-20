import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
} from "@nrwl/devkit";
import { libraryGenerator } from "@nrwl/workspace";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name });
  const libraryRoot = readProjectConfiguration(tree, schema.name).root;
  generateFiles(
    tree,
    joinPathFragments(__dirname, "./files"),
    libraryRoot,
    schema,
  );
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
