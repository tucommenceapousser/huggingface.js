import { readFileSync, writeFileSync } from "fs";

const hubPackage = JSON.parse(readFileSync("../hub/package.json").toString());
const inferencePackage = JSON.parse(readFileSync("../inference/package.json").toString());

let content = readFileSync("../../README.md").toString();

content = content
	.replace(
		/https:[/][/]cdn[.]jsdelivr[.]net[/]npm[/]@huggingface[/]inference@\d([.]\d)?([.]\d)?[/][+]esm/,
		`https://cdn.jsdelivr.net/npm/@huggingface/inference@${inferencePackage.version}/+esm`
	)
	.replace(
		/https:[/][/]cdn[.]jsdelivr[.]net[/]npm[/]@huggingface[/]hub@\d([.]\d)?([.]\d)?[/][+]esm/,
		`https://cdn.jsdelivr.net/npm/@huggingface/hub@${hubPackage.version}/+esm`
	);

writeFileSync("../../README.md", Buffer.from(content));
