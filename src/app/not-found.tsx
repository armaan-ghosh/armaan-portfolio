import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b" />
      <Container className="max-w-xl text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent-strong">
          Error 404
        </p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          This page took a wrong turn.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-base leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back to something real.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" variant="primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back home
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
