import React from "react";
import Link from "next/link";
import Image from "next/image";
import CopyButton from "./CopyButton";

export const MDXComponents = {
  h1: (props: any) => (
    <h1
      className="text-3xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4 tracking-tight"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-3 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-xl font-semibold text-gray-900 dark:text-white mt-5 mb-2 tracking-tight"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base"
      {...props}
    />
  ),
  a: ({ href, ...props }: any) => {
    const isInternal = href && href.startsWith("/");
    if (isInternal) {
      return (
        <Link
          href={href}
          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
        {...props}
      />
    );
  },
  ul: (props: any) => (
    <ul
      className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 pl-4"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4 pl-4"
      {...props}
    />
  ),
  li: (props: any) => <li className="text-base" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-indigo-500 pl-4 italic text-gray-600 dark:text-gray-400 my-4 bg-gray-50 dark:bg-gray-900 py-2 pr-2 rounded-r"
      {...props}
    />
  ),
  img: (props: any) => (
    <div className="my-6 relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
      <Image
        src={props.src}
        alt={props.alt || "MDX Embedded Image"}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
    </div>
  ),
  pre: ({ children, ...props }: any) => {
    const getCodeText = (c: any): string => {
      if (!c) return "";
      if (typeof c === "string") return c;
      if (Array.isArray(c)) return c.map(getCodeText).join("");
      if (c.props && c.props.children) return getCodeText(c.props.children);
      return "";
    };

    const textContent = getCodeText(children);

    return (
      <div className="relative group my-6">
        {textContent && <CopyButton text={textContent} />}
        <pre
          className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto border border-gray-800 text-sm font-mono leading-relaxed"
          {...props}
        >
          {children}
        </pre>
      </div>
    );
  },
  code: (props: any) => (
    <code
      className="bg-gray-100 dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-mono text-sm"
      {...props}
    />
  ),
  Callout: ({ children, type = "info" }: any) => {
    const bg =
      type === "warning"
        ? "bg-amber-50 dark:bg-amber-950/20 border-amber-500"
        : type === "danger"
        ? "bg-rose-50 dark:bg-rose-950/20 border-rose-500"
        : "bg-indigo-50 dark:bg-indigo-950/20 border-indigo-500";
    const text =
      type === "warning"
        ? "text-amber-800 dark:text-amber-200"
        : type === "danger"
        ? "text-rose-800 dark:text-rose-200"
        : "text-indigo-800 dark:text-indigo-200";

    return (
      <div className={`border-l-4 p-4 my-6 rounded-r ${bg} ${text}`}>
        {children}
      </div>
    );
  },
};
