export type ProjectVisibility = "public" | "anonymized" | "private";

interface ProjectIdentity {
  title: string;
  publicTitle?: string;
  visibility: ProjectVisibility;
}

export function getPublicProjectTitle(project: ProjectIdentity): string {
  if (project.visibility === "private") {
    throw new Error("Un projet privé ne peut pas être rendu publiquement.");
  }

  if (project.visibility === "anonymized") {
    const publicTitle = project.publicTitle?.trim();

    if (!publicTitle) {
      throw new Error(
        `Le projet anonymisé « ${project.title} » doit définir publicTitle.`,
      );
    }

    return publicTitle;
  }

  return project.title;
}
