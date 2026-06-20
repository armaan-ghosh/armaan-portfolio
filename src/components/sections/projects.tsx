import { featuredProjects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="02 — Selected work"
          title="Products I've designed, built, and shipped"
          description="Side projects taken end-to-end — from a published Chrome extension to a machine-learning model with real accuracy gains."
        />

        <div className="mt-14 space-y-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
