import { Nodebox } from "https://cdn.jsdelivr.net/npm/@codesandbox/nodebox/build/index.min.mjs";

const nodeboxIframe = document.getElementById("nodebox-iframe");
const previewIframe = document.getElementById("preview-iframe");

const BASE_URL = location.pathname.endsWith("/") ? location.pathname.slice(0, -1) : location.pathname;

const nodebox = new Nodebox({
	"iframe": nodeboxIframe,
	"runtimeUrl": BASE_URL + "/proprietary/bridge.html"
});

await nodebox.connect();

await nodebox.fs.init({
	"package.json": JSON.stringify({
		"name": "my-app",
	}),
	"main.js": `import http from 'http';
	
	const server = http.createServer((req, res) => {
		res.writeHead(200, {
		'Content-Type': 'text/plain'
		});
		res.end('Hello from Nodebox')
	});
	
	server.listen(8000, () => {
		console.log('Server is ready!');
	})`,
});

const shell = nodebox.shell.create();

const { id } = await shell.runCommand("node", ["main.js"]);

const { url } = await nodebox.preview.getByShellId(id);

previewIframe.setAttribute("src", BASE_URL + "/proprietary/preview.html");
