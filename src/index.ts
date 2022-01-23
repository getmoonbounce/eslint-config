import { readFile } from "fs/promises";

const configFile = await readFile("./.eslintrc", "utf8");
const ESLintConfig = JSON.parse(configFile);

export default ESLintConfig;