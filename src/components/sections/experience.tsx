import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ExperienceItem } from "@/components/experience/experience-item";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="01 — Experience"
          title="Production engineering across teams and stacks"
          description="From design systems at Shopify to data pipelines at BOXX and frontend at HDFC ERGO — work that shipped to real users."
        />

        <div className="mt-14 border-l border-border pl-6 sm:pl-8">
          <ol className="space-y-12">
            {experience.map((item, i) => (
              <li key={`${item.company}-${item.start}`}>
                <Reveal delay={i * 0.04}>
                  <ExperienceItem item={item} defaultOpen={i === 0} />
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
