import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-14 text-center text-cyan-900">
      <Image
        src="/logo-wedding.png"
        alt=""
        width={104}
        height={104}
        className="mx-auto mb-4 opacity-70"
      />

      <h2 className="font-heading text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-bold text-cyan-900">
          {subtitle}
        </p>
      )}
    </div>
  );
}