import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-14 text-center">
      <Image
        src="/flower.png"
        alt=""
        width={34}
        height={34}
        className="mx-auto mb-4 opacity-70"
      />

      <h2 className="font-heading text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-stone-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}