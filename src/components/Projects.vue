<script setup>
const projectsCardList = [
  {
    imageUrl: "./img/project-logos/Rectangle1.svg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    span: "Tech stack ",
    techStack: " : HTML , JavaScript, SASS, React",
    chainUrl: "./img/project-logos/chain.svg",
    preview: "Live Preview",
    gitLogo: "./img/project-logos/git.svg",
    viewText: "View Code",
  },
  {
    imageUrl: "./img/project-logos/Rectangle2.svg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    span: "Tech stack ",
    techStack: " : HTML , JavaScript, SASS, React",
    chainUrl: "./img/project-logos/chain.svg",
    preview: "Live Preview",
    gitLogo: "./img/project-logos/git.svg",
    viewText: "View Code",
  },
  {
    imageUrl: "./img/project-logos/Rectangle3.svg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    span: "Tech stack ",
    techStack: " : HTML , JavaScript, SASS, React",
    chainUrl: "./img/project-logos/chain.svg",
    preview: "Live Preview",
    gitLogo: "./img/project-logos/git.svg",
    viewText: "View Code",
  },
  {
    imageUrl: "./img/project-logos/Rectangle4.svg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    span: "Tech stack ",
    techStack: " : HTML , JavaScript, SASS, React",
    chainUrl: "./img/project-logos/chain.svg",
    preview: "Live Preview",
    gitLogo: "./img/project-logos/git.svg",
    viewText: "View Code",
  },
  {
    imageUrl: "./img/project-logos/Rectangle5.svg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    span: "Tech stack ",
    techStack: " : HTML , JavaScript, SASS, React",
    chainUrl: "./img/project-logos/chain.svg",
    preview: "Live Preview",
    gitLogo: "./img/project-logos/git.svg",
    viewText: "View Code",
  },
  {
    imageUrl: "./img/project-logos/Rectangle6.svg",
    title: "Project Tile goes here",
    description:
      "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    span: "Tech stack ",
    techStack: " : HTML , JavaScript, SASS, React",
    chainUrl: "./img/project-logos/chain.svg",
    preview: "Live Preview",
    gitLogo: "./img/project-logos/git.svg",
    viewText: "View Code",
  },
];
</script>

<template>
  <div>
    <div class="m-auto flex flex-col items-center w-100% gap-8">
      <h2
        class="stack-title text-title-color font-bold text-5xl w-auto font-bold max-[715px]:text-4xl max-[480px]:text-3xl"
      >
        Projects
      </h2>
      <p
        class="text-light-grey text-4xl max-[715px]:text-3xl max-[480px]:text-2xl flex text-center"
      >
        Things I’ve built so far
      </p>
    </div>
    <ul
      class="grid grid-cols-3 gap-14 justify-items-center items-center mt-20 max-[1215px]:grid-cols-2 max-[830px]:grid-cols-1"
    >
      <div
        v-for="projectCard in projectsCardList"
        :key="projectCard.id"
        class="project-card flex flex-col items-center w-full gap-8 bg-white"
      >
        <img :src="projectCard.imageUrl" alt="Project Image" class="w-full" />
        <div class="p-6">
          <h3 class="project-card-title text-black font-bold text-lg mb-4">
            {{ projectCard.title }}
          </h3>
          <p
            class="project-card-description text-light-grey text-xl font-light mb-4"
          >
            {{ projectCard.description }}
          </p>
          <p class="project-card-tech-stack text-light-grey text-lg mb-8">
            <span class="project-card-bold-text">
              {{ projectCard.span }}
            </span>
            {{ projectCard.techStack }}
          </p>
          <div class="flex justify-start items-center gap-12">
            <div class="flex justify-center items-center gap-2.5">
              <img
                class="h-5 w-5 mt-1"
                :src="projectCard.chainUrl"
                alt="Chain Image"
              />
              <a
                href="#"
                target="_blank"
                class="text-black text-base font-bold underline hover:text-blue-500 max-[380px]:text-sm"
              >
                {{ projectCard.preview }}
              </a>
            </div>
            <div class="flex justify-center items-center gap-2.5">
              <img
                class="h-5 w-5"
                :src="projectCard.gitLogo"
                alt="Chain Image"
              />
              <a
                href="#"
                target="_blank"
                class="text-black text-base font-bold underline hover:text-blue-500 max-[380px]:text-sm"
              >
                {{ projectCard.viewText }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.project-card {
  border-radius: 20px 20px 20px 20px;
  box-shadow: 2px 2px 100px 0px #00000033;

  &-title {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
  }

  &-description {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
  }

  &-tech-stack {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
  }
  &-bold-text {
    font-weight: 500;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 2px 200px 0px #00000033;
  }
}
</style>
