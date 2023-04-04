import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";
//https://betterprogramming.pub/create-your-own-markdown-parser-bffb392a06db
//parser를 만들어보자!

interface PaintData {
  data:{
    title: string;
    postContent: string;
  }
}

function PaintForm({ data: { title, postContent } }:PaintData) {
	const rules: [RegExp,string][] = [
		//header rules
		[/#{6}\s?([^\n]+)/g, "<h6>$1</h6>"],
		[/#{5}\s?([^\n]+)/g, "<h5>$1</h5>"],
		[/#{4}\s?([^\n]+)/g, "<h4>$1</h4>"],
		[/#{3}\s?([^\n]+)/g, "<h3>$1</h3>"],
		[/#{2}\s?([^\n]+)/g, "<h2>$1</h2>"],
		[/#{1}\s?([^\n]+)/g, "<h1>$1</h1>"],

		//bold, italics and paragragh rules
		[/\*\*\s?([^\n]+)\*\*/g, "<b>$1</b>"],
		[/\*\s?([^\n]+)\*/g, "<i>$1</i>"],
		[/__([^_]+)__/g, "<b>$1</b>"],
		[/_([^_`]+)_/g, "<i>$1</i>"],
		[/([^\n]+\n?)/g, "<p>$1</p>"],

		//links
		[
			/\[([^\]]+)\]\(([^)]+)\)/g,
			'<a href="$2" style="color:#2A5DB0;text-decoration: none;">$1</a>',
		],

		//highlights
		[
			/(`)(\s?[^\n,]+\s?)(`)/g,
			'<a style="background-color:grey;color:black;text-decoration: none;border-radius: 3px;padding:0 2px;">$2</a>',
		],

		//Lists
		[/([^\n]+)(\+)([^\n]+)/g, "<ul><li>$3</li></ul>"],
		[/([^\n]+)(\*)([^\n]+)/g, "<ul><li>$3</li></ul>"],

		//Image
		[
			/!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g,
			'<img src="$2" alt="$1" title="$3" />',
		],
		[/(^---+)/g, `<div style='background-color:grey;height:3px;'></div>`],
	];
	let markupContext = postContent ? String(postContent) : "";

	if (markupContext.length > 0) {
		rules.forEach(([rule, template]) => {
			markupContext = markupContext.replace(rule, template);
		});
	}
	const jsx = parse(sanitizeHtml(markupContext));
	console.log(
		markupContext,
		sanitizeHtml(markupContext),
		parse(markupContext),
		jsx
	);
	return (
		<div
			style={{
				width: "100%",
				paddingTop: "60px",
				paddingBottom: "70px",
			}}
		>
			{title && <h1>{title}</h1>}
			{markupContext.length > 0 && (
				<div style={{ textAlign: "start" }}>{jsx}</div>
			)}
		</div>
	);
}
export default PaintForm;
