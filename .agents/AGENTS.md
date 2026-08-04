# DenseFusion UI/UX Guidelines

These rules ensure visual consistency across all pages of the DenseFusion website. Always refer to these guidelines when building new pages or modifying existing ones.

## 1. Global Layout & Margins
- **Standard Section Wrapper:** Use `<section>` tags.
- **Section Padding:** Default vertical padding is `py-16 md:py-24` (or `py-10 md:py-16` for tighter sections).
- **Container:** Standard max-width and horizontal padding for the main content block within a section:
  ```tsx
  <div className="mx-auto max-w-[1300px] w-full px-6 md:px-12">
  ```
- **Backgrounds:** Use `bg-white` or `bg-gray-50` for standard sections. For dark/gradient sections, use theme colors (e.g., `bg-gradient-to-br from-[#006D40] to-[#6DC27F]`).

## 2. Animations
- **Scroll Reveal:** Wrap major UI blocks, text groups, or grid items in the `<ScrollReveal>` component to add a fade-up entrance animation on scroll.
- **Smooth Scrolling:** All new page layouts (e.g., `page.tsx`) must wrap their `<main>` content inside the `<LenisProvider>` to ensure smooth scrolling is globally applied.

## 3. Typography
- **Headings:** Use bold weights and tight tracking (`tracking-tight`) for section headers.
- **Paragraphs:** Standard descriptive text should use `leading-relaxed` to improve readability. Example: `text-gray-500 text-lg md:text-xl max-w-2xl leading-relaxed`.

## 4. Button Styles & Interactions
Always use these exact structures for primary and secondary clickable actions to maintain the signature micro-animations.

### Primary Button (Sliding Text on Hover)
Use this for main CTAs. It uses a green gradient background and a vertical text slide animation.
```tsx
<Link
  href="#"
  className="group inline-flex h-11 items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-lg font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90"
>
  <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
    <span className="flex h-11 shrink-0 items-center justify-center text-white">
      Button Text
    </span>
    <span className="flex h-11 shrink-0 items-center justify-center text-white">
      Button Text
    </span>
  </span>
</Link>
```
*(Note: If placed on a white background, you can use `bg-[#1b8e44]` or the gradient. For black/dark themes, you can use `bg-[#0a0a0a]`.)*

### Black Button (Turns Green on Hover)
All solid black buttons (e.g., `bg-[#050505]` or `bg-secondaryBlack`) MUST use `hover:bg-lightGreen` to turn green when hovered upon, matching the primary brand interaction seen on the home page and navbar.


### Secondary Button (Sliding Underline on Hover)
Use this for secondary links (like "Explore Services").
```tsx
<Link
  href="#"
  className="group relative inline-flex items-center rounded px-4 py-3 text-lg font-bold text-lightGray"
>
  <span className="relative">
    Button Text
    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-lightGray transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </span>
</Link>
```
*(Note: Adjust the text and underline color (`text-lightGray` / `bg-lightGray`) based on the background—e.g., use `text-black` / `bg-black` on light backgrounds, or `text-white` / `bg-white` on dark backgrounds.)*
