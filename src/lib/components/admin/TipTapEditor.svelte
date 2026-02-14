<script lang="ts">
	/**
	 * TipTap rich text editor component.
	 *
	 * Provides a full-featured WYSIWYG editor for blog post content
	 * with formatting, links, images, and code blocks.
	 */
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Link from '@tiptap/extension-link';
	import Image from '@tiptap/extension-image';
	import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
	import { createLowlight, common } from 'lowlight';
	import Icon from '@iconify/svelte';

	const lowlight = createLowlight(common);

	let {
		content = $bindable('')
	}: {
		content?: string;
	} = $props();

	let editorElement: HTMLDivElement;
	let editor = $state<Editor | null>(null);

	onMount(() => {
		editor = new Editor({
			element: editorElement,
			extensions: [
				StarterKit.configure({
					codeBlock: false
				}),
				Link.configure({
					openOnClick: false,
					HTMLAttributes: {
						class: 'text-forge-ember underline'
					}
				}),
				Image.configure({
					HTMLAttributes: {
						class: 'max-w-full h-auto'
					}
				}),
				CodeBlockLowlight.configure({
					lowlight,
					HTMLAttributes: {
						class: 'bg-forge-charcoal border-l-4 border-forge-ember p-4 rounded'
					}
				})
			],
			content,
			editorProps: {
				attributes: {
					class:
						'prose prose-invert max-w-none min-h-[400px] p-6 focus:outline-none bg-forge-black border border-forge-steel'
				}
			},
			onUpdate: ({ editor }) => {
				content = editor.getHTML();
			}
		});
	});

	onDestroy(() => {
		editor?.destroy();
	});

	function toggleBold(): void {
		editor?.chain().focus().toggleBold().run();
	}

	function toggleItalic(): void {
		editor?.chain().focus().toggleItalic().run();
	}

	function toggleCode(): void {
		editor?.chain().focus().toggleCode().run();
	}

	function toggleHeading(level: 2 | 3): void {
		editor?.chain().focus().toggleHeading({ level }).run();
	}

	function toggleBulletList(): void {
		editor?.chain().focus().toggleBulletList().run();
	}

	function toggleOrderedList(): void {
		editor?.chain().focus().toggleOrderedList().run();
	}

	function toggleCodeBlock(): void {
		editor?.chain().focus().toggleCodeBlock().run();
	}

	function toggleBlockquote(): void {
		editor?.chain().focus().toggleBlockquote().run();
	}

	function addLink(): void {
		const url = prompt('Enter URL:');
		if (url) {
			editor?.chain().focus().setLink({ href: url }).run();
		}
	}

	function addImage(): void {
		const url = prompt('Enter image URL:');
		if (url) {
			editor?.chain().focus().setImage({ src: url }).run();
		}
	}

	const isActive = $derived({
		bold: editor?.isActive('bold') ?? false,
		italic: editor?.isActive('italic') ?? false,
		code: editor?.isActive('code') ?? false,
		h2: editor?.isActive('heading', { level: 2 }) ?? false,
		h3: editor?.isActive('heading', { level: 3 }) ?? false,
		bulletList: editor?.isActive('bulletList') ?? false,
		orderedList: editor?.isActive('orderedList') ?? false,
		codeBlock: editor?.isActive('codeBlock') ?? false,
		blockquote: editor?.isActive('blockquote') ?? false,
		link: editor?.isActive('link') ?? false
	});
</script>

<div class="border-forge-steel bg-forge-charcoal border">
	<!-- Toolbar -->
	<div class="border-forge-steel bg-forge-steel/30 flex flex-wrap gap-1 border-b p-2">
		<!-- Headings -->
		<button
			type="button"
			onclick={() => toggleHeading(2)}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.h2
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Heading 2"
		>
			<span class="font-satoshi text-sm font-bold">H2</span>
		</button>
		<button
			type="button"
			onclick={() => toggleHeading(3)}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.h3
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Heading 3"
		>
			<span class="font-satoshi text-sm font-bold">H3</span>
		</button>

		<div class="bg-forge-steel mx-1 h-8 w-px"></div>

		<!-- Text Formatting -->
		<button
			type="button"
			onclick={toggleBold}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.bold
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Bold"
		>
			<Icon icon="ph:text-b-bold" width="20" />
		</button>
		<button
			type="button"
			onclick={toggleItalic}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.italic
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Italic"
		>
			<Icon icon="ph:text-italic-bold" width="20" />
		</button>
		<button
			type="button"
			onclick={toggleCode}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.code
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Inline Code"
		>
			<Icon icon="ph:code-bold" width="20" />
		</button>

		<div class="bg-forge-steel mx-1 h-8 w-px"></div>

		<!-- Lists -->
		<button
			type="button"
			onclick={toggleBulletList}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.bulletList
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Bullet List"
		>
			<Icon icon="ph:list-bullets-bold" width="20" />
		</button>
		<button
			type="button"
			onclick={toggleOrderedList}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.orderedList
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Numbered List"
		>
			<Icon icon="ph:list-numbers-bold" width="20" />
		</button>

		<div class="bg-forge-steel mx-1 h-8 w-px"></div>

		<!-- Blocks -->
		<button
			type="button"
			onclick={toggleCodeBlock}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.codeBlock
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Code Block"
		>
			<Icon icon="ph:brackets-curly-bold" width="20" />
		</button>
		<button
			type="button"
			onclick={toggleBlockquote}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.blockquote
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Blockquote"
		>
			<Icon icon="ph:quotes-bold" width="20" />
		</button>

		<div class="bg-forge-steel mx-1 h-8 w-px"></div>

		<!-- Links & Images -->
		<button
			type="button"
			onclick={addLink}
			class="hover:bg-forge-steel p-2 transition-colors {isActive.link
				? 'bg-forge-ember text-forge-white'
				: 'text-forge-smoke'}"
			title="Add Link"
		>
			<Icon icon="ph:link-bold" width="20" />
		</button>
		<button
			type="button"
			onclick={addImage}
			class="hover:bg-forge-steel text-forge-smoke p-2 transition-colors"
			title="Add Image"
		>
			<Icon icon="ph:image-bold" width="20" />
		</button>
	</div>

	<!-- Editor -->
	<div bind:this={editorElement}></div>
</div>

<style>
	:global(.ProseMirror) {
		min-height: 400px;
		padding: 1.5rem;
		background: var(--color-forge-black);
		color: var(--color-forge-smoke);
		outline: none;
	}

	:global(.ProseMirror h2) {
		font-family: var(--font-heading);
		font-size: 1.875rem;
		font-weight: 700;
		color: var(--color-forge-white);
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.ProseMirror h3) {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-forge-white);
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.ProseMirror p) {
		margin-bottom: 1rem;
		line-height: 1.75;
	}

	:global(.ProseMirror code) {
		font-family: var(--font-mono);
		font-size: 0.875rem;
		background: rgba(255, 77, 0, 0.1);
		color: var(--color-forge-ember);
		padding: 0.125rem 0.5rem;
		border-radius: 0.25rem;
	}

	:global(.ProseMirror pre) {
		background: var(--color-forge-charcoal);
		border-left: 4px solid var(--color-forge-ember);
		padding: 1rem;
		border-radius: 0.25rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	:global(.ProseMirror pre code) {
		background: transparent;
		color: var(--color-forge-smoke);
		padding: 0;
	}

	:global(.ProseMirror blockquote) {
		border-left: 4px solid var(--color-forge-ember);
		padding-left: 1.5rem;
		font-style: italic;
		color: var(--color-forge-ash);
		margin: 1.5rem 0;
	}

	:global(.ProseMirror ul) {
		list-style: none;
		padding-left: 1.5rem;
		margin: 1rem 0;
	}

	:global(.ProseMirror ul li) {
		position: relative;
		margin-bottom: 0.5rem;
	}

	:global(.ProseMirror ul li::before) {
		content: '';
		position: absolute;
		left: -1.5rem;
		top: 0.5rem;
		width: 0.5rem;
		height: 0.5rem;
		background: var(--color-forge-ember);
		border-radius: 50%;
	}

	:global(.ProseMirror ol) {
		list-style: decimal;
		list-style-position: inside;
		margin: 1rem 0;
	}

	:global(.ProseMirror ol li) {
		margin-bottom: 0.5rem;
	}

	:global(.ProseMirror a) {
		color: var(--color-forge-ember);
		text-decoration: underline;
	}

	:global(.ProseMirror img) {
		max-width: 100%;
		height: auto;
		border: 1px solid var(--color-forge-steel);
		margin: 2rem 0;
	}
</style>
