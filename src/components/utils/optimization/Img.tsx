import { type QRL, $ } from "@builder.io/qwik"

export default function Img({ src, width, height, sizes, alt, eager, onClick }: {
    src: string,
    width: number,
    height: number,
    sizes: [string, string, string],
    alt: string,
    eager?: boolean,
    onClick?: QRL<() => void>
}) {
    const sizesStr = `(max-width:414px)${sizes[0]},(max-width:768px)${sizes[1]},${sizes[2]}`
    let srcStr = ''
    for (let x = 200; x <= width; x += 200) {
        srcStr += `${src}_${x}.webp ${x}w,`
    }

    return (
        <img
            src={`${src}_${width}.webp`}
            srcset={srcStr}
            sizes={sizesStr}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            onClick$={onClick ? $(() => onClick()) : undefined} />
    )
}