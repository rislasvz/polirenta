interface PriceSheetProps {
  image: string;
  alt: string;
}

export function PriceSheet({ image, alt }: PriceSheetProps) {
  return (
    <div className="flex justify-center px-4 pt-4 pb-16">
      <img
        src={image}
        alt={alt}
        className="h-auto w-full max-w-[26rem] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
      />
    </div>
  );
}
