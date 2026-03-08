export const parseSectionContent = (content: any[] | undefined): string => {
    if (!content || !Array.isArray(content)) return '';

    return content
        .filter((block) => block.type === 'text' || block.type === 'rich_text')
        .map((block) => {
            let htmlContent = block.data?.content || '';

            // If the content was pasted into a rich text code block, it gets wrapped in <pre><code> 
            // and HTML entities are escaped. We need to extract the inner text and decode it.
            const codeBlockRegex = /^<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>$/i;
            const match = htmlContent.match(codeBlockRegex);

            if (match) {
                // Extract inner content and decode HTML entities
                htmlContent = decodeHTMLEntities(match[1]);
            }

            // Convert JSX `className` to standard HTML `class` for proper styling 
            // when injected into the DOM via dangerouslySetInnerHTML
            htmlContent = htmlContent.replace(/className=/g, 'class=');

            return htmlContent;
        })
        .join('');
};

const decodeHTMLEntities = (text: string): string => {
    if (typeof document === 'undefined') return text; // SSR fallback
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
};
