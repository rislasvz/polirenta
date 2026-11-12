interface BannerProps {
  image: string;
  alt: string;
}

export function Banner({ image, alt }: BannerProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <img
        src={image}
        alt={alt}
        className="block w-full rounded-lg shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}
