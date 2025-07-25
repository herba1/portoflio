import { getProjects } from "@/app/api/cmsData";
import { instrumentSerif } from "@/app/fonts";
import { ProjectList } from "./ProjectList";

export default async function Portoflio() {
  const projects = await getProjects();

  return (
    <section className="h-fit w-full" id="portfolio">
      <h2
        className={`text-dark mb-6 tracking-heading-mobile lg:tracking-heading text-6xl lg:text-8xl ${instrumentSerif.className}`}
      >
        Portoflio
      </h2>
      <ProjectList data={projects}></ProjectList>
    </section>
  );
}
